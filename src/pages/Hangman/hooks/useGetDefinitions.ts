import { useEffect, useState } from "react";
const defaultValue = {
  type: "",
  term: "",
  partOfSpeech: "",
  definitions: [],
};

const useGetDefinitions = () => {
  const [result, setResult] = useState(defaultValue);

  useEffect(() => {
    fetch("http://localhost:4000")
      .then((res) => res.json())
      .then((json) => setResult(json))
      .catch((error) => console.error(error));
  }, []);

  return result;
};

export default useGetDefinitions;
