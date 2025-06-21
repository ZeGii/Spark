
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getUserFromRequest, requireAuth } from '@/lib/auth-utils';

export const dynamic = 'force-dynamic';

// POST /api/notifications/[id]/read
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getUserFromRequest(request);
    requireAuth(user);

    const notification = await prisma.notification.findUnique({
      where: { id: params.id }
    });

    if (!notification) {
      return NextResponse.json(
        { error: 'Notification not found' },
        { status: 404 }
      );
    }

    if (notification.userId !== user!.id) {
      return NextResponse.json(
        { error: 'Access denied' },
        { status: 403 }
      );
    }

    const updatedNotification = await prisma.notification.update({
      where: { id: params.id },
      data: { read: true }
    });

    return NextResponse.json({
      message: 'Notification marked as read',
      notification: updatedNotification
    });
  } catch (error: any) {
    console.error('Notification read error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to mark notification as read' },
      { status: error.message?.includes('required') ? 403 : 500 }
    );
  }
}
