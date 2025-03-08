import creditCardBackgroundEmpty from '@/assets/backgrounds/credit-card-bg-1.png';
import creditCardBackgroundActive from '@/assets/backgrounds/credit-card-bg-2.png';

import * as h from './helper';
import * as t from './types';

export default function CreditCard({
  bgActive = false,
  cardNumber,
  expirationDate,
  logo,
  name,
}: t.CreditCardProps) {
  return (
    <div className='relative w-[492px] h-[317px]'>
      <div
        className='w-full h-full rounded-xl bg-cover bg-center p-[46px] pb-[67px]'
        style={{
          backgroundImage: `url(${bgActive ? creditCardBackgroundActive.src : creditCardBackgroundEmpty.src})`,
        }}
      >
        <div className='flex flex-col h-full justify-between text-white-1'>
          <div className='text-left mb-[20px]'>{logo && h.getLogo()[logo]}</div>

          <div className='space-y-4'>
            <p className='text-[26px] h-[32px] tracking-wider drop-shadow-default mb-[38px]'>
              {h.formatCardNumber(cardNumber)}
            </p>

            <div className='flex justify-between items-end'>
              <p className='drop-shadow-default uppercase text-[22px]'>
                {name && name.length > 0 ? name : 'NOME DO TITULAR'}
              </p>
              <p className='drop-shadow-default text-[26px]'>
                {expirationDate ?? '00/00'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
