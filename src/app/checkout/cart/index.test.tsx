import { render, screen } from '@testing-library/react';
import CartPage from './page';

describe('Cart Page', () => {
  it('should display the cart title', () => {
    render(<CartPage />);
    expect(screen.getByText(/Carrinho/i)).toBeInTheDocument();
  });

  it('should display link', () => {
    render(<CartPage />);
    expect(
      screen.getByRole('link', { name: /Ir para checkout/i }),
    ).toBeInTheDocument();
  });
});
