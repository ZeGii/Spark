
require('dotenv').config()
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function seedAdminSettings() {
  try {
    console.log('🌱 Seeding admin settings...')

    // Create default vote threshold setting
    await prisma.adminSettings.upsert({
      where: { key: 'default_vote_threshold' },
      update: {},
      create: {
        key: 'default_vote_threshold',
        value: '50',
        description: 'Default vote threshold for topic qualification'
      }
    })

    // Create other default settings
    await prisma.adminSettings.upsert({
      where: { key: 'voting_period_days' },
      update: {},
      create: {
        key: 'voting_period_days',
        value: '15',
        description: 'Number of days topics remain open for voting'
      }
    })

    await prisma.adminSettings.upsert({
      where: { key: 'auto_process_deadlines' },
      update: {},
      create: {
        key: 'auto_process_deadlines',
        value: 'true',
        description: 'Automatically process expired topic deadlines'
      }
    })

    console.log('✅ Admin settings seeded successfully')
  } catch (error) {
    console.error('❌ Error seeding admin settings:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

if (require.main === module) {
  seedAdminSettings()
    .then(() => {
      console.log('🎉 Seeding completed')
      process.exit(0)
    })
    .catch((error) => {
      console.error('💥 Seeding failed:', error)
      process.exit(1)
    })
}

module.exports = { seedAdminSettings }
