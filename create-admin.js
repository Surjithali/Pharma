import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const hash = await bcrypt.hash('Admin@1234', 10);
  const user = await prisma.user.create({
    data: {
      pharmacy_name: 'Admin',
      license_number: 'ADMIN001',
      owner_name: 'Admin',
      email: 'admin@pharmhub.ae',
      phone: '0000000000',
      password_hash: hash,
      role: 'admin',
      status: 'active'
    }
  });
  console.log('✅ Admin created:', user.email);
  await prisma.$disconnect();
}

main().catch(console.error);