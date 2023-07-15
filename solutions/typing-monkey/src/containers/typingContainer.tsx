import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ResponseType, useGetRandomQuote } from "../hooks/getGetRandomQuote";

import { Typing } from "../components/typing";

import {
  calculateAccuracy,
  calculateScore,
  calculateWPM,
} from "../utils/calculateScore";

export const TypingContainer = () => {
  const [buffer, setBuffer] = useState<string[]>([]);
  const [start, setStart] = useState<Date | null>(null);
  const [WPM, setWPM] = useState<number>();
  const [accuracy, setAccuracy] = useState<number>();
  const navigate = useNavigate();

  const windowRef = useRef(null);

  const { isLoading, error, data } = useGetRandomQuote(
    "https://type.fit/api/quotes"
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const key = event.key;
    console.log(key);
    if (key === "Backspace") {
      const tempBuffer = [...buffer];
      tempBuffer.pop();
      setBuffer([...tempBuffer]);
    } else if (key !== "Shift") {
      setBuffer([...buffer, key]);
      if (buffer.length <= 0) {
        setStart(new Date());
      }
      if (buffer.length === (data as ResponseType).text.length - 1) {
        const end = new Date();
        const totalTimeSpent = Math.abs(start - end) / 1000;
        const origin = (data as ResponseType).text.split("");
        const score = calculateScore(origin, buffer);
        navigate(
          `/results/${calculateAccuracy(score, buffer.length)}/${calculateWPM(
            buffer.length,
            totalTimeSpent
          )}`
        );
      }
    }
  };

  useEffect(() => {
    windowRef.current.focus();
  }, []);

  return (
    <Typing
      buffer={buffer}
      isLoading={isLoading}
      data={data}
      handleKeyDown={handleKeyDown}
      windowRef={windowRef}
    />
  );
};
