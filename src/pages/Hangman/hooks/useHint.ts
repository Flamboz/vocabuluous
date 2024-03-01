import { useState } from "react";

const useHint = () => {
  const [currentItems, setCurrentItems] = useState<string[] | null>(null);

  const setItems = (item: string | null) => {
    if (item === null) return;
    
    setCurrentItems((prevItems) => {
      const updatedItems = prevItems ?? [];
      return [...updatedItems, item];
    });
  };

  return {
    currentItems,
    setItems,
  };
};

export default useHint;
