import { render, screen } from '@testing-library/react';
import CreditCard from '.';
import { UseFormWatch } from 'react-hook-form';
import { CreditCardFormFields } from '@/components/CreditCardForm/types';

const formWatchMock = (() => ({
  cardNumber: '4111111111111111',
  name: 'John Doe',
  cvv: '456',
  expiryDate: '12/25',
  installments: '1',
})) as unknown as UseFormWatch<CreditCardFormFields>;

describe('CreditCard Component', () => {
  it('should render card details correctly', () => {
    render(<CreditCard formWatch={formWatchMock} />);

    expect(screen.getByText('4111 1111 1111 1111')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('12/25')).toBeInTheDocument();
  });
});
