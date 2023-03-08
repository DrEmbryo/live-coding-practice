import React from "react";

import { InputFieldProps } from "../interfaces";

const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
  return (
    <>
      <label htmlFor={label} test-id="input-label">{label} :</label> <br />
      <input
        test-id="input"
        type="text"
        id={label}
        name={label}
        placeholder={placeholder}
      />{" "}
      <br />
    </>
  );
};

export default InputField;
