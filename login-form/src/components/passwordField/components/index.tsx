import React, { useState } from "react";

import { PasswordFieldProps } from "../interfaces";

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  placeholder,
  showPassword,
  isToggleable,
  togglePasswordVisibility,
}) => {
  return (
    <>
      <label htmlFor={label}>{label} :</label> <br />
      <input
        type={showPassword}
        id={label}
        name={label}
        placeholder={placeholder}
      />
      {isToggleable && <span onClick={togglePasswordVisibility}> *</span>}
      <br />
    </>
  );
};

export default PasswordField;
