import Link from 'next/link';

import CreditCardIcon from '@/assets/icons/credit-card.svg';
import { Button } from '@/components/ui/button';
import CreditCard from '@/components/CreditCard';

export default function Checkout() {
  return (
    <div className='flex h-screen'>
      <aside className='flex flex-col gap-[50px] items-start min-w-[325px] bg-green-1 pt-[50px] pl-[5px]'>
        <Button asChild variant='link'>
          <Link href='#'>Alterar forma de pagamento</Link>
        </Button>
        <div className='flex gap-[16px] w-full h-[54px]'>
          <div className='min-w-[54px] border-[2px] border-white-1 rounded-[50%] p-[10px]'>
            <CreditCardIcon />
          </div>
          <h1 className=' text-[20px] text-white-1 w-[202px]'>
            Adicione um novo cartão de crédito
          </h1>
        </div>

        <CreditCard />
      </aside>

      <div className='w-full bg-white-1 pt-[48px] pr-[5px] pb-[66px] pl-[203px]'>
        form
      </div>
    </div>
  );
}
