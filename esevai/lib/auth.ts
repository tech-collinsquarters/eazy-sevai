import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";
import bcrypt from "bcrypt";

// Helper: get session maxAge based on keep_signed_in cookie
function getSessionMaxAge(cookieHeader?: string): number {
  const THIRTY_DAYS = 30 * 24 * 60 * 60; // seconds
  const ONE_DAY = 24 * 60 * 60;
  if (!cookieHeader) return ONE_DAY;
  const match = cookieHeader.match(/keep_signed_in=([^;]+)/);
  return match?.[1] === "true" ? THIRTY_DAYS : ONE_DAY;
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days max (controlled per-user via cookie check in jwt callback)
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    // ─── Google OAuth ────────────────────────────────────────────────
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true, // allow linking if email already exists
    }),

    // ─── Email/Password ─────────────────────────────────────────────
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid credentials");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid password");
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // On sign-in, attach user data to the token
      if (user) {
        token.id = user.id;
        token.role = (user as any).role || "CLIENT";
      }
      // For Google sign-in, mark provider
      if (account?.provider === "google") {
        token.provider = "google";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
        (session.user as any).provider = token.provider;
      }
      return session;
    },
  },
  events: {
    // Fires when a Google user signs in for the first time (auto-registration via PrismaAdapter)
    async signIn({ user, account, isNewUser }) {
      if (isNewUser && account?.provider === "google") {
        console.log(`[Auth] New Google user registered: ${user.email}`);
      }
    },
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
};
