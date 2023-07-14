import { useState } from "react";

import { MODE } from "../constants";
import { Fields } from "../Interfaces";

import Form from "../components/form";

import {
  CaesarCipherDecryption,
  CaesarCipherEncryption,
} from "../utils/encryption";

const FormContainer = () => {
  const [fields, setFields] = useState<Fields>({ input: "", shift: "" });
  const [mode, setMode] = useState<MODE>(MODE.encrypt);
  const [output, setOutput] = useState<string>("");

  const handleModes = (mode: MODE) => {
    setMode(mode);
  };

  const handleFields =
    (field: "shift" | "input") => (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentState = fields;
      currentState[field] = e.target.value;
      setFields(currentState);
    };

  const handleForm = () => {
    switch (mode) {
      case MODE.decrypt:
        setOutput(CaesarCipherDecryption(fields.input, fields.shift));
        break;
      case MODE.encrypt:
        setOutput(CaesarCipherEncryption(fields.input, fields.shift));
        break;
    }
  };

  const props = {
    output,
    mode,
    handleModes,
    handleFields,
    handleForm,
  };

  return <Form {...props} />;
};

export default FormContainer;
