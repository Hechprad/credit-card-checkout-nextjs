'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import StepTracker from '@/components/StepTracker';
import { Button } from '@/components/ui/button';

import type { StepTrackerItem } from '@/components/StepTracker/types';

const steps: StepTrackerItem[] = [
  {
    label: 'Carrinho',
    path: '/checkout/cart',
    previousStepButton: 'Voltar para a home',
  },
  {
    label: 'Pagamento',
    path: '/checkout/payment',
    previousStepButton: 'Alterar forma de pagamento',
  },
  {
    label: 'Confirmação',
    path: '/checkout/confirmation',
    previousStepButton: 'Voltar para pagamento',
  },
];

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const currentIndex = steps.findIndex((step) => step.path === pathname);
  const previousStep = currentIndex > 0 ? steps[currentIndex - 1] : null;

  return (
    <>
      <header className='flex items-center w-full pt-[40px] mb:pt-[50px] pl-[5px] pr-[14px] relative'>
        <Link href={previousStep?.path ?? '/'} className='md:hidden'>
          <ChevronLeftIcon className='w-[20px] h-[20px] fill-white-1' />
          {''}
        </Link>
        <Button
          asChild
          variant='link'
          className='absolute left-[5px] md:static ml-[10px] md:ml-0 hidden md:flex'
        >
          <Link href={previousStep?.path ?? '/'}>
            {steps[currentIndex].previousStepButton}
          </Link>
        </Button>

        <div className='w-full flex justify-center md:justify-end'>
          <StepTracker steps={steps} />
        </div>
      </header>
      {children}
    </>
  );
}
