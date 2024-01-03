import { useState } from "react";

type Definition = {
  definition: string;
  example: string;
};

const useHint = (definitions: Definition[], word: string) => {
  const [currentDefinition, setCurrentDefinition] = useState<string | null>(null);
  const [currentExample, setCurrentExample] = useState<string | null>(null);
  const [showDefinition, setShowDefinition] = useState(false);
  const [showExample, setShowExample] = useState(false);

  console.log(definitions.filter(def => def.example))

  const showHint = (setter: (value: boolean) => void) => {
    if (definitions) {
      const definitionWithExample = definitions.filter(def => def.example)[0] as {
        definition: string;
        example: string;
      };
      setCurrentDefinition(definitionWithExample.definition);
      const example = definitionWithExample.example.replace(word, "______");
      setCurrentExample(example);
      setter(true);
    }
  };

  return {showDefinition, setShowDefinition, showExample, setShowExample, currentDefinition, currentExample, showHint} 
}

export default useHint