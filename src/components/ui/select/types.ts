export type SelectProps = {
  errorMessage?: string;
  hideLabel?: boolean;
  label: string;
  placeholder: string;
  options: {
    value: string;
    label: string;
  }[];
};
