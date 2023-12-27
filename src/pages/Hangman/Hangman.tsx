import { useEffect, useState } from "react";
import "./Hangman.css";
import Modal from "../../components/Modal/Modal";
import useGetDefinition from "../../helpers/getDefinition";
import Button from "../../components/Button/Button";
import HangmanDrawing from "./HangmanDrawing";

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

  const definitions = useGetDefinition("chubby", "adjective");
  const [currentDefinition, setCurrentDefinition] = useState(null);
  const [currentExample, setCurrentExample] = useState(null);
  const [showDefinition, setShowDefinition] = useState(false);
  const [showExample, setShowExample] = useState(false);

  const showDefinitionHandle = () => {
    if (definitions) {
      setCurrentDefinition(definitions[0].definition);
      const example = definitions[0].example.replace("chubby", "______");
      setCurrentExample(example);
      setShowDefinition(true);
    }
  };

  const showExampleHandle = () => {
    if (definitions) {
      setCurrentDefinition(definitions[0].definition);
      const example = definitions[0].example.replace("chubby", "______");
      setCurrentExample(example);
      setShowExample(true);
    }
  };

  return (
    <>
      <div className="hangman-wrapper">
        <div className="hangman-wrapper__left">
          <div className="hangman-drawing">
            <HangmanDrawing />
          </div>
        </div>
        <div className="hangman-wrapper__right">
          <div className="guessing-word">{displayWord}</div>
          <div className="definition">
            <p className="definition__label">Definition:</p>
            {showDefinition ? (
              <p className="definition__text">{currentDefinition}</p>
            ) : (
              <Button type="show" handleClick={showDefinitionHandle} />
            )}
          </div>
          <div className="example">
            <p className="example__label">Example:</p>
            {showExample ? (
              <p className="example__text">{currentExample}</p>
            ) : (
              <Button type="show" handleClick={showExampleHandle} />
            )}
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
