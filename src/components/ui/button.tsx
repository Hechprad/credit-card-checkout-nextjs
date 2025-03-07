import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[8px] whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          'bg-green-2 text-white-1 text-[15px] tracking-[0.8px] leading-[100%] uppercase  hover:bg-green-2/90',
        link: 'text-green-1 underline-offset-4 text-[13px] hover:underline h-6 px-2 py-0 cursor-pointer',
      },
      size: {
        default: 'h-[48px] py-[15px] px-[28px] rounded-[4px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant = 'default',
  asChild = false,
  children,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean;
  variant?: 'default' | 'link';
}) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={`${cn(buttonVariants({ variant, size: 'default', className }))}`}
      {...props}
    >
      <div className='flex items-center gap-[8px]'>
        {variant === 'link' && (
          <ChevronLeftIcon
            className='fill-green-1'
            data-testid='chevron-left-icon'
          />
        )}
        {children}
      </div>
    </Comp>
  );
}

export { Button, buttonVariants };
