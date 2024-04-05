import "./HangmanGame.css";
import Modal from "../../../../components/Modal/Modal";
import useGetDefinitions from "../../hooks/useGetDefinitions";
import HangmanDrawing from "../HangmanDrawing/HangmanDrawing";
import Keyboard from "../Keyboard/Keyboard";
import Hint from "../Hint/Hint";
import useModal from "../../hooks/useModal";
import useHangmanGame from "../../hooks/useHangmanGame";
import useHint from "../../hooks/useHint";
import { useEffect, useState } from "react";
import getWordsFromLocalStorage from "../../../../services/getWordsFromLocalStorage";
import { useNavigate } from "react-router-dom";

const TOTAL_OF_INCORRECT_GUESSES = 7;

const HangmanGame = () => {
  const navigate = useNavigate();

  const { isModalOpen, modalText, closeModal, openModal } = useModal();

  const [words, setWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [lettersArrayOfCurrentWord, setLettersArrayOfCurrentWord] = useState<
    string[]
  >([]);

  useEffect(() => {
    const wordsFromLocalStorage = getWordsFromLocalStorage();
    setWords(wordsFromLocalStorage);
  }, []);

  useEffect(() => {
    setLettersArrayOfCurrentWord(words[currentWordIndex]?.split("") ?? []);
  }, [words, currentWordIndex]);

  const onGameWon = () => {
    openModal("you won :)");
  };

  const onGameLost = () => {
    openModal("you lost :(");
  };

  const onNoWordsLeft = () => {
    if (isNoWordsLeft) {
      openModal("No words left");
    }
  };

  const updateWordIndex = () => {
    setCurrentWordIndex(currentWordIndex + 1);
  };

  const isNoWordsLeft = currentWordIndex >= words.length - 1;

  const {
    incorrectGuesses,
    guessedLetters,
    updateGuessedLetters,
    updateIncorrectGuessesOnHintClick,
    isGameOver,
    proceedToNextWord,
  } = useHangmanGame(
    lettersArrayOfCurrentWord,
    onGameWon,
    onGameLost,
    updateWordIndex,
    onNoWordsLeft
  );

  const displayWord = lettersArrayOfCurrentWord?.map((_, index) => (
    <span key={index} className="guessing-word__char">
      {guessedLetters[index] || "_"}
    </span>
  ));

  const disableButton = (button: HTMLButtonElement) => {
    const letterToCheck = button.innerText.toLowerCase();

    button.disabled = true;

    if (lettersArrayOfCurrentWord?.includes(letterToCheck)) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  };

  const letterClickHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (isGameOver) return;

    const button = event.target as HTMLButtonElement;
    const letterClicked = button.innerText.toLowerCase();

    disableButton(button);
    updateGuessedLetters(letterClicked);
  };

  const { definitions } = useGetDefinitions(words[currentWordIndex]);

  const { currentItems, setItems } = useHint();

  return (
    <>
      <div className="hangman-wrapper">
        <div className="hangman-wrapper__left">
          <div className="hangman-drawing">
            <HangmanDrawing numberOfIncorrectGuesses={incorrectGuesses} />
          </div>
        </div>
        <div className="hangman-wrapper__right">
          <div className="guessing-word">{displayWord}</div>
          <Hint
            definitions={definitions}
            currentItems={currentItems}
            setItems={setItems}
            updateIncorrectGuessesOnHintClick={
              updateIncorrectGuessesOnHintClick
            }
          />
          <div className="incorrect-guesses">
            {incorrectGuesses} / {TOTAL_OF_INCORRECT_GUESSES}
          </div>
          <Keyboard clickHandler={letterClickHandler} />
        </div>
      </div>
      <button className="button button--home" onClick={() => navigate("/")}>
        <svg fill="#ffffff" height="0.7em" width="0.7em" viewBox="0 0 330 330">
          <g id="SVGRepo_iconCarrier">
            <path
              id="XMLID_92_"
              d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"
            ></path>
          </g>
        </svg>
        <span className="button--home-text">Home</span>
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        proceedToNextWord={proceedToNextWord}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default HangmanGame;
