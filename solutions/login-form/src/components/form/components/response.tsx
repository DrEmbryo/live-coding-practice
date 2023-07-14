import React from "react";

import { withTestId } from "@utils/index";
import { LOGIN_SELECTORS } from "@cypress/support/selectors";

import { ResponseProps } from "../interfaces";

const Response: React.FC<ResponseProps> = ({ requestResult }) => {
  const errorMessage = requestResult?.message;
  return (
    <>
      {errorMessage ? (
        <div
          test-id={withTestId(LOGIN_SELECTORS.loginError.selector)}
          className="text-center text-red-500"
        >
          Invalid request: {errorMessage}
        </div>
      ) : (
        <div
          test-id={withTestId(LOGIN_SELECTORS.loginSuccess.selector)}
          className="text-center text-emerald-500"
        >
          User name is: {requestResult.firstName} {requestResult.lastName}
        </div>
      )}
    </>
  );
};

export default Response;
