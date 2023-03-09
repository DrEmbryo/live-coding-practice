import React from "react";

import { withTestId } from "@utils/index";
import { LOGIN_SELECTORS } from "@cypress/support/selectors";

import { InputFieldProps } from "../interfaces";

const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
  return (
    <>
      <label htmlFor={label} test-id={withTestId(LOGIN_SELECTORS.usernameLabel.selector)}>{label} :</label> <br />
      <input
        test-id={withTestId(LOGIN_SELECTORS.username.selector)}
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
