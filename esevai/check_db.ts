import { prisma } from '@/lib/prisma';

(async () => {
  try {
    const count = await prisma.user.count();
    console.log('users count', count);
  } catch (err) {
    console.error('ERROR', err);
  } finally {
    await prisma.$disconnect();
  }
})();