import { InputFieldProps } from "../Interfaces";

const InputField: React.FC<InputFieldProps> = ({
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
        onChange={onChange(label as "shift" | "input")}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-teal-400"
        type="text"
        id={label}
        name={label}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
