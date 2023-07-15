import { ResponseType } from "../hooks/getGetRandomQuote";

import loader from "../assets/ring-resize.svg";

interface TypingProps {
  windowRef: React.LegacyRef<HTMLDivElement>;
  handleKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
  isLoading: boolean;
  buffer: string[];
  data: ResponseType | null;
}

export const Typing: React.FC<TypingProps> = ({
  windowRef,
  handleKeyDown,
  isLoading,
  buffer,
  data,
}) => {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-slate-400"
      ref={windowRef}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
      {isLoading ? <img src={loader} /> : null}
      <div className="bg-slate-100 rounded w-96 p-4">
        <p className="text-left">
          <span className="bg-red-200" />
          <span className="bg-green-200" />
          {data?.text.split("").map((char, index) => {
            console.log(char);
            const untouched = buffer[index] !== undefined;
            const matched = char === buffer[index];
            return (
              <span
                className={`${
                  untouched ? `bg-${matched ? "green" : "red"}-200` : ""
                } p-1`}
              >
                {char}
              </span>
            );
          })}
        </p>
        <p className="text-right mt-1 font-bold">{data?.author}</p>
      </div>
    </div>
  );
};
