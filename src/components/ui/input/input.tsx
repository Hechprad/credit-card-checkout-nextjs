import * as React from 'react';

import { cn } from '@/lib/utils';

import * as t from './types';

function Input({
  className,
  label,
  type,
  ...props
}: React.ComponentProps<'input'> & t.InputProps) {
  return (
    <div className='flex flex-col gap-[8px] w-full'>
      <label className='flex w-full gap-[8px] justify-start items-center text-[12px] font-medium text-gray-1 leading-none mb-2'>
        {label}
      </label>
      <input
        type={type}
        data-slot='input'
        className={cn(
          `
          border-b border-gray-1
          placeholder:text-gray-1 placeholder:font-[400]
          text-[16px] text-black-1
          file:text-foreground 
          selection:bg-primary selection:text-primary-foreground 
          flex h-[24px] w-full min-w-0 items-center justify-between
          bg-transparent 
          outline-none
          disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 
          `,
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
