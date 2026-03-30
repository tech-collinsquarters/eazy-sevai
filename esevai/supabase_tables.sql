-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (matches your Prisma schema exactly)
CREATE TABLE IF NOT EXISTS public.users (
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

-- Account table (NextAuth)
CREATE TABLE IF NOT EXISTS public."Account" (
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

-- Session table (NextAuth)
CREATE TABLE IF NOT EXISTS public."Session" (
  id TEXT NOT NULL PRIMARY KEY,
  "sessionToken" TEXT NOT NULL UNIQUE,
  "userId" TEXT NOT NULL,
  expires TIMESTAMPTZ NOT NULL
);

-- VerificationToken table (NextAuth)
CREATE TABLE IF NOT EXISTS public."VerificationToken" (
  identifier TEXT NOT NULL,
  token TEXT NOT NULL UNIQUE,
  expires TIMESTAMPTZ NOT NULL,
  CONSTRAINT "VerificationToken_identifier_token_key" UNIQUE(identifier, token)
);

-- Services table
CREATE TABLE IF NOT EXISTS public.services (
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

-- Applications table
CREATE TABLE IF NOT EXISTS public.applications (
  id TEXT NOT NULL PRIMARY KEY,
  user_id TEXT NOT NULL,
  service_id INTEGER,
  service_name TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  form_data JSONB,
  currency TEXT,
  amount DOUBLE PRECISION,
  payment_status TEXT NOT NULL DEFAULT 'pending',
  payment_id TEXT,
  tracking_number TEXT,
  current_stage TEXT,
  submitted_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Documents table
CREATE TABLE IF NOT EXISTS public.documents (
  id TEXT NOT NULL PRIMARY KEY,
  application_id TEXT,
  user_id TEXT,
  document_type TEXT,
  file_name TEXT,
  url_path TEXT,
  cloudinary_id TEXT,
  size INTEGER,
  mime_type TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  uploaded_by TEXT,
  verified_by TEXT,
  verified_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Payments table
CREATE TABLE IF NOT EXISTS public.payments (
  id TEXT NOT NULL PRIMARY KEY,
  application_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  amount DOUBLE PRECISION NOT NULL,
  currency TEXT NOT NULL,
  payment_method TEXT,
  transaction_id TEXT,
  razorpay_order_id TEXT,
  razorpay_payment_id TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Consultations table
CREATE TABLE IF NOT EXISTS public.consultations (
  id TEXT NOT NULL PRIMARY KEY,
  user_id TEXT NOT NULL,
  service_id INTEGER,
  consultant_name TEXT,
  consultant_email TEXT,
  consultant_phone TEXT,
  status TEXT NOT NULL DEFAULT 'scheduled',
  scheduled_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- DocumentAccessLog table
CREATE TABLE IF NOT EXISTS public."DocumentAccessLog" (
  id TEXT NOT NULL PRIMARY KEY,
  document_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  access_type TEXT NOT NULL,
  accessed_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- TrackingEvent table
CREATE TABLE IF NOT EXISTS public.tracking_events (
  id TEXT NOT NULL PRIMARY KEY,
  application_id TEXT NOT NULL,
  stage TEXT NOT NULL,
  status TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS "Account_userId_idx" ON public."Account"("userId");
CREATE INDEX IF NOT EXISTS "Session_userId_idx" ON public."Session"("userId");
CREATE INDEX IF NOT EXISTS "applications_user_id_idx" ON public.applications(user_id);
CREATE INDEX IF NOT EXISTS "applications_status_idx" ON public.applications(status);
CREATE INDEX IF NOT EXISTS "documents_application_id_idx" ON public.documents(application_id);
CREATE INDEX IF NOT EXISTS "documents_user_id_idx" ON public.documents(user_id);
CREATE INDEX IF NOT EXISTS "payments_application_id_idx" ON public.payments(application_id);
CREATE INDEX IF NOT EXISTS "payments_user_id_idx" ON public.payments(user_id);
CREATE INDEX IF NOT EXISTS "consultations_user_id_idx" ON public.consultations(user_id);
CREATE INDEX IF NOT EXISTS "tracking_events_application_id_idx" ON public.tracking_events(application_id);

-- Add foreign key constraints
ALTER TABLE public.applications ADD CONSTRAINT "applications_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE public.documents ADD CONSTRAINT "documents_application_id_fkey" FOREIGN KEY (application_id) REFERENCES public.applications(id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE public.documents ADD CONSTRAINT "documents_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE public.payments ADD CONSTRAINT "payments_application_id_fkey" FOREIGN KEY (application_id) REFERENCES public.applications(id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE public.payments ADD CONSTRAINT "payments_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE public.consultations ADD CONSTRAINT "consultations_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE public.tracking_events ADD CONSTRAINT "tracking_events_application_id_fkey" FOREIGN KEY (application_id) REFERENCES public.applications(id) ON DELETE CASCADE ON UPDATE CASCADE;