import React, { useState } from "react";

import Form from "../components";

import { URL } from "../../../constants/api";

const FormContainer: React.FC = () => {
  const [formFields, setFormFields] = useState({});
  const [requestResult, setRequestResult] = useState<unknown>();

  const handleFormChange = (e: any) => {
    let updatedFormFields: { [key: string]: string } = { ...formFields };
    const key = e.target.name;
    const value = e.target.value;
    updatedFormFields[key] = value;
    setFormFields(updatedFormFields);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formFields),
    })
      .then((res) => res.json())
      .then((data) => setRequestResult(data))
      .catch((err) => setRequestResult(err));
  };

  const props = { requestResult, handleFormChange, handleSubmit };

  return <Form {...props} />;
};

export default FormContainer;
