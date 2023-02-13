import { useState } from "react";
import wait from "../utils/wait";

const useFetch = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  async function getData(link) {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(`Error (${response.status}):${response.statusText}`);
    }
    const data = response.json();
    return data;
  }

  async function performFetch(link) {
    try {
      setIsLoading(true);
      setError(null);
      await wait(1500);

      const data = await getData(link);
      if (data.Response === "True") {
        return data;
      } else {
        throw new Error(data.Error);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return { error, isLoading, performFetch };
};

export default useFetch;
