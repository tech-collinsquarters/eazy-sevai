import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Create the users table
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT NOT NULL PRIMARY KEY,
        full_name TEXT,
        email TEXT UNIQUE,
        email_verified TIMESTAMPTZ,
        image TEXT,
        mobile TEXT,
        country TEXT,
        hashed_password TEXT,
        verification_token TEXT,
        role TEXT NOT NULL DEFAULT 'CLIENT',
        created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Create other required tables
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "Account" (
        id TEXT NOT NULL PRIMARY KEY,
        "userId" TEXT NOT NULL,
        type TEXT NOT NULL,
        provider TEXT NOT NULL,
        "providerAccountId" TEXT NOT NULL,
        refresh_token TEXT,
        access_token TEXT,
        expires_at INTEGER,
        token_type TEXT,
        scope TEXT,
        id_token TEXT,
        session_state TEXT,
        CONSTRAINT "Account_provider_providerAccountId_key" UNIQUE(provider, "providerAccountId")
      );
    `);

    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "Session" (
        id TEXT NOT NULL PRIMARY KEY,
        "sessionToken" TEXT NOT NULL UNIQUE,
        "userId" TEXT NOT NULL,
        expires TIMESTAMPTZ NOT NULL
      );
    `);

    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "VerificationToken" (
        identifier TEXT NOT NULL,
        token TEXT NOT NULL UNIQUE,
        expires TIMESTAMPTZ NOT NULL,
        CONSTRAINT "VerificationToken_identifier_token_key" UNIQUE(identifier, token)
      );
    `);

    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS services (
        id SERIAL NOT NULL PRIMARY KEY,
        slug TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        category TEXT,
        base_price_usd DOUBLE PRECISION NOT NULL,
        base_price_gbp DOUBLE PRECISION NOT NULL,
        base_price_aed DOUBLE PRECISION NOT NULL,
        processing_days INTEGER,
        active BOOLEAN NOT NULL DEFAULT true
      );
    `);

    const count = await prisma.user.count();
    return NextResponse.json({
      message: "Tables created successfully",
      userCount: count,
    });
  } catch (err: any) {
    console.error("Error creating tables:", err);
    return NextResponse.json(
      { error: err.message || "Failed to create tables" },
      { status: 500 }
    );
  }
}
