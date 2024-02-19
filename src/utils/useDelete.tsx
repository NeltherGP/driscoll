import { useState } from "react";

export const useDelete = () => {
  const [error, setError] = useState<string|null>(null);
  const [isLoading, setIsLoading] = useState<boolean|null>(false);
  const [response, setResponse] = useState(null);

  const deleteData = async (path:URL) => {
    console.log("path :", path);
    setIsLoading(true);

    try {
      const response = await fetch(path, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      } else {
        setResponse(json);
      }
    } catch (error) {
      console.error("Error during DELETE request:", error);
      setError("Error during DELETE request");
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteData, response, isLoading, error };
};