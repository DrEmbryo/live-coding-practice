import { useState, useEffect } from "react";
import * as dayjs from "dayjs";

import { DigitDisplay } from "./components/display";

export const App = () => {
  const [time, setTime] = useState<Date>(new Date());
  const currentTime = [time.getHours(), time.getMinutes()].join().split("");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="flex gap-10 w-screen h-screen bg-stone-800">
      {currentTime.map((value: any) => (
        <DigitDisplay input={value} />
      ))}
    </div>
  );
};
