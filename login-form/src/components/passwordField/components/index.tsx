import React from "react";

import { withTestId } from "@utils/index";
import { LOGIN_SELECTORS } from "@cypress/support/selectors";

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
      <label htmlFor={label}>{label} :</label>
      <br />
      <input
        test-id={withTestId(LOGIN_SELECTORS.password.selector)}
        type={showPassword}
        id={label}
        name={label}
        placeholder={placeholder}
      />
      {isToggleable && (
        <span
          test-id={withTestId(LOGIN_SELECTORS.passwordToggle.selector)}
          onClick={togglePasswordVisibility}
        >
          *
        </span>
      )}
      <br />
    </>
  );
};

export default PasswordField;
