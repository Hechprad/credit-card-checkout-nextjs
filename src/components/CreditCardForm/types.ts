import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';
import { z } from 'zod';

import { creditCardSchema } from '@/components/CreditCardForm/helpers';

export type creditCardFormFields = z.infer<typeof creditCardSchema>;

export type CreditCardFormProps = {
  control: Control<creditCardFormFields>;
  errors: FieldErrors<creditCardFormFields>;
  handleSubmit: UseFormHandleSubmit<creditCardFormFields>;
  register: UseFormRegister<creditCardFormFields>;
  watch: UseFormWatch<creditCardFormFields>;
};
