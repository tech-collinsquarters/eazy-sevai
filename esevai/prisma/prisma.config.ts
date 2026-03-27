import { defineConfig } from 'prisma';

export default defineConfig({
  schema: './schema.prisma',
  db: {
    url: process.env.DATABASE_URL,
    directUrl: process.env.DIRECT_URL,
  },
});