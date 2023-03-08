type SelectorRecord = {
  [key: string]: {
    selector: string;
    label: string;
  };
};

export const LOGIN_SELECTORS: SelectorRecord = {
  username: { selector: "input", label: "@username" },
  password: { selector: "password-input", label: "@password" },
  passwordToggle: { selector: "password-toggle", label: "@passwordToggle" },
  submit: { selector: "submit-button", label: "@submit" },
  loginSuccess: { selector: "login-success", label: "@loginSuccess" },
  loginError: { selector: "login-error", label: "@loginError" },
};
