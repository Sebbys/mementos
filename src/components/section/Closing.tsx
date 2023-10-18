import Balancer from 'react-wrap-balancer';

export default async function Closing() {
  return (
    <section className='container flex h-full min-h-[calc(100vh-140px)] w-full min-w-full py-8 md:py-8 lg:py-24'>
      <div className='mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center'>
        <div>
          <q>
            <Balancer>
              Say you love me, Till the end of the world <br />
              All or Nothing, I want all of you
            </Balancer>
          </q>
          <p>~Your Second Choice~</p>
        </div>
      </div>
    </section>
  );
}
