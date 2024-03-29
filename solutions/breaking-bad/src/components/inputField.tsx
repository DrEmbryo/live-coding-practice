import { InputFieldProps } from "../interfaces";

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label} :
      </label>
      <input
        onChange={onChange(id)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-400"
        type="text"
        name={label}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
