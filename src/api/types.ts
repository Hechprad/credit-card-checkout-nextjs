import { CreditCardFormFields } from '@/components/CreditCardForm/types';

type PaymentResponse = {
  status: 'success' | 'error';
  message: string;
  transactionId?: string;
  data?: CreditCardFormFields;
  error?: string;
};

export type SubmitPaymentResponse = Promise<PaymentResponse>;
