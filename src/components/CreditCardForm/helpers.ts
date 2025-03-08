import { z } from 'zod';

const luhnCheck = (num: string) => {
  const arr = num
    .replace(/\D/g, '')
    .split('')
    .reverse()
    .map((x) => Number.parseInt(x));

  const lastDigit = arr.shift();
  let sum = arr.reduce(
    (acc, val, i) =>
      i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val),
    0,
  );
  sum += lastDigit!;
  return sum % 10 === 0;
};

export const creditCardSchema = z.object({
  cardNumber: z
    .string()
    .transform((val) => val.replace(/\s/g, ''))
    .pipe(
      z
        .string()
        .regex(/^\d{16}$/, 'O número do cartão deve ter 16 dígitos')
        .refine((value) => luhnCheck(value), 'Número de cartão inválido'),
    ),
  name: z
    .string()
    .min(2, 'O nome deve ter pelo menos 2 caracteres.')
    .max(30, 'O nome deve ter no máximo 30 caracteres.')
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/, '* O nome deve conter apenas letras'),
  cvv: z.string().regex(/^\d{3,4}$/, '* CVV deve ter 3 ou 4 dígitos'),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Data inválida')
    .refine((date) => {
      const [month, year] = date.split('/').map(Number);
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      return (
        year > currentYear || (year === currentYear && month >= currentMonth)
      );
    }, 'Data inválida'),
  installments: z
    .string()
    .min(1, 'Insira o número de parcelas')
    .refine(
      (value) => Number(value) >= 1 && Number(value) <= 12,
      '* As parcelas devem estar entre 1 e 12.',
    ),
});

export const formatCardNumber = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim();

export const formatExpiryDate = (value: string) => {
  const digits = value.replace(/\D/g, '');

  if (digits.length === 0) return '';
  if (digits.length <= 2) return digits;

  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
};

export const formatCVV = (value: string) =>
  value.replace(/\D/g, '').slice(0, 4);

export const formatName = (value: string) =>
  value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, '');
