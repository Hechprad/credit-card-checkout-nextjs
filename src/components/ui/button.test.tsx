import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders with default variant', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-green-2');
  });

  it('renders with link variant and shows chevron icon', () => {
    render(<Button variant='link'>Back</Button>);

    const button = screen.getByRole('button', { name: /back/i });
    const icon = screen.getByTestId('chevron-left-icon');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('text-green-1');
    expect(icon).toBeInTheDocument();
  });

  it('renders as child component when asChild prop is true', () => {
    render(
      <Button asChild>
        <a href='#'>Link Button</a>
      </Button>,
    );

    const link = screen.getByRole('link', { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
  });

  it('applies custom className', () => {
    const customClass = 'custom-class';
    render(<Button className={customClass}>Custom Button</Button>);

    const button = screen.getByRole('button', { name: /custom button/i });
    expect(button).toHaveClass(customClass);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');
  });
});
