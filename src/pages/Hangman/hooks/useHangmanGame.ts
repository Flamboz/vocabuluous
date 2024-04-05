import { useEffect, useState } from "react";

const TOTAL_OF_INCORRECT_GUESSES = 7;

const useHangmanGame = (
  lettersArrayOfCurrentWord: string[],
  onGameWon: () => void,
  onGameLost: () => void,
  updateWordIndex: () => void,
  onNoWordsLeft: () => void
) => {
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const [isGameOver, setIsGameOver] = useState(false);

  const updateIncorrectGuessesOnLetterClick = (letterClicked: string) => {
    if (!lettersArrayOfCurrentWord.includes(letterClicked)) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  const updateIncorrectGuessesOnHintClick = () => {
    if (isGameOver) return;

    setIncorrectGuesses(incorrectGuesses + 1);
  };

  const updateGuessedLetters = (letterClicked: string) => {
    const letters =
      guessedLetters.length > 0
        ? guessedLetters
        : Array(lettersArrayOfCurrentWord.length).fill("");

    const updatedLetters = letters.map((letter, index) => {
      return lettersArrayOfCurrentWord[index] === letterClicked
        ? letterClicked
        : letter;
    });
    setGuessedLetters(updatedLetters);
    updateIncorrectGuessesOnLetterClick(letterClicked);
  };

  useEffect(() => {
    if (incorrectGuesses === TOTAL_OF_INCORRECT_GUESSES && !isGameOver) {
      setTimeout(() => {
        onGameLost();
        setIsGameOver(true);
      }, 0);
    }
  }, [incorrectGuesses, isGameOver, onGameLost]);

  useEffect(() => {
    if (
      !!lettersArrayOfCurrentWord.toString() &&
      lettersArrayOfCurrentWord.toString() === guessedLetters.toString() &&
      !isGameOver
    ) {
      onGameWon();
      setIsGameOver(true);
    }
  }, [guessedLetters, lettersArrayOfCurrentWord, isGameOver, onGameWon]);

  const proceedToNextWord = () => {
    onNoWordsLeft();

    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setIsGameOver(false);
    updateWordIndex();

    const buttons = document.querySelectorAll(
      ".letter"
    ) as NodeListOf<HTMLButtonElement>;

    buttons.forEach((button) => {
      button.classList.remove("correct", "incorrect");
      button.disabled = false;
    });
  };

  return {
    incorrectGuesses,
    guessedLetters,
    updateGuessedLetters,
    updateIncorrectGuessesOnHintClick,
    isGameOver,
    proceedToNextWord,
  };
};

export default useHangmanGame;
