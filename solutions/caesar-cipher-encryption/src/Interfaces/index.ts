import { MODE } from "../constants";

export type Fields = {
  shift: string;
  input: string;
};

export interface ButtonProps {
  onClick: () => void;
  active?: boolean;
  children: React.ReactChild;
}

export interface FormProps {
  output: string;
  mode: MODE;
  handleModes: (mode: MODE) => void;
  handleFields: (
    label: "shift" | "input"
  ) => React.ChangeEventHandler<HTMLInputElement>;
  handleForm: () => void;
}

export interface InputFieldProps {
  label: string;
  placeholder: string;
  onChange: (
    label: "shift" | "input"
  ) => React.ChangeEventHandler<HTMLInputElement>;
}
