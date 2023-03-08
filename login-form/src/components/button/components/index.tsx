import React from "react";

import { ButtonProps } from "../interfaces";

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button type="submit" test-id="submit-button">{children}</button>;
};

export default Button;
