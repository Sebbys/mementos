import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req });
    const isAuth = !!token;

    if (req.nextUrl.pathname === '/signin') {
      if (isAuth) {
        return NextResponse.redirect(new URL(`/dashboard`, req.url));
      }
      return null;
    }

    if (!isAuth) {
      return NextResponse.redirect(new URL(`/`, req.url));
    }
  },
  {
    callbacks: {
      authorized() {
        return true;
      },
    },
  },
);

export const config = {
  matcher: ['/signin'],
};
