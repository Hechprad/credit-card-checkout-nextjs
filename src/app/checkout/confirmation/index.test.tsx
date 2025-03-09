import { render, screen } from '@testing-library/react';
import ConfirmationPage from './page';

describe('Confirmation Page', () => {
  it('should display the cart title', () => {
    render(<ConfirmationPage />);
    expect(screen.getByText(/Confirmação de compra/i)).toBeInTheDocument();
  });

  it('should display checkout button', () => {
    render(<ConfirmationPage />);
    expect(screen.getByText(/ir para checkout/i)).toBeInTheDocument();
  });
});
