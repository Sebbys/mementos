import { getServerSession } from 'next-auth';
import { cache } from 'react';
import { authOptions } from '@/app/lib/auth';
import db from '@/app/lib/prisma';

export const getUser = cache(async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    const user = await db.user.findFirst({
      where: { id: session.user.id },
    });

    if (user) {
      return user;
    }
  }
});
