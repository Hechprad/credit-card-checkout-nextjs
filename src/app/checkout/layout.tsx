'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import StepTracker from '@/components/StepTracker';
import { Button } from '@/components/ui/button';

import type { StepTrackerItem } from '@/components/StepTracker/types';

const steps: StepTrackerItem[] = [
  {
    label: 'Carrinho',
    path: '/checkout/cart',
    previousStepButton: 'Voltar para home',
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
      <header className='flex justify-between gap-[20px] w-full pt-[50px] pl-[5px] pr-[14px]'>
        <Button asChild variant='link'>
          <Link href={previousStep?.path ?? '/'}>
            {steps[currentIndex].previousStepButton}
          </Link>
        </Button>

        <StepTracker steps={steps} />
      </header>
      {children}
    </>
  );
}
