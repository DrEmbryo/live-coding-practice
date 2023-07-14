import FormattedText from "./formatedText";
import InputField from "./inputField";

import { FormProps } from "../interfaces";

const Form: React.FC<FormProps> = ({ fields, handleFields }) => {
  console.log(fields);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[url('/src/assets/smoke.jpg')] bg-green-950">
      <div className="w-full max-w-xs">
        <div className="form_results flex items-center flex-col gap-2 mb-4 p-4 bg-green-900 shadow-md rounded">
          {Object.entries(fields).map(([key, value]) =>
            value.length > 0 ? <FormattedText key={key} text={value} /> : null
          )}
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center">
          {<h1 className="text-center pb-4">Breaking Bad Style Names</h1>}
          <InputField
            onChange={handleFields}
            label="First Name"
            id="firstName"
            placeholder="Walter"
          />
          <InputField
            onChange={handleFields}
            label="Last Name"
            id="lastName"
            placeholder="White"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
