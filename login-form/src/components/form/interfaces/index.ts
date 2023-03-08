import React from "react";

export interface FormProps {
  requestResult: any;
  handleFormChange: (event: React.SyntheticEvent) => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
}

export interface ResponseProps {
  requestResult: any;
}
