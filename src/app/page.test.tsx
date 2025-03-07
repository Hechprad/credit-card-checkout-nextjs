import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('should render the component', () => {
    render(<Home />);

    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();

    const nextLogo = screen.getByAltText('Next.js logo');
    expect(nextLogo).toBeInTheDocument();
  });
});
