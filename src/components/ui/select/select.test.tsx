import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './select';

describe('Select Component', () => {
  const defaultProps = {
    label: 'Test Label',
    placeholder: 'Select an option',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  };

  beforeAll(() => {
    window.Element.prototype.hasPointerCapture = () => false;
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  it('renders with label and placeholder', () => {
    render(<Select {...defaultProps} />);

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('hides label when hideLabel prop is true', () => {
    render(<Select {...defaultProps} hideLabel={true} />);

    expect(screen.queryByText('Test Label')).not.toBeInTheDocument();
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('renders option when clicked', async () => {
    render(<Select {...defaultProps} />);

    const trigger = screen.getByRole('combobox');

    setTimeout(async () => {
      await userEvent.click(trigger);
    });

    await screen.findByText(defaultProps.options[2].label);
  });

  it('selects an option when clicked', async () => {
    const onValueChange = jest.fn();
    render(<Select {...defaultProps} onValueChange={onValueChange} />);

    const trigger = screen.getByRole('combobox');
    await userEvent.click(trigger);

    const option = screen.getByText('Option 1');
    await userEvent.click(option);

    expect(onValueChange).toHaveBeenCalledWith('option1');
  });

  it('displays selected value after selection', async () => {
    render(<Select {...defaultProps} />);

    const trigger = screen.getByRole('combobox');
    await userEvent.click(trigger);

    const option = screen.getByText('Option 2');
    await userEvent.click(option);

    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('maintains accessibility attributes', () => {
    render(<Select {...defaultProps} />);

    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveAttribute('data-slot', 'select-trigger');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});
