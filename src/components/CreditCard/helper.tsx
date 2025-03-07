import AmericanExpressLogo from '@/assets/credit-card-logos/amex.svg';
// import AmericanExpressLogo from '@/assets/teste/amex.svg';
import DinersClubLogo from '@/assets/credit-card-logos/diners.svg';
import EloLogo from '@/assets/credit-card-logos/elo.svg';
import MastercardLogo from '@/assets/credit-card-logos/mastercard.svg';
import VisaLogo from '@/assets/credit-card-logos/visa.svg';

export const getLogo = () => {
  const className = 'h-[74px] fill-white-1';

  return {
    'american-express': <AmericanExpressLogo className={className} />,
    'diners-club': <DinersClubLogo className={className} />,
    elo: <EloLogo className={className} />,
    mastercard: <MastercardLogo className={className} />,
    visa: <VisaLogo className={className} />,
  };
};
