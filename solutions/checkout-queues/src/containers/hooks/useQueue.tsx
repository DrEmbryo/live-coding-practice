import { useState } from "react";

export const useCreateQueue = (numbers: number[]) => {
  const [queue, setQueue] = useState(numbers);

  const add = (item: number) => setQueue([...queue, item]);

  const remove = () => {
    if (queue.length) {
      const copy = [...queue];
      copy.shift();
      setQueue(copy);
    }
  };

  const getSum = () =>
    queue.reduce((acc: number, cur: number) => (acc += cur), 0);

  const decreaseFirst = () => {
    const first = queue[0];
    if (queue.length) {
      if (first <= 1) {
        remove();
      } else {
        const copy = [...queue];
        copy[0] -= 1;
        setQueue(copy);
      }
    }
  };

  return { current: queue, add, getSum, decreaseFirst };
};
