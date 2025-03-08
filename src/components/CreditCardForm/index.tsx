import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

import InfoIcon from '@/assets/icons/information.svg';

export default function CreditCardForm() {
  return (
    <form id='' className='flex flex-col gap-[42px] justify-start items-end'>
      <Input
        label='Número do cartão'
        placeholder='Número do cartão'
        type='text'
      />
      <Input
        label='Nome (igual ao cartão)'
        placeholder='Nome (igual ao cartão)'
        type='text'
      />
      <div className='flex gap-[30px] w-full'>
        <Input label='Validade' placeholder='Validade' type='text' />
        <Input
          label={
            <>
              <span className='w-auto size-[12px] text-gray-1'>CVV</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className='size-[14px] fill-gray-1' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      O CVV é o código de segurança do seu cartão, geralmente
                      com 3 dígitos, localizado no verso do cartão.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          }
          placeholder='CVV'
          type='text'
        />
      </div>
      <Select
        label='Número de parcelas'
        placeholder='Número de parcelas'
        options={[...Array(12)].map((_, i) => ({
          label: `${i + 1} x`,
          value: `${i + 1}`,
        }))}
      />

      <Button type='submit' className='mt-[20px]'>
        Continuar
      </Button>
    </form>
  );
}
