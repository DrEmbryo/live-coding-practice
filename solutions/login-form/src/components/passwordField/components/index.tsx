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
    <div className="mb-6">
      <label
        htmlFor={label}
        test-id={withTestId(LOGIN_SELECTORS.passwordLabel.selector)}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label} :
      </label>
      <div className="flex flex-row items-center">
        <input
          test-id={withTestId(LOGIN_SELECTORS.password.selector)}
          type={showPassword}
          id={label}
          name={label}
          placeholder={placeholder}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-teal-400"
        />
        {isToggleable && (
          <div className="basis-7 flex justify-center">
            <span
              className="cursor-pointer"
              test-id={withTestId(LOGIN_SELECTORS.passwordToggle.selector)}
              onClick={togglePasswordVisibility}
            >
              *
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordField;
