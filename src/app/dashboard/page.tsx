import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className='flex flex-row'>
      <div>
        <Image
          src={'https://illustrations.popsy.co/sky/flower.svg'}
          height={250}
          width={250}
          alt='images'
          className='dark:invert'
        />
      </div>
      <div className='max-w-md mt-10 text-2xl italic'>
        For like the lotus in the tranquil pond, She holds mysteries, complexities beyond. Her depths, a tapestry,
        intricate, profound, A silent allure where wonders abound.
      </div>
    </div>
  );
}
