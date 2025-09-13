import { PrismaClient, UserRole } from '@prisma/client'
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@suanmai.com' },
    update: {},
    create: {
      email: 'admin@suanmai.com',
      name: 'Admin User',
      password: adminPassword,
      role: UserRole.ADMIN,
    },
  })

  // Create regular user
  const userPassword = await bcrypt.hash('user123', 10)
  const user = await prisma.user.upsert({
    where: { email: 'user@suanmai.com' },
    update: {},
    create: {
      email: 'user@suanmai.com',
      name: 'Regular User',
      password: userPassword,
      role: UserRole.USER,
    },
  })

  // Create sample schema
  const userProfileSchema = await prisma.schema.create({
    data: {
      name: 'User Profile',
      description: 'Schema for user profile information',
      fields: {
        fields: [
          { name: 'firstName', type: 'string', required: true },
          { name: 'lastName', type: 'string', required: true },
          { name: 'age', type: 'number', required: false },
          { name: 'bio', type: 'text', required: false },
        ],
      },
      published: true,
      authorId: admin.id,
    },
  })

  // Create sample data
  await prisma.data.create({
    data: {
      content: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        bio: 'Software developer passionate about data management.',
      },
      schemaId: userProfileSchema.id,
      authorId: user.id,
    },
  })

  console.log('✅ Database seeded successfully!')
  console.log(`👤 Admin user: admin@suanmai.com / admin123`)
  console.log(`👤 Regular user: user@suanmai.com / user123`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
