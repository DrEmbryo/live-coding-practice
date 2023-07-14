import React from "react";

import { Customer } from "./customer";

import counter from "../assets/counter.png";

export const CheckoutQueue: React.FC<{ queue: number[] }> = ({ queue }) => {
  return (
    <div className="flex flex-row min-h-80 bg-gray-700 mb-2 border-indigo-500">
      <img src={counter} alt="counter" className="h-20" />
      {queue.map((amount: number, index: number) => (
        <Customer items={amount} key={`${index}-customer`} />
      ))}
    </div>
  );
};
