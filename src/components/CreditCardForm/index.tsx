'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, SubmitErrorHandler } from 'react-hook-form';
import { toast } from 'sonner';

import InfoIcon from '@/assets/icons/information.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { submitPayment } from '@/services';

import * as h from './helpers';
import * as t from './types';

export default function CreditCardForm({
  control,
  errors,
  handleSubmit,
  watch,
}: t.CreditCardFormProps) {
  const router = useRouter();
  const { cardNumber, cvv, expiryDate, installments, name } = watch();

  const [isPending, setIsPending] = useState(false);

  const getMargin = (error: string | undefined) => ({
    className: `${error ? 'mb-[22px]' : 'mb-[42px]'}`,
  });

  const onSubmit = async (fields: t.CreditCardFormFields) => {
    try {
      setIsPending(true);
      const response = await submitPayment(fields);
      console.log('response: ', response);

      toast.success('Pagamento realizado com sucesso!', {
        description: 'Seu pedido foi realizado com sucesso.',
        position: 'top-center',
      });

      router.push('/checkout/confirmation');
    } catch (error: unknown) {
      console.error('error: ', error);

      toast.error('Erro ao processar pagamento. Tente novamente.', {
        description: 'Falha interna do servidor.',
        position: 'top-center',
      });
    } finally {
      setIsPending(false);
    }
  };

  const onSubmitError: SubmitErrorHandler<t.CreditCardFormFields> = () =>
    toast.error('Campos com valores inválidos.', {
      description: 'Verifique os campos e tente novamente.',
      position: 'top-center',
    });

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
            disabled={isPending}
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
            disabled={isPending}
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
              disabled={isPending}
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
              disabled={isPending}
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
            disabled={isPending}
          />
        )}
      />

      <Button
        type='submit'
        form='credit-card-form'
        className='mt-[45px] md:mt-[62px]'
        disabled={isPending}
      >
        Continuar
      </Button>
    </form>
  );
}
