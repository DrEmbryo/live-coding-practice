import React from "react";

import { InputFieldProps } from "../interfaces";

const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
  return (
    <>
      <label htmlFor={label}>{label} :</label> <br />
      <input
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
