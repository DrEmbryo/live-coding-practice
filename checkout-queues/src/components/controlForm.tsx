import React, { useRef } from "react";

export const ControlForm: React.FC<{ setValue: (value: number) => void }> = ({
  setValue,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleAddCustomer = (value: number) => setValue(value);
  return (
    <form className="flex justify-center items-center mb-8">
      <input
        ref={inputRef}
        className="basis-1/4 mr-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Amount"
        type="number"
        placeholder="Amount"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() =>
          handleAddCustomer(inputRef.current?.value as unknown as number)
        }
      >
        Add new customer
      </button>
    </form>
  );
};
