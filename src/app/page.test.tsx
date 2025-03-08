import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('should render the component', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Home/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
