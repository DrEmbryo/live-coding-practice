import { highlightElement } from "../utils";

const FormattedText = ({ text }: { text: string }) => {
  const highlightedText = highlightElement(text);
  return (
    <div className=" text-white">
      <p className="flex flex-row items-center font-bold">
        {highlightedText.highlighted ? (
          <span className="flex items-center justify-center bg-green-950 text-center px-2 py-1">
            {highlightedText.highlighted}
          </span>
        ) : null}
        {highlightedText.text}
      </p>
    </div>
  );
};

export default FormattedText;
