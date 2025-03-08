import { JSX } from 'react';

export type InputProps = {
  errorMessage?: string;
  label: string | JSX.Element;
  hideLabel?: boolean;
};
