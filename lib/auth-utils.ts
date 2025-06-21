
import { NextRequest } from 'next/server';
import { prisma } from './db';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: string;
  username: string;
}

export async function verifyToken(token: string): Promise<AuthUser | null> {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        username: true
      }
    });
    return user;
  } catch (error) {
    return null;
  }
}

export async function getUserFromRequest(request: NextRequest): Promise<AuthUser | null> {
  const token = request.cookies.get('auth-token')?.value;
  if (!token) return null;
  
  return await verifyToken(token);
}

export function isAdmin(user: AuthUser | null): boolean {
  return user?.role === 'admin';
}

export function requireAuth(user: AuthUser | null): AuthUser {
  if (!user) {
    throw new Error('Authentication required');
  }
  return user;
}

export function requireAdmin(user: AuthUser | null): AuthUser {
  const authUser = requireAuth(user);
  if (!isAdmin(authUser)) {
    throw new Error('Admin access required');
  }
  return authUser;
}

export async function createAuthResponse(user: AuthUser) {
  const token = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      username: user.username
    },
    token
  };
}

export async function verifyAuth(request: NextRequest): Promise<AuthUser | null> {
  return await getUserFromRequest(request);
}

export async function verifyAdminAuth(request: NextRequest): Promise<{
  success: boolean;
  user?: AuthUser;
  error?: string;
  status?: number;
}> {
  try {
    const user = await getUserFromRequest(request);
    
    if (!user) {
      return {
        success: false,
        error: 'Authentication required',
        status: 401
      };
    }

    if (!isAdmin(user)) {
      return {
        success: false,
        error: 'Admin access required',
        status: 403
      };
    }

    return {
      success: true,
      user
    };
  } catch (error) {
    return {
      success: false,
      error: 'Authentication failed',
      status: 401
    };
  }
}
