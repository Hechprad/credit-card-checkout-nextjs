import { JSX } from 'react';

import AmericanExpressLogo from '@/assets/credit-card-logos/amex.svg';
import DefaultLogo from '@/assets/credit-card-logos/default-logo.svg';
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
    bcglobal: <DefaultLogo className={className} />,
    'carte-blanche': <DefaultLogo className={className} />,
    discover: <DefaultLogo className={className} />,
    instapayment: <DefaultLogo className={className} />,
    jcb: <DefaultLogo className={className} />,
    'korean-local': <DefaultLogo className={className} />,
    laser: <DefaultLogo className={className} />,
    maestro: <DefaultLogo className={className} />,
    solo: <DefaultLogo className={className} />,
    switch: <DefaultLogo className={className} />,
    unionpay: <DefaultLogo className={className} />,
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

export const identifyCardBrand = (
  cardNumber: string,
): CreditCardLogos | undefined => {
  const cleanNumber = cardNumber.replace(/\D/g, '');

  if (!cleanNumber) return undefined;

  // Amex
  if (/^3[47][0-9]{13}$/.test(cleanNumber)) return 'american-express';

  // BCGlobal
  if (/^(6541|6556)[0-9]{12}$/.test(cleanNumber)) return 'bcglobal';

  // Carte Blanche
  if (/^389[0-9]{11}$/.test(cleanNumber)) return 'carte-blanche';

  // Diners Club
  if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(cleanNumber))
    return 'diners-club';

  // Discover
  if (
    /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/.test(
      cleanNumber,
    )
  )
    return 'discover';

  // InstaPayment
  if (/^63[7-9][0-9]{13}$/.test(cleanNumber)) return 'instapayment';

  // JCB
  if (/^(?:2131|1800|35\d{3})\d{11}$/.test(cleanNumber)) return 'jcb';

  // Korean Local
  if (/^9[0-9]{15}$/.test(cleanNumber)) return 'korean-local';

  // Laser
  if (/^(6304|6706|6709|6771)[0-9]{12,15}$/.test(cleanNumber)) return 'laser';

  // Maestro
  if (/^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/.test(cleanNumber))
    return 'maestro';

  // Mastercard
  if (
    /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
      cleanNumber,
    )
  )
    return 'mastercard';

  // Solo
  if (
    /^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$/.test(
      cleanNumber,
    )
  )
    return 'solo';

  // Switch
  if (
    /^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$/.test(
      cleanNumber,
    )
  )
    return 'switch';

  // Union Pay
  if (/^(62[0-9]{14,17})$/.test(cleanNumber)) return 'unionpay';

  // Visa
  if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cleanNumber)) return 'visa';

  // Elo (keeping the existing Elo check)
  if (/^(636368|438935|504175|451416|509[0-9]{3})/.test(cleanNumber))
    return 'elo';

  return undefined;
};
