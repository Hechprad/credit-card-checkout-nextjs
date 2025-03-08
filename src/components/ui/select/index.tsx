'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon } from 'lucide-react';

import ChevronDownIcon from '@/assets/icons/chevron-down.svg';
import { cn } from '@/lib/utils';

import * as t from './types';

function SelectSCN({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot='select' {...props} />;
}

function SelectGroup({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return (
    <SelectPrimitive.Group
      data-slot='select-group'
      className={cn(
        'flex flex-col w-full h-[44px] justify-end items-end [&>*]:w-full',
        className,
      )}
      {...props}
    />
  );
}

function SelectLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot='select-label'
      className={cn(
        'text-[12px] font-medium text-gray-1 leading-none mb-2',
        className,
      )}
      {...props}
    >
      {children}
    </SelectPrimitive.Label>
  );
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot='select-value' {...props} />;
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & { label?: string }) {
  return (
    <div className='relative'>
      <SelectPrimitive.Trigger
        data-slot='select-trigger'
        className={cn(
          `
          border-b border-gray-1
          [&_[data-placeholder]]:text-gray-1 data-[placeholder]:text-gray-1 data-[placeholder]:font-[400] 
          text-[16px] text-black-1 whitespace-nowrap 
          [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:ring-ring/50 
          flex h-[24px] w-[100%] items-center justify-between gap-[8px] 
          bg-transparent 
          outline-none focus-visible:ring-[3px] 
          disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 
          *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 
          [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
          className,
        )}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <ChevronDownIcon className='size-[14px] fill-green-1' />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    </div>
  );
}

function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot='select-content'
        className={cn(
          `bg-popover text-popover-foreground data-[state=open]:animate-in 
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0 
          data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 
          data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 
          data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 
          data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-[200px] min-w-[8rem] 
          overflow-hidden border shadow-md`,
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot='select-item'
      className={cn(
        `focus:bg-accent focus:text-accent-foreground 
        [&_svg:not([class*='text-'])]:text-muted-foreground 
        relative flex w-full cursor-default items-center gap-2 py-1.5 
        pr-8 pl-2 text-[14px] text-black-1 outline-hidden select-none data-[disabled]:pointer-events-none 
        data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 
        [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center 
        *:[span]:last:gap-2`,
        className,
      )}
      {...props}
    >
      <span className='absolute right-2 flex size-3.5 items-center justify-center'>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className='size-[16px] text-green-1 stroke-[3px]' />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot='select-scroll-up-button'
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className='size-[14px] fill-green-1 rotate-180' />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot='select-scroll-down-button'
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className='size-[14px] fill-green-1' />
    </SelectPrimitive.ScrollDownButton>
  );
}

function Select({
  label,
  placeholder,
  options,
  hideLabel = false,
  ...rest
}: React.ComponentProps<typeof SelectPrimitive.Root> & t.SelectProps) {
  return (
    <SelectSCN {...rest}>
      <SelectGroup>
        {hideLabel ? null : <SelectLabel>{label}</SelectLabel>}
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </SelectGroup>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectSCN>
  );
}

export { Select };
