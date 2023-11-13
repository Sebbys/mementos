import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default async function Courses() {
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
