export default function Home() {
  return (
    <main className='container'>
      <div className='flex h-full min-h-[calc(100vh-140px)] w-full flex-col items-center justify-center space-y-20 py-14 md:min-h-[calc(100vh-160px)] xl:py-24'>
        <h1 className='text-center p-4 lg:text-6xl text-3xl font-semibold italic font-serif'>
          Once
          <span className='bg-gradient-to-tl from-orange-500 to-fuchsia-500 bg-clip-text text-transparent'>
            {' '}
            You
          </span>{' '}
          were the only one who could roll me right,
        </h1>
        <q className='text-xl text-center font-semibold italic'>
          Now I’m just a{' '}
          <span className='underline text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-bold hover:text-shadow-lg'>
            Dice
          </span>{' '}
          that gathers dust on the shelf.{' '}
        </q>
        <h1 className='text-center fixed bottom-0 p-4'>Made with ❤</h1>
      </div>
    </main>
  );
}
