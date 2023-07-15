import { useState, useEffect } from "react";

type RequestState = {
  isLoading: boolean;
  error: unknown | null;
  data: ResponseType | null;
};

export type ResponseType = {
  author: string;
  text: string;
};

export const useGetRandomQuote = (url: string) => {
  const [state, setState] = useState<RequestState>({
    isLoading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<ResponseType[]>;
      })
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setState({ ...state, data: data[randomIndex], isLoading: false });
        return data;
      })
      .catch((err) => {
        setState({ ...state, error: err, isLoading: false });
      });
  }, [url]);

  return state;
};
