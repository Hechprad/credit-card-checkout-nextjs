import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
  it('should display the home title', () => {
    render(<Home />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  it('should display checkout button', () => {
    render(<Home />);
    expect(screen.getByText(/Ir para checkout/i)).toBeInTheDocument();
  });
});
