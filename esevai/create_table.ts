import { prisma } from '@/lib/prisma';

(async () => {
  try {
    console.log('Attempting to create users table...');
    const result = await prisma.$executeRawUnsafe(`
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
    console.log('✓ Table created successfully');
    
    const count = await prisma.user.count();
    console.log('✓ Users table accessible, current count:', count);
  } catch (err) {
    console.error('ERROR', err);
  } finally {
    await prisma.$disconnect();
  }
})();