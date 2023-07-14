import React, { useState } from "react";

import PasswordField from "../components";

import { PasswordFieldContainerProps } from "../interfaces";

const PasswordFieldContainer: React.FC<PasswordFieldContainerProps> = ({
  label,
  placeholder,
  isToggleable,
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const showPassword = isPasswordShown ? "text" : "password";

  const props = {
    label,
    placeholder,
    isToggleable,
    showPassword,
    togglePasswordVisibility,
  };

  return <PasswordField {...props} />;
};

export default PasswordFieldContainer;
