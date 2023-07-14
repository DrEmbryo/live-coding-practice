type UnwrapFromObjectLike<T> = T extends infer objectLike
  ? keyof objectLike
  : never;

export type Fields = {
  firstName: string;
  lastName: string;
};

// don't need a generic here, just use keyof Type
export type FieldNames = UnwrapFromObjectLike<Fields>;

export interface ButtonProps {
  onClick: () => void;
  active?: boolean;
  children: React.ReactChild;
}

export interface FormProps {
  fields: Fields;
  handleFields: (
    label: FieldNames
  ) => React.ChangeEventHandler<HTMLInputElement>;
}

export interface InputFieldProps {
  id: FieldNames;
  label: string;
  placeholder: string;
  onChange: (label: FieldNames) => React.ChangeEventHandler<HTMLInputElement>;
}
