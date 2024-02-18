import { useEffect, useState } from "react";

export const useGet = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [data, setData] = useState<any[]>([]);


  const getData = async (path:URL) => {
    console.log(path, "path");
    setIsLoading(true);

    const response = await fetch(path, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include'
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setData((prevData) => [...prevData, json]);
    }
  };

  return { getData, data, isLoading, error };
};