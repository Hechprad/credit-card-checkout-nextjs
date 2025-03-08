'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import CreditCardIcon from '@/assets/icons/credit-card.svg';
import CreditCard from '@/components/CreditCard';
import CreditCardForm from '@/components/CreditCardForm';
import { creditCardSchema } from '@/components/CreditCardForm/helpers';

import type { CreditCardFormFields } from '@/components/CreditCardForm/types';

export default function Payment() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<CreditCardFormFields>({
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
    <div className='flex flex-col items-center md:items-start md:flex-row h-[100%]'>
      <div
        className={`
          flex flex-col gap-[16px] md:gap-[30px] items-center md:items-start
          min-w-[325px]
          pt-[30px] md:pt-[50px] md:pl-[5px]`}
      >
        <div className='flex justify-center md:justify-start gap-[16px] w-full h-[38px] md:h-[54px]'>
          <div
            className={`
              flex justify-center items-center
              min-w-[40px] md:min-w-[50px] max-h-[40px] md:min-h-[50px]
              border-[2px] border-white-1 rounded-[50%]
              `}
          >
            <CreditCardIcon
              width='24'
              height='24'
              viewBox='0 0 30 30'
              className='md:w-[30px] md:h-[30px]'
            />
          </div>
          <h1 className='text-[16px] md:text-[20px] text-white-1 w-[202px]'>
            Adicione um novo cartão de crédito
          </h1>
        </div>

        <CreditCard formWatch={watch} />
      </div>

      <div className='w-full bg-white-1 pt-[30px] md:pt-[50px] pr-[40px] md:pr-[5px] pb-[66px] pl-[40px] md:pl-[203px]'>
        <CreditCardForm
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          register={register}
          watch={watch}
        />
      </div>
    </div>
  );
}
