import * as React from 'react';

import { cn } from '@/lib/utils';

import * as t from './types';

function Input({
  className,
  errorMessage,
  label,
  type,
  hideLabel = false,
  ...props
}: React.ComponentProps<'input'> & t.InputProps) {
  return (
    <div
      className={cn(
        `flex flex-col gap-[6px] justify-start items-end w-full ${hideLabel ? 'mt-[20px]' : ''}`,
        className,
      )}
    >
      {hideLabel ? null : (
        <label className='flex w-full h-[14px] gap-[8px] justify-start items-center text-[12px] font-medium text-gray-1 leading-none'>
          {label}
        </label>
      )}
      <input
        type={type}
        data-slot='input'
        className={cn(
          `
          border-b border-gray-1 ${errorMessage ? 'border-red-1 border-b-[2px]' : ''}
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
        )}
        {...props}
      />
      {errorMessage && (
        <p className='w-full text-[12px] text-red-1'>{errorMessage}</p>
      )}
    </div>
  );
}

export { Input };
