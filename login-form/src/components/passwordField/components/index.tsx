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
      <label htmlFor={label} test-id="password-label">{label} :</label> <br />
      <input
        test-id="password-input"
        type={showPassword}
        id={label}
        name={label}
        placeholder={placeholder}
      />
      {isToggleable && <span test-id="password-toggle" onClick={togglePasswordVisibility}> * </span>}
      <br />
    </>
  );
};

export default PasswordField;
