import { useEffect } from "react";
import { useCreateQueue } from "./hooks/useQueue";

import { CheckoutQueue } from "../components/checkoutQueue";
import { ControlForm } from "../components/controlForm";

export const QueueContainer = () => {
  const queues = [
    useCreateQueue([7, 2, 10]),
    useCreateQueue([9, 4]),
    useCreateQueue([1]),
    useCreateQueue([]),
    useCreateQueue([10, 15]),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      queues.map((queue) => queue.decreaseFirst());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const addNewCustomer = (value: number) => {
    const insertIndex = smallestQueueIndex();
    queues[insertIndex].add(value);
  };

  const smallestQueueIndex = () => {
    let min = queues[0].getSum();
    let minIndex = 0;
    queues.forEach((queue, index) => {
      const currentQueueSum = queue.getSum();
      if (currentQueueSum < min) {
        min = currentQueueSum;
        minIndex = index;
      }
    });
    return minIndex;
  };

  return (
    <div className="bg-slate-600 h-screen">
      <h1 className="text-center text-2xl font-semibold text-white mb-6 pt-6">
        Shop Checkout Queues
      </h1>
      <ControlForm setValue={addNewCustomer} />
      {queues.map((queue, index) => (
        <CheckoutQueue queue={queue.current} key={`${index}-queue`} />
      ))}
    </div>
  );
};
