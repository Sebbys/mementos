'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/app/lib/utils';
import Icons from '../shared/icons';
export default function AuthForm() {
  const [isLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  const [isGoogleLoading, setGoogleLoading] = useState(false);

  return (
    <div className={cn('mt-4 flex flex-col gap-4')}>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>Or</span>
        </div>
      </div>
      <button
        type='button'
        className={cn(buttonVariants({ variant: 'outline' }))}
        onClick={() => {
          setGoogleLoading(true);
          signIn('google', { callbackUrl: '/' });
        }}
        disabled={isLoading || isGoogleLoading}>
        {isGoogleLoading ? (
          <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <Icons.google className='mr-2 h-4 w-4' />
        )}{' '}
        Continue with Google
      </button>
      <button
        type='button'
        className={cn(buttonVariants({ variant: 'outline' }))}
        onClick={() => {
          setIsGithubLoading(true);
          signIn('github', { callbackUrl: '/' });
        }}
        disabled={isLoading || isGithubLoading}>
        {isGithubLoading ? (
          <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <Icons.gitHub className='mr-2 h-4 w-4' />
        )}{' '}
        Continue with Github
      </button>
    </div>
  );
}
