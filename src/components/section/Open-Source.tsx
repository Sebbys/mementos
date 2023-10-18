import Balancer from 'react-wrap-balancer';

export default function OpenSource() {
  return (
    <section className='container flex h-full min-h-[calc(100vh-140px)] w-full min-w-full py-8 md:py-12 lg:py-24'>
      <div className='mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>Proudly Open 🥳</h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          <Balancer>Using the power of friendship, Dice Learning will offer more features in the futures</Balancer>
        </p>
      </div>
    </section>
  );
}
