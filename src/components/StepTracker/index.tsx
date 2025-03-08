'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CheckIcon } from 'lucide-react';

import ChevronRightIcon from '@/assets/icons/chevron-right.svg';

import { cn } from '@/lib/utils';

import * as t from './types';

export default function StepTracker({ steps }: t.StepTrackerProps) {
  const pathname = usePathname();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const index = steps.findIndex((step) => step.path === pathname);
    setCurrentStepIndex(index);
  }, [pathname, steps]);

  return (
    <>
      <div className='md:hidden'>
        <p className='text-[14px] text-white-1'>
          Etapa {currentStepIndex + 1} de {steps.length}
        </p>
      </div>

      <div className='hidden md:flex gap-[30px] h-[20px]'>
        {steps.map((step, index) => {
          const alreadyDone = index < currentStepIndex;

          return (
            <div className='flex gap-[10px] items-center' key={step.label}>
              {index !== 0 && (
                <ChevronRightIcon className='size-[14px] fill-green-1 mr-[20px]' />
              )}
              <div
                key={step.label}
                className={cn(`border-green-1 border-[1.5px] rounded-[50%] w-[20px]
            h-[20px] bg-white-1 flex justify-center items-center ${alreadyDone ? 'bg-green-1' : ''}`)}
              >
                {alreadyDone ? (
                  <CheckIcon className='size-[13px] text-white-1 stroke-[5px]' />
                ) : (
                  <span className='text-[13px] text-green-1'>{index + 1}</span>
                )}
              </div>
              <Link href={step.path}>
                <p className='text-[12px] text-green-1'>{step.label}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
