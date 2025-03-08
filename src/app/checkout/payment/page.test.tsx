import { render, screen } from '@testing-library/react';
import Checkout from './page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    back: jest.fn(),
  })),
}));

describe('Checkout', () => {
  it('should render the component', () => {
    render(<Checkout />);

    const heading = screen.getByRole('heading', {
      name: /Adicione um novo cartão de crédito/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
