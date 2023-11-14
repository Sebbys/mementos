interface CoursesLayoutProps {
  children: React.ReactNode;
}

import { Suspense } from 'react';
import Loading from './loading';

export default async function CoursesLayout({ children }: CoursesLayoutProps) {
  return (
    <div className='container mx-auto mb-16 items-center grid prose prose-xl prose-slate text-justify justify-center dark:prose-invert'>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
