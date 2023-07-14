import InputField from "./InputField";
import Button from "./button";

import { FormProps } from "../Interfaces";

import { MODE } from "../constants";

const Form: React.FC<FormProps> = ({
  output,
  mode,
  handleModes,
  handleFields,
  handleForm,
}) => {
  const isEncryptMode = mode === MODE.encrypt;
  const isDecryptMode = mode === MODE.decrypt;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-600">
      <div className="flex bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 items-center">
        <div className="mr-6">
          <Button
            onClick={() => handleModes(MODE.encrypt)}
            active={isEncryptMode}
          >
            Encrypt
          </Button>
        </div>
        <div>
          <Button
            onClick={() => handleModes(MODE.decrypt)}
            active={isDecryptMode}
          >
            Decrypt
          </Button>
        </div>
      </div>

      <div className="w-full max-w-xs">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center">
          <h1 className="text-center pb-4">Caesar Cipher Encryption</h1>
          <InputField
            onChange={handleFields}
            label="input"
            placeholder="hello world!"
          />
          <InputField onChange={handleFields} label="shift" placeholder="3" />
          <Button onClick={handleForm}>{mode}</Button>
          {output.length ? <div className="mt-6">message: {output}</div> : null}
        </div>
      </div>
    </div>
  );
};

export default Form;
