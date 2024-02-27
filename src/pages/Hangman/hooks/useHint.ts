import { useState } from "react";

type Definition = {
  definition: string;
  examples: string[];
};

const useHint = (definitions: Definition[]) => {
  const [currentDefinition, setCurrentDefinition] = useState<string | null>(
    null
  );
  const [currentExample, setCurrentExample] = useState<string | null>(null);
  const [showDefinition, setShowDefinition] = useState(false);
  const [showExample, setShowExample] = useState(false);

  const showHint = (setter: (value: boolean) => void) => {
    if (definitions) {
      const { definition, examples } = definitions[0];
      setCurrentDefinition(definition);
      setCurrentExample(examples[0]);
      setter(true);
    }
  };

  return {
    showDefinition,
    setShowDefinition,
    showExample,
    setShowExample,
    currentDefinition,
    currentExample,
    showHint,
  };
};

export default useHint;
