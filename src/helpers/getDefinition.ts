import { useState, useEffect } from "react";

const useGetDefinition = () => {
  const [definition, setDefinition] = useState<string | null>(null);
  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/approach")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDefinition(data);
      });
  }, [setDefinition]);
  return definition;
};
export default useGetDefinition;
