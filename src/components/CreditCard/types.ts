export type CreditCardLogos =
  | 'american-express'
  | 'diners-club'
  | 'elo'
  | 'mastercard'
  | 'visa';

export type CreditCardProps = {
  bgActive?: boolean;
  cardNumber?: string;
  expirationDate?: string;
  logo?: CreditCardLogos;
  name?: string;
};
