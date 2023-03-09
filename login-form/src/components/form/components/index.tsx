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
    <>
      <form onSubmit={handleSubmit} onChange={handleFormChange}>
        <InputField label="username" placeholder="Jon Doe" />
        <PasswordField isToggleable label="password" placeholder="123" />
        <Button>Log in</Button>
      </form>
      {
        requestResult && <Response requestResult={requestResult} />
      }
    </>
  );
};

export default Form;
