import { CreditCardFormFields } from '@/components/CreditCardForm/types';

import * as t from './types';

const basePath = 'https://apixpto.com';

export async function submitPayment(
  paymentData: CreditCardFormFields,
): t.SubmitPaymentResponse {
  // @MOCK
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'success',
        message: 'Payment processed successfully',
        transactionId: Math.random().toString(36).substring(2, 15),
        data: paymentData,
      });
    }, 1500);
  });

  try {
    const response = await fetch(`${basePath}/api/pagar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Payment processing failed');
    }

    return data;
  } catch (error) {
    throw error;
  }
}
