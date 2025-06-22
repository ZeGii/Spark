
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const authToken = cookieStore.get('auth-token')?.value;

    if (!authToken) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // Get user from session
    const session = await prisma.session.findUnique({
      where: { token: authToken },
      include: {
        user: {
          include: {
            subscriptions: {
              where: {
                status: 'active'
              },
              orderBy: {
                createdAt: 'desc'
              },
              take: 1
            }
          }
        }
      }
    });

    if (!session || session.expiresAt < new Date()) {
      return NextResponse.json({ error: 'Session expired' }, { status: 401 });
    }

    const currentSubscription = session.user.subscriptions[0];

    return NextResponse.json({
      user: {
        id: session.user.id,
        email: session.user.email,
        username: session.user.username,
        name: session.user.name,
        profileType: session.user.profileType,
        industry: session.user.industry,
        country: session.user.country
      },
      subscription: {
        plan: currentSubscription?.plan || 'FREE',
        status: currentSubscription?.status || 'active',
        startDate: currentSubscription?.startDate,
        endDate: currentSubscription?.endDate
      },
      access: {
        canViewResearch: true, // All users can view research overview
        canViewPremiumContent: currentSubscription?.plan === 'PRO',
        canDownloadReports: currentSubscription?.plan === 'PRO',
        canViewCompetitiveAnalysis: currentSubscription?.plan === 'PRO',
        canViewMarketData: currentSubscription?.plan === 'PRO'
      }
    });

  } catch (error) {
    console.error('Subscription check error:', error);
    return NextResponse.json(
      { error: 'Failed to get subscription status' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { plan } = await request.json();
    const cookieStore = cookies();
    const authToken = cookieStore.get('auth-token')?.value;

    if (!authToken) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    if (!['FREE', 'PRO'].includes(plan)) {
      return NextResponse.json({ error: 'Invalid subscription plan' }, { status: 400 });
    }

    // Get user from session
    const session = await prisma.session.findUnique({
      where: { token: authToken },
      include: { user: true }
    });

    if (!session || session.expiresAt < new Date()) {
      return NextResponse.json({ error: 'Session expired' }, { status: 401 });
    }

    // Update user's current subscription to inactive
    await prisma.subscription.updateMany({
      where: {
        userId: session.user.id,
        status: 'active'
      },
      data: {
        status: 'inactive',
        endDate: new Date()
      }
    });

    // Create new subscription
    const newSubscription = await prisma.subscription.create({
      data: {
        userId: session.user.id,
        plan,
        status: 'active',
        startDate: new Date(),
        endDate: plan === 'PRO' ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) : null // 1 year for PRO
      }
    });

    return NextResponse.json({
      success: true,
      subscription: newSubscription,
      message: `Successfully upgraded to ${plan} plan`
    });

  } catch (error) {
    console.error('Subscription update error:', error);
    return NextResponse.json(
      { error: 'Failed to update subscription' },
      { status: 500 }
    );
  }
}
