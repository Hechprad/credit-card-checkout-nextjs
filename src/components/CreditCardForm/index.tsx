import { Controller, SubmitErrorHandler, SubmitHandler } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import InfoIcon from '@/assets/icons/information.svg';

import * as h from './helpers';
import * as t from './types';

export default function CreditCardForm({
  control,
  errors,
  handleSubmit,
  watch,
}: t.CreditCardFormProps) {
  const { cardNumber, cvv, expiryDate, installments, name } = watch();

  const getMargin = (error: string | undefined) => ({
    className: `${error ? 'mb-[22px]' : 'mb-[42px]'}`,
  });

  const onSubmit: SubmitHandler<t.creditCardFormFields> = (data) =>
    console.log(data);
  const onSubmitError: SubmitErrorHandler<t.creditCardFormFields> = (data) =>
    console.log(data);

  return (
    <form
      id='credit-card-form'
      className='flex flex-col justify-start items-center md:items-end'
      onSubmit={handleSubmit(onSubmit, onSubmitError)}
    >
      <Controller
        name='cardNumber'
        control={control}
        render={({ field }) => (
          <Input
            label='Número do cartão'
            placeholder='Número do cartão'
            type='text'
            {...field}
            maxLength={19}
            onChange={(e) => field.onChange(h.formatCardNumber(e.target.value))}
            errorMessage={errors.cardNumber?.message}
            hideLabel={cardNumber.length === 0}
            {...getMargin(errors.cardNumber?.message)}
          />
        )}
      />
      <Controller
        name='name'
        control={control}
        render={({ field }) => (
          <Input
            label='Nome (igual ao cartão)'
            placeholder='Nome (igual ao cartão)'
            type='text'
            {...field}
            maxLength={30}
            onChange={(e) => field.onChange(h.formatName(e.target.value))}
            errorMessage={errors.name?.message}
            hideLabel={name.length === 0}
            {...getMargin(errors.name?.message)}
          />
        )}
      />

      <div className='flex gap-[30px] w-full'>
        <Controller
          name='expiryDate'
          control={control}
          render={({ field }) => (
            <Input
              label='Validade'
              placeholder='Validade'
              type='text'
              {...field}
              maxLength={5}
              onChange={(e) =>
                field.onChange(h.formatExpiryDate(e.target.value))
              }
              errorMessage={errors.expiryDate?.message}
              hideLabel={expiryDate.length === 0}
              {...getMargin(errors.expiryDate?.message)}
            />
          )}
        />
        <Controller
          name='cvv'
          control={control}
          render={({ field }) => (
            <Input
              label={
                <>
                  <span className='w-auto size-[12px] text-gray-1'>CVV</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className='size-[14px] fill-gray-1' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          O CVV é o código de segurança do seu cartão,
                          geralmente com 3 dígitos, localizado no verso do
                          cartão.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </>
              }
              placeholder='CVV'
              type='text'
              {...field}
              maxLength={4}
              onChange={(e) => field.onChange(h.formatCVV(e.target.value))}
              errorMessage={errors.cvv?.message}
              hideLabel={cvv.length === 0}
              {...getMargin(errors.cvv?.message)}
            />
          )}
        />
      </div>
      <Controller
        name='installments'
        control={control}
        render={({ field }) => (
          <Select
            label='Número de parcelas'
            placeholder='Número de parcelas'
            options={[...Array(12)].map((_, i) => ({
              label: `${i + 1} x`,
              value: `${i + 1}`,
            }))}
            onValueChange={(value) => field.onChange(value)}
            {...field}
            errorMessage={errors.installments?.message}
            hideLabel={installments.length === 0}
            {...getMargin(errors.installments?.message)}
          />
        )}
      />

      <Button type='submit' form='credit-card-form' className='mt-[20px]'>
        Continuar
      </Button>
    </form>
  );
}
