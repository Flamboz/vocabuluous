import { useState } from "react";

type Definition = {
  definition: string;
  example: string;
};

const useHint = (definitions: Definition[]) => {
  const [currentDefinition, setCurrentDefinition] = useState<string | null>(null);
  const [currentExample, setCurrentExample] = useState<string | null>(null);
  const [showDefinition, setShowDefinition] = useState(false);
  const [showExample, setShowExample] = useState(false);

  const showHint = (setter: (value: boolean) => void) => {
    if (definitions) {
      const firstDefinition = definitions[0] as {
        definition: string;
        example: string;
      };
      setCurrentDefinition(firstDefinition.definition);
      const example = firstDefinition.example.replace("chubby", "______");
      setCurrentExample(example);
      setter(true);
    }
  };

  return {showDefinition, setShowDefinition, showExample, setShowExample, currentDefinition, currentExample, showHint} 
}

export default useHint