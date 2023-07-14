import React from "react";

import InputField from "../../inputField";
import PasswordField from "../../passwordField";
import Button from "../../button";
import Response from "./response";

import { FormProps } from "../interfaces";

const Form: React.FC<FormProps> = ({
  requestResult,
  handleSubmit,
  handleFormChange,
}) => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-600">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          onChange={handleFormChange}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center"
        >
          <InputField label="username" placeholder="Jon Doe" />
          <PasswordField isToggleable label="password" placeholder="123" />
          <Button>Log in</Button>
        </form>
        {requestResult && <Response requestResult={requestResult} />}
      </div>
    </div>
  );
};

export default Form;
