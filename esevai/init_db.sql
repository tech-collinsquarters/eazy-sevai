-- NextAuth Models
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
  CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"(id) ON DELETE CASCADE,
  CONSTRAINT "Account_provider_providerAccountId_key" UNIQUE(provider, "providerAccountId")
);

CREATE TABLE IF NOT EXISTS "Session" (
  id TEXT NOT NULL PRIMARY KEY,
  "sessionToken" TEXT NOT NULL UNIQUE,
  "userId" TEXT NOT NULL
  expires TIMESTAMP NOT NULL,
  CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "VerificationToken" (
  identifier TEXT NOT NULL,
  token TEXT NOT NULL UNIQUE,
  expires TIMESTAMP NOT NULL,
  CONSTRAINT "VerificationToken_identifier_token_key" UNIQUE(identifier, token)
);

-- System Models
CREATE TABLE IF NOT EXISTS "User" (
  id TEXT NOT NULL PRIMARY KEY,
  full_name TEXT,
  email TEXT UNIQUE,
  email_verified TIMESTAMP,
  image TEXT,
  mobile TEXT,
  country TEXT,
  "hashedPassword" TEXT,
  "verificationToken" TEXT,
  role TEXT NOT NULL DEFAULT 'CLIENT',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "Service" (
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

CREATE TABLE IF NOT EXISTS "Application" (
  id TEXT NOT NULL PRIMARY KEY,
  user_id TEXT NOT NULL,
  service_id INTEGER,
  service_name TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  form_data JSONB,
  currency TEXT,
  amount DOUBLE PRECISION,
  "paymentStatus" TEXT NOT NULL DEFAULT 'pending',
  payment_id TEXT,
  tracking_number TEXT,
  current_stage TEXT,
  submitted_at TIMESTAMP,
  completed_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Application_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "User"(id),
  CONSTRAINT "Application_service_id_fkey" FOREIGN KEY (service_id) REFERENCES "Service"(id)
);

CREATE TABLE IF NOT EXISTS "Document" (
  id TEXT NOT NULL PRIMARY KEY,
  application_id TEXT,
  user_id TEXT,
  "documentType" TEXT,
  "fileName" TEXT NOT NULL,
  url_path TEXT,
  "cloudinaryId" TEXT,
  size INTEGER,
  "mimeType" TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  uploaded_by TEXT,
  verified_by TEXT,
  verified_at TIMESTAMP,
  "expiresAt" TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Document_application_id_fkey" FOREIGN KEY (application_id) REFERENCES "Application"(id),
  CONSTRAINT "Document_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "User"(id)
);

CREATE TABLE IF NOT EXISTS "Payment" (
  id TEXT NOT NULL PRIMARY KEY,
  application_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  amount DOUBLE PRECISION NOT NULL,
  currency TEXT NOT NULL,
  "paymentMethod" TEXT,
  "transactionId" TEXT,
  "razorpayOrderId" TEXT,
  "razorpayPaymentId" TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Payment_application_id_fkey" FOREIGN KEY (application_id) REFERENCES "Application"(id),
  CONSTRAINT "Payment_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "User"(id)
);

CREATE TABLE IF NOT EXISTS "Consultation" (
  id TEXT NOT NULL PRIMARY KEY,
  user_id TEXT NOT NULL,
  service_id INTEGER,
  "consultantName" TEXT,
  "consultantEmail" TEXT,
  "consultantPhone" TEXT,
  status TEXT NOT NULL DEFAULT 'scheduled',
  scheduled_at TIMESTAMP,
  completed_at TIMESTAMP,
  notes TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Consultation_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "User"(id),
  CONSTRAINT "Consultation_service_id_fkey" FOREIGN KEY (service_id) REFERENCES "Service"(id)
);

CREATE TABLE IF NOT EXISTS "DocumentAccessLog" (
  id TEXT NOT NULL PRIMARY KEY,
  document_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  access_type TEXT NOT NULL,
  accessed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "DocumentAccessLog_document_id_fkey" FOREIGN KEY (document_id) REFERENCES "Document"(id),
  CONSTRAINT "DocumentAccessLog_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "User"(id)
);

CREATE TABLE IF NOT EXISTS "TrackingEvent" (
  id TEXT NOT NULL PRIMARY KEY,
  application_id TEXT NOT NULL,
  stage TEXT NOT NULL,
  status TEXT NOT NULL,
  description TEXT,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "TrackingEvent_application_id_fkey" FOREIGN KEY (application_id) REFERENCES "Application"(id)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS "Account_userId_idx" ON "Account"("userId");
CREATE INDEX IF NOT EXISTS "Session_userId_idx" ON "Session"("userId");
CREATE INDEX IF NOT EXISTS "Application_user_id_idx" ON "Application"(user_id);
CREATE INDEX IF NOT EXISTS "Application_status_idx" ON "Application"(status);
CREATE INDEX IF NOT EXISTS "Document_application_id_idx" ON "Document"(application_id);
CREATE INDEX IF NOT EXISTS "Document_user_id_idx" ON "Document"(user_id);
CREATE INDEX IF NOT EXISTS "Payment_application_id_idx" ON "Payment"(application_id);
CREATE INDEX IF NOT EXISTS "Payment_user_id_idx" ON "Payment"(user_id);
CREATE INDEX IF NOT EXISTS "Consultation_user_id_idx" ON "Consultation"(user_id);
CREATE INDEX IF NOT EXISTS "TrackingEvent_application_id_idx" ON "TrackingEvent"(application_id);
