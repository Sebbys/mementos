'use client';

import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import useScroll from '@/hooks/use-scroll';
import { cn } from '@/app/lib/utils';
import { type CurrentUser } from '@/app/types';
import ThemeToggle from '../shared/theme-toggle';
import UserNav from '../layout/user-nav';
import Icons from '@/components/shared/icons';

export default function Navbar({ currentUser }: { currentUser: CurrentUser }) {
  const scrolled = useScroll(0);

  return (
    <header
      className={cn(
        'sticky top-0 z-30  w-full bg-transparent ',
        scrolled ? ' h-16 border-b backdrop-blur-xl' : ' h-20',
      )}>
      <div className='container h-full'>
        <div className='flex h-full  items-center justify-between'>
          <div className='flex items-center text-3xl font-bold'>
            <Link href='/' className='flex'>
              <Icons.dices />
              <p>Dice</p>
            </Link>
            <Link className='ml-4 sm:visible' href='/courses'>
              Courses
            </Link>
          </div>

          <div className=' flex items-center gap-x-2'>
            <ThemeToggle />
            {currentUser ? (
              <UserNav user={currentUser} />
            ) : (
              <Link href='/signin' className={buttonVariants()}>
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
