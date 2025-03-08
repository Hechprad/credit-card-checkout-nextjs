'use client';

import { useEffect, useState } from 'react';

import creditCardBackgroundEmpty from '@/assets/backgrounds/credit-card-bg-1.png';
import creditCardBackgroundEmptyMobile from '@/assets/backgrounds/credit-card-bg-mobile-1.png';
import creditCardBackgroundActive from '@/assets/backgrounds/credit-card-bg-2.png';
import creditCardBackgroundActiveMobile from '@/assets/backgrounds/credit-card-bg-mobile-2.png';

import * as h from './helper';
import * as t from './types';

export default function CreditCard({ formWatch }: t.CreditCardProps) {
  const [isMobile, setIsMobile] = useState(false);
  const { cardNumber, expiryDate, name } = formWatch();
  const bgActive = cardNumber.length ?? expiryDate.length ?? name.length;
  const logo = h.identifyCardBrand(cardNumber);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const backgroundImage = bgActive
    ? isMobile
      ? creditCardBackgroundActiveMobile.src
      : creditCardBackgroundActive.src
    : isMobile
      ? creditCardBackgroundEmptyMobile.src
      : creditCardBackgroundEmpty.src;

  return (
    <div className='relative aspect-[16/9] w-[280px] md:w-[492px] h-[174px] md:h-[317px]'>
      <div
        className='w-[280px] h-[180px] md:w-full md:h-full bg-contain bg-no-repeat bg-center p-[15] md:p-[46px] pb-[40px] md:pb-[67px]'
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className='flex flex-col h-full justify-between text-white-1'>
          <div className='text-left mb-[20px]'>{logo && h.getLogo()[logo]}</div>

          <div className='space-y-4'>
            <p className='text-[14px] md:text-[26px] h-[18px] md:h-[32px] tracking-widest drop-shadow-default mb-[18px] md:mb-[38px]'>
              {h.formatCardNumber(cardNumber)}
            </p>

            <div className='flex justify-between items-end'>
              <p className='drop-shadow-default uppercase text-[12px] md:text-[22px]'>
                {name && name.length > 0 ? name : 'NOME DO TITULAR'}
              </p>
              <p className='drop-shadow-default text-[12px] md:text-[22px]'>
                {expiryDate && expiryDate.length > 0 ? expiryDate : '00/00'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
