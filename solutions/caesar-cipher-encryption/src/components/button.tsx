import { ButtonProps } from "../Interfaces";

export const Button: React.FC<ButtonProps> = ({
  children,
  active,
  onClick,
}) => {
  return (
    <div className="text-center w-auto ">
      <button
        className={`${active ? "bg-blue-700" : "bg-blue-500"}
            hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
