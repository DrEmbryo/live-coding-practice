import { useState } from "react";
import { Fields, FieldNames } from "../interfaces";

import Form from "../components/form";

const FormContainer = () => {
  const [fields, setFields] = useState<Fields>({
    firstName: "",
    lastName: "",
  });

  const handleFields =
    (field: FieldNames) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentState = { ...fields };
      currentState[field] = e.target.value;
      setFields(currentState);
    };

  return <Form handleFields={handleFields} fields={fields} />;
};

export default FormContainer;
