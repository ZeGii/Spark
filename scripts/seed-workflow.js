
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with workflow data...');

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@spark.com' },
    update: {},
    create: {
      email: 'admin@spark.com',
      username: 'admin',
      name: 'Admin User',
      password: adminPassword,
      role: 'admin',
      profileType: 'BUSINESS_ANALYST',
      industry: 'Technology',
      country: 'United States'
    }
  });

  // Create regular users
  const userPassword = await bcrypt.hash('user123', 10);
  const user1 = await prisma.user.upsert({
    where: { email: 'john@example.com' },
    update: {},
    create: {
      email: 'john@example.com',
      username: 'john_doe',
      name: 'John Doe',
      password: userPassword,
      role: 'user',
      profileType: 'ENTREPRENEUR',
      industry: 'Technology',
      country: 'United States'
    }
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'jane@example.com' },
    update: {},
    create: {
      email: 'jane@example.com',
      username: 'jane_smith',
      name: 'Jane Smith',
      password: userPassword,
      role: 'user',
      profileType: 'PRODUCT_MANAGER',
      industry: 'Healthcare',
      country: 'Canada'
    }
  });

  // Create sample topics in different statuses
  const pendingTopic = await prisma.topic.create({
    data: {
      title: 'AI-Powered Personal Finance Assistant',
      description: 'Research the market for AI-driven personal finance management tools that help users budget, save, and invest automatically.',
      industry: 'FinTech',
      country: 'United States',
      status: 'PENDING',
      proposedById: user1.id
    }
  });

  const approvedTopic = await prisma.topic.create({
    data: {
      title: 'Sustainable Packaging Solutions for E-commerce',
      description: 'Analyze the growing market for eco-friendly packaging materials and solutions specifically designed for online retail.',
      industry: 'E-commerce',
      country: 'United States',
      status: 'APPROVED',
      voteThreshold: 50,
      approvalDate: new Date(),
      deadline: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
      proposedById: user2.id,
      approvedById: admin.id,
      voteCount: 25
    }
  });

  const qualifiedTopic = await prisma.topic.create({
    data: {
      title: 'Remote Work Productivity Tools',
      description: 'Research the market for tools and platforms that enhance productivity for remote and hybrid work environments.',
      industry: 'Technology',
      country: 'Global',
      status: 'QUALIFIED',
      voteThreshold: 30,
      approvalDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
      deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
      proposedById: user1.id,
      approvedById: admin.id,
      voteCount: 35
    }
  });

  const rejectedTopic = await prisma.topic.create({
    data: {
      title: 'Generic Social Media Platform',
      description: 'Another social media platform for sharing photos and videos.',
      industry: 'Social Media',
      country: 'United States',
      status: 'REJECTED',
      rejectionReason: 'Market is oversaturated with similar solutions. Please propose a more specific niche or unique value proposition.',
      proposedById: user2.id,
      approvedById: admin.id
    }
  });

  // Add some votes to the approved topic
  await prisma.vote.createMany({
    data: [
      { topicId: approvedTopic.id, userId: user1.id },
      { topicId: approvedTopic.id, userId: user2.id },
      { topicId: qualifiedTopic.id, userId: user1.id },
      { topicId: qualifiedTopic.id, userId: user2.id }
    ]
  });

  // Create some notifications
  await prisma.notification.createMany({
    data: [
      {
        title: 'Topic Approved',
        message: 'Your topic "Sustainable Packaging Solutions for E-commerce" has been approved and is now open for voting!',
        userId: user2.id,
        topicId: approvedTopic.id
      },
      {
        title: 'Topic Qualified',
        message: 'Your topic "Remote Work Productivity Tools" has reached the vote threshold and is qualified for research!',
        userId: user1.id,
        topicId: qualifiedTopic.id
      },
      {
        title: 'Topic Rejected',
        message: 'Your topic "Generic Social Media Platform" has been rejected. Please see the feedback and consider resubmitting with improvements.',
        userId: user2.id,
        topicId: rejectedTopic.id
      }
    ]
  });

  console.log('Database seeded successfully!');
  console.log('Admin credentials: admin@spark.com / admin123');
  console.log('User credentials: john@example.com / user123, jane@example.com / user123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
