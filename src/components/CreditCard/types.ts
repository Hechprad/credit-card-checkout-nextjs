import { UseFormWatch } from 'react-hook-form';

import type { creditCardFormFields } from '@/components/CreditCardForm/types';

export type CreditCardLogos =
  | 'american-express'
  | 'bcglobal'
  | 'carte-blanche'
  | 'diners-club'
  | 'discover'
  | 'elo'
  | 'instapayment'
  | 'jcb'
  | 'korean-local'
  | 'laser'
  | 'maestro'
  | 'mastercard'
  | 'solo'
  | 'switch'
  | 'unionpay'
  | 'visa';

export type CreditCardProps = {
  formWatch: UseFormWatch<creditCardFormFields>;
};
