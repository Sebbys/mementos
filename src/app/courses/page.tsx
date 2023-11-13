import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { type CurrentUser } from '@/app/types';
import { redirect } from 'next/navigation';
import { getUser } from '../server/user';

export default async function Courses() {
  const currentUser = (await getUser()) as CurrentUser;

  if (currentUser?.roles == 'PUBLIC' || !currentUser) {
    redirect('/cursed');
  }

  return (
    <div className='flex flex-row gap-x-2 mt-4 justify-center prose prose-xl'>
      <Link className={buttonVariants({ variant: 'secondary' })} href={'/courses/tags/analytics'}>
        Analytics Courses
      </Link>
      <Link className={buttonVariants({ variant: 'secondary' })} href={'/courses/tags/engineering'}>
        Engineering Courses
      </Link>
    </div>
  );
}
