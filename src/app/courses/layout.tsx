interface CoursesLayoutProps {
  children: React.ReactNode;
}
import { type CurrentUser } from '@/app/types';
import { redirect } from 'next/navigation';
import { getUser } from '../server/user';

export default async function CoursesLayout({ children }: CoursesLayoutProps) {
  const currentUser = (await getUser()) as CurrentUser;

  if (currentUser?.roles == 'SPECIALGRADE' || !currentUser) {
    redirect('/cursed');
  }

  return (
    <div className='container mx-auto mb-16 items-center flex prose prose-xl prose-slate text-justify justify-center dark:prose-invert'>
      {children}
    </div>
  );
}
