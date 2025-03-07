import { render, screen } from '@testing-library/react';
import Checkout from './page';

describe('Checkout', () => {
  it('should render the component', () => {
    render(<Checkout />);

    const heading = screen.getByRole('heading', {
      name: /Adicione um novo cartão de crédito/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
