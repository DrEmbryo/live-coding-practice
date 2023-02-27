export interface PasswordFieldContainerProps {
  label: string;
  placeholder: string;
  isToggleable: boolean;
}

export interface PasswordFieldProps extends PasswordFieldContainerProps {
  showPassword: string;
  togglePasswordVisibility: () => void;
}
