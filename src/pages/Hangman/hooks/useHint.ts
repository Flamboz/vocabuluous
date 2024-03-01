import { useState } from "react";

type Definition = {
  definition: string;
  examples: string[];
};

const useHint = (definitions: Definition[]) => {
  const [showDefinition, setShowDefinition] = useState(false);
  const [showExamples, setShowExamples] = useState(false);

  const showHint = (setter: (value: boolean) => void) => {
    if (definitions) {
      setter(true);
    }
  };

  return {
    showDefinition,
    setShowDefinition,
    showExamples,
    setShowExamples,
    showHint,
  };
};

export default useHint;
