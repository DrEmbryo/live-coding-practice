import { useParams, Link } from "react-router-dom";

import typingMonkey from "../assets/typing-monkey.png";

export const Results = () => {
  const { accuracy, wpm } = useParams();
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-400">
      <div className="relative">
        <img src={typingMonkey} className="absolute w-48 h-48 logo" />
        <div className="flex flex-col bg-slate-100 rounded w-96 p-4 pt-8">
          <h1 className="text-center font-bold text-2xl mb-8">
            Your results is:
          </h1>
          <div className="text-center font-bold text-2xl mb-4">
            <span className="font-bold">WPM: </span>
            {wpm}
          </div>
          <div className="text-center font-bold text-2xl mb-4">
            <span className="font-bold">accuracy: </span>
            {accuracy} %
          </div>
          <Link
            to="/typing"
            className="item-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <p className="text-center">Try again</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
