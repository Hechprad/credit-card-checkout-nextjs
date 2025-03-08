import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='flex flex-col justify-start items-center w-full md:w-[325px] h-screen p-[20px]'>
      <h1 className=' text-[20px] text-white-1  mb-[32px]'>Home</h1>
      <Button>
        <Link href='/checkout/payment'>Ir para checkout</Link>
      </Button>
    </div>
  );
}
