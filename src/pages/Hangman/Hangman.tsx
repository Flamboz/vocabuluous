import { useEffect, useState } from "react";
import "./Hangman.css";
import Modal from "../../components/Modal/Modal";

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const totalGuesses = 8;

const Hangman = () => {
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  const wordToQuess = "chubby".split("");

  const [guessedLetters, setGuessedLetters] = useState(
    Array(wordToQuess.length).fill("")
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const [isGameOver, setIsGameOver] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const letterElements = letters.map((letter) => (
    <button
      className="letter"
      key={letter}
      onClick={(event) => letterClickHandler(event)}
    >
      {letter}
    </button>
  ));

  const displayWord = wordToQuess.map((letter, index) => (
    <span key={index} className="guessing-word__char">
      {guessedLetters[index] || "_"}
    </span>
  ));

  const letterClickHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
    const button = event.target as HTMLButtonElement;
    const letterToCheck = button.innerText.toLowerCase();
    const updatedLetters = [...guessedLetters];
    let foundLetter = false;
    button.disabled = true;

    wordToQuess.forEach((currentLetter, index) => {
      if (currentLetter === letterToCheck) {
        button.classList.add("correct");
        updatedLetters[index] = currentLetter;
        foundLetter = true;
      }
      setGuessedLetters(updatedLetters);
    });

    if (!foundLetter) {
      setIncorrectGuesses(incorrectGuesses + 1);
      button.classList.add("incorrect");
    }
  };

  useEffect(() => {
    if (incorrectGuesses === totalGuesses) {
      setTimeout(() => {
        setModalText("you lost :(");
        setIsModalOpen(true);
      }, 0);
    }
  }, [incorrectGuesses]);

  useEffect(() => {
    if (wordToQuess.toString() === guessedLetters.toString() && !isGameOver) {
      setModalText("you won :)");
      setIsModalOpen(true);
      setIsGameOver(true);
    }
  }, [guessedLetters, wordToQuess, isGameOver]);

  return (
    <>
      <div className="hangman-wrapper">
        <div className="hangman-wrapper__left">
          <div className="hangman-visual">hangman game</div>
        </div>
        <div className="hangman-wrapper__right">
          <div className="guessing-word">{displayWord}</div>
          <div className="definition">
            Definition: fat in a pleasant and attractive way
          </div>
          <div className="example">
            Example: Look at the baby's _______ little legs.
          </div>
          <div className="incorrect-guesses">
            {incorrectGuesses} / {totalGuesses}
          </div>
          <div className="letters">{letterElements}</div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalText}
      </Modal>
    </>
  );
};

export default Hangman;
