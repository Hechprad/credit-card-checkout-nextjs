import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';
import { z } from 'zod';

import { creditCardSchema } from '@/components/CreditCardForm/helpers';

export type CreditCardFormFields = z.infer<typeof creditCardSchema>;

export type CreditCardFormProps = {
  control: Control<CreditCardFormFields>;
  errors: FieldErrors<CreditCardFormFields>;
  handleSubmit: UseFormHandleSubmit<CreditCardFormFields>;
  register: UseFormRegister<CreditCardFormFields>;
  watch: UseFormWatch<CreditCardFormFields>;
};
