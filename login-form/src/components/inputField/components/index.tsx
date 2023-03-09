import React from "react";

import { withTestId } from "@utils/index";
import { LOGIN_SELECTORS } from "@cypress/support/selectors";

import { InputFieldProps } from "../interfaces";

const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        test-id={withTestId(LOGIN_SELECTORS.usernameLabel.selector)}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label} :
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-teal-400"
        test-id={withTestId(LOGIN_SELECTORS.username.selector)}
        type="text"
        id={label}
        name={label}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
