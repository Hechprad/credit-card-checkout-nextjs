import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { creditCardSchema } from '@/components/CreditCardForm/helpers';
import { submitPayment } from '@/services';

import CreditCardForm from '.';

import type { CreditCardFormFields } from '@/components/CreditCardForm/types';

jest.mock('@/services', () => {
  const actual = jest.requireActual('@/services');
  return {
    ...actual,
    submitPayment: jest.fn(),
  };
});

jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('CreditCardForm', () => {
  const Wrapper = () => {
    const {
      control,
      formState: { errors },
      handleSubmit,
      watch,
    } = useForm<CreditCardFormFields>({
      resolver: zodResolver(creditCardSchema),
      defaultValues: {
        cardNumber: '',
        name: '',
        cvv: '',
        expiryDate: '',
        installments: '',
      },
    });

    return (
      <CreditCardForm
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        watch={watch}
      />
    );
  };

  it('renders the form correctly', () => {
    render(<Wrapper />);
    expect(screen.getByPlaceholderText('Número do cartão')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Nome (igual ao cartão)'),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Validade')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('CVV')).toBeInTheDocument();
    expect(screen.getByText('Continuar')).toBeInTheDocument();
  });

  it('shows an error for invalid card number', async () => {
    render(<Wrapper />);
    const input = screen.getByPlaceholderText('Número do cartão');
    const submitButton = screen.getByText('Continuar');

    fireEvent.change(input, { target: { value: '1234' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText((content) =>
          content.includes('O número do cartão deve ter entre 13 e 16 dígitos'),
        ),
      ).toBeInTheDocument();
    });
  });

  it('shows an error for invalid expiry date', async () => {
    render(<Wrapper />);
    const input = screen.getByPlaceholderText('Validade');
    const submitButton = screen.getByText('Continuar');

    fireEvent.change(input, { target: { value: '13/25' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Data inválida')).toBeInTheDocument();
    });
  });

  it('submits the form successfully', async () => {
    (submitPayment as jest.Mock).mockResolvedValueOnce({ success: true });

    render(<Wrapper />);
    fireEvent.change(screen.getByPlaceholderText('Número do cartão'), {
      target: { value: '4111 1111 1111 1111' },
    });
    fireEvent.change(screen.getByPlaceholderText('Nome (igual ao cartão)'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Validade'), {
      target: { value: '12/30' },
    });
    fireEvent.change(screen.getByPlaceholderText('CVV'), {
      target: { value: '123' },
    });

    const select = screen.getAllByRole('combobox', {
      hidden: true,
    });
    fireEvent.change(select[1], { target: { value: '1' } });

    fireEvent.click(screen.getByText('Continuar'));

    await waitFor(() => {
      expect(submitPayment).toHaveBeenCalled();
      expect(toast.success).toHaveBeenCalledWith(
        'Pagamento realizado com sucesso!',
        expect.any(Object),
      );
    });
  });

  it.only('handles payment submission failure', async () => {
    console.error = jest.fn();
    (submitPayment as jest.Mock).mockRejectedValueOnce(
      new Error('Server Error'),
    );

    render(<Wrapper />);
    fireEvent.change(screen.getByPlaceholderText('Número do cartão'), {
      target: { value: '4111 1111 1111 1111' },
    });
    fireEvent.change(screen.getByPlaceholderText('Nome (igual ao cartão)'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Validade'), {
      target: { value: '12/30' },
    });
    fireEvent.change(screen.getByPlaceholderText('CVV'), {
      target: { value: '123' },
    });

    const select = screen.getAllByRole('combobox', {
      hidden: true,
    });
    fireEvent.change(select[1], { target: { value: '1' } });

    fireEvent.click(screen.getByText('Continuar'));

    await waitFor(() => {
      expect(submitPayment).toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalledWith(
        'Erro ao processar pagamento. Tente novamente.',
        expect.any(Object),
      );
    });
  });
});
