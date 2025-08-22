export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'number';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps {
  type?: InputType;
  size?: InputSize;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  label?: string;
  errorMessage?: string;
  helpText?: string;
  leftIcon?: string;
  rightIcon?: string;
  fullWidth?: boolean;
}
