'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import CreditCardIcon from '@/assets/icons/credit-card.svg';
import CreditCard from '@/components/CreditCard';
import CreditCardForm from '@/components/CreditCardForm';
import { creditCardSchema } from '@/components/CreditCardForm/helpers';

import type { creditCardFormFields } from '@/components/CreditCardForm/types';

export default function Payment() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    // watch,
  } = useForm<creditCardFormFields>({
    resolver: zodResolver(creditCardSchema),
    defaultValues: {
      cardNumber: '',
      cvv: '',
      expiryDate: '',
      installments: '',
      name: '',
    },
    mode: 'onBlur',
    criteriaMode: 'all',
  });

  return (
    <div className='flex h-[100%]'>
      <aside className='flex flex-col gap-[50px] items-start min-w-[325px] bg-green-1 pt-[50px] pl-[5px]'>
        <div className='flex gap-[16px] w-full h-[54px]'>
          <div className='min-w-[54px] border-[2px] border-white-1 rounded-[50%] p-[10px]'>
            <CreditCardIcon />
          </div>
          <h1 className=' text-[20px] text-white-1 w-[202px]'>
            Adicione um novo cartão de crédito
          </h1>
        </div>

        <CreditCard
          bgActive
          cardNumber='1234 567'
          expirationDate='12/37'
          logo='visa'
          name='João da Silva'
        />
      </aside>

      <div className='w-full bg-white-1 pt-[50px] pr-[5px] pb-[66px] pl-[203px]'>
        <CreditCardForm
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          register={register}
        />
      </div>
    </div>
  );
}
