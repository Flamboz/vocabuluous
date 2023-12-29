import React from "react";
import HangmanBody from "./HangmanBody";
import HangmanGallows from "./HangmanGallows";

type HangmanDrawingProps = {
  numberOfIncorrectGuesses: number;
};

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({
  numberOfIncorrectGuesses,
}) => {
  return (
    <div style={{ position: "relative" }}>
      <HangmanBody numberOfIncorrectGuesses={numberOfIncorrectGuesses} />
      <HangmanGallows />
    </div>
  );
};

export default HangmanDrawing;
