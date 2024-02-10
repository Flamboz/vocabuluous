import { useState, useEffect } from "react";
import { getApiKey } from "./getApiKey.js";
import { getApiModel } from "./getApiModel.js";

const useGetDefinition = (word: string, partOfSpeech: string) => {
  const [definitions, setDefinitions] = useState([]);

  const apiKey = getApiKey();
  const apiModel = getApiModel();

  const message = `write a short definition for the ${partOfSpeech} "${word}"`;

  useEffect(() => {
    if (word) {
      fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: apiModel,
          messages: [
            {
              role: "user",
              content: message,
            },
          ],
          temperature: 0,
          max_tokens: 1000,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  }, [word, partOfSpeech, apiKey, message]);

  return definitions;
};

export default useGetDefinition;
