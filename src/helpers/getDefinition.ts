import { useState, useEffect } from "react";

const useGetDefinition = (word:string, partOfSpeech: string) => {
  const [definitions, setDefinitions] = useState([])

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
          setDefinitions(data[0].meanings.find((meaning) => meaning.partOfSpeech === partOfSpeech).definitions);
      })
      .catch((error) => console.log(error));
  }, [word, partOfSpeech]);


  return definitions;
};

export default useGetDefinition;
