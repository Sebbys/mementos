import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import Icons from '@/components/shared/icons';
import { ToolIcons } from '@/components/shared/tools-icons';
import { buttonVariants } from '@/components/ui/button';

export default async function Hero() {
  return (
    <section className='container'>
      <div className='flex h-full min-h-[calc(100vh-140px)] w-full flex-col items-center justify-center space-y-20 py-14 md:min-h-[calc(100vh-160px)] '>
        <div className='mx-auto w-full max-w-2xl '>
          <div className='mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2  hover:bg-blue-200'>
            <Icons.dices className='h-5 w-5 text-blue-700' />
            <p className='text-sm font-semibold text-blue-700'>Introducing Dice</p>
            <Icons.dices className='h-5 w-5 text-blue-700' />
          </div>
          <h1 className='bg-gradient-to-br from-red-500 to-orange-500 bg-clip-text text-center font-heading text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm duration-300 ease-linear animate-in zoom-in-50 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 md:text-7xl md:leading-[5rem]'>
            <Balancer>
              {' '}
              Roll The Dice <br />
              with
              <br />
              Dice Learning
            </Balancer>
          </h1>
          <p className='mt-4 text-center text-muted-foreground md:text-xl'>
            <Balancer>Packed with all necessary courses to thrive and survive 😈.</Balancer>
          </p>
          <div className='mx-auto mt-6 flex items-center justify-center space-x-5'>
            <Link className={buttonVariants() + ' gap-x-2'} href='/signin'>
              Get Started
            </Link>
          </div>
        </div>
        <div className='w-full '>
          <h2 className='mb-4 text-center text-2xl font-semibold tracking-tight transition-colors'>
            Built using Great Tools
          </h2>
          <div className='flex w-full flex-wrap items-center justify-center gap-x-20 gap-y-10 '>
            {tools.map((t, i) => (
              <Link key={i} href={t.link} target='_blank'>
                <t.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const tools = [
  {
    link: 'https://www.typescriptlang.org/',
    icon: ToolIcons.ts,
  },
  {
    link: 'https://nextjs.org/',
    icon: ToolIcons.nextjs,
  },
  {
    link: 'https://tailwindcss.com/',
    icon: ToolIcons.tailwind,
  },
  {
    link: 'https://www.prisma.io/',
    icon: ToolIcons.prisma,
  },
  {
    link: 'https://vercel.com/',
    icon: ToolIcons.vercel,
  },
];
