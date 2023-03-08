import React from "react";

import { withTestId } from "@utils/index";
import { LOGIN_SELECTORS } from "@cypress/support/selectors";

import { ButtonProps } from "../interfaces";

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button type="submit" test-id={withTestId(LOGIN_SELECTORS.submit.selector)}>
      {children}
    </button>
  );
};

export default Button;
