import { ToolIcons } from '@/components/shared/tools-icons';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function Features() {
  return (
    <section id='features' className='container space-y-6 rounded-md py-8 md:py-12 lg:py-24'>
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-heading text-4xl md:text-6xl'>Our Tech Stack</h2>
      </div>
      <div className='h-full min-h-[calc(100vh-140px)] mx-auto md:flex grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
        <Card className='flex h-[180px] flex-col justify-between rounded-md p-6'>
          <ToolIcons.nextjs />
          <div className='space-y-2'>
            <h3 className='font-bold'>Next.js 13</h3>
            <p className='text-sm text-muted-foreground'>
              App dir, Routing, Layouts, API routes, Server Components, Server actions.
            </p>
          </div>
        </Card>
        <Card className='flex h-[180px] flex-col justify-between rounded-md p-6'>
          <ToolIcons.shadcnUI />
          <div className='space-y-2'>
            <h3 className='font-bold'>Shadcn UI</h3>
            <p className='text-sm text-muted-foreground'>
              UI components built using Radix UI and styled with Tailwind CSS.
            </p>
          </div>
        </Card>
        <Card className='flex h-[180px] flex-col justify-between rounded-md p-6'>
          <ToolIcons.prisma />
          <div className='space-y-2'>
            <h3 className='font-bold'>Database</h3>
            <p className='text-sm text-muted-foreground'>Using Postgres with Prisma ORM, hosted on Vercel Postgres.</p>
          </div>
        </Card>
        <Card className='flex h-[180px] flex-col justify-between rounded-md p-6'>
          <ToolIcons.authjs />
          <div className='space-y-2'>
            <h3 className='font-bold'>Authentication</h3>
            <p className='text-sm text-muted-foreground'>Authentication using NextAuth.js and middlewares.</p>
          </div>
        </Card>
      </div>
      <div className='mx-auto text-center md:max-w-[58rem]'>
        <p className='leading-normal text-muted-foreground sm:text-lg sm:leading-7'>Built With Love ❤</p>
      </div>
    </section>
  );
}
