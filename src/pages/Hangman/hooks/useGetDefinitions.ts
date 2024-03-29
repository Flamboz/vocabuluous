import { useEffect, useState } from "react";
const defaultValue = {
  type: "",
  term: "",
  partOfSpeech: "",
  definitions: [],
};

const useGetDefinitions = (word: string | null) => {
  const [result, setResult] = useState(defaultValue);

  useEffect(() => {
    if (word) {
      fetch(`http://localhost:4000/?word=${word}`)
        .then((res) => res.json())
        .then((json) => setResult(json))
        .catch((error) => console.error(error));
    }
  }, [word]);

  return result;

  // return {
  //   type: "definition",
  //   term: "simplify",
  //   partOfSpeech: "verb",
  //   definitions: [
  //     {
  //       definition: "make (something) simpler or easier to do or understand",
  //       examples: [
  //         "the aim is to simplify the tax system",
  //         "the process can be simplified by using a computer program",
  //       ],
  //     },
  //     {
  //       definition:
  //         "reduce (something) to its basic elements or essential features",
  //       examples: [
  //         "the story was simplified into a children's book",
  //         "the design has been simplified for mass production",
  //       ],
  //     },
  //   ],
  // };
};

export default useGetDefinitions;
