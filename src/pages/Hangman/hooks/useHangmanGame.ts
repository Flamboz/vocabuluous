import { useEffect, useState } from "react";
import getWordsFromLocalStorage from "../../../services/getWordsFromLocalStorage";

const TOTAL_OF_INCORRECT_GUESSES = 7;

const useHangmanGame = (onGameWon: () => void, onGameLost: () => void) => {
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const wordToGuess = getWordsFromLocalStorage();

  const [guessedLetters, setGuessedLetters] = useState(
    Array(wordToGuess.length).fill("")
  );

  const [isGameOver, setIsGameOver] = useState(false);

  const updateIncorrectGuesses = (letterClicked: string) => {
    if (!wordToGuess.includes(letterClicked)) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  const updateGuessedLetters = (letterClicked: string) => {
    const updatedLetters = guessedLetters.map((letter, index) => 
      wordToGuess[index] === letterClicked ? letterClicked : letter
    );
    setGuessedLetters(updatedLetters);
    updateIncorrectGuesses(letterClicked);
  };

  useEffect(() => {
    if (incorrectGuesses === TOTAL_OF_INCORRECT_GUESSES && !isGameOver) {
      setTimeout(() => {
        onGameLost()
        setIsGameOver(true);
      }, 0);
    }
  }, [incorrectGuesses, isGameOver, onGameLost]);

  useEffect(() => {
    if (!!wordToGuess.toString() && wordToGuess.toString() === guessedLetters.toString() && !isGameOver) {
      onGameWon()
      setIsGameOver(true);
    }
  }, [guessedLetters, wordToGuess, isGameOver, onGameWon]);

  return { incorrectGuesses, guessedLetters, updateGuessedLetters };
};

export default useHangmanGame;
