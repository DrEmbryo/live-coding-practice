import React from "react";

import { withTestId } from "@utils/index";
import { LOGIN_SELECTORS } from "@cypress/support/selectors";

import { ButtonProps } from "../interfaces";

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div className="text-center w-auto">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        type="submit"
        test-id={withTestId(LOGIN_SELECTORS.submit.selector)}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
