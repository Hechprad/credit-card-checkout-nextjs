import { JSX } from 'react';

import AmericanExpressLogo from '@/assets/credit-card-logos/amex.svg';
import DinersClubLogo from '@/assets/credit-card-logos/diners.svg';
import EloLogo from '@/assets/credit-card-logos/elo.svg';
import MastercardLogo from '@/assets/credit-card-logos/mastercard.svg';
import VisaLogo from '@/assets/credit-card-logos/visa.svg';

import type { CreditCardLogos } from '@/components/CreditCard/types';

export const getLogo = (): Record<CreditCardLogos, JSX.Element> => {
  const className = 'h-[74px] fill-white-1';

  return {
    'american-express': <AmericanExpressLogo className={className} />,
    'diners-club': <DinersClubLogo className={className} />,
    elo: <EloLogo className={className} />,
    mastercard: <MastercardLogo className={className} />,
    visa: <VisaLogo className={className} />,
  };
};

export const formatCardNumber = (cardNumber: string = '') => {
  const basePattern = '**** **** **** ****';
  const numbers = cardNumber.replace(/\D/g, '');

  return basePattern
    .split('')
    .map((char, index) =>
      char === ' '
        ? '\u00A0\u00A0\u00A0'
        : numbers[index - Math.floor(index / 5)] || '*',
    )
    .join('');
};
