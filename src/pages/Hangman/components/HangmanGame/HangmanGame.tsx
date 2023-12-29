import "./HangmanGame.css";
import Modal from "../../../../components/Modal/Modal";
import useGetDefinition from "../../../../helpers/getDefinition";
import HangmanDrawing from "../HangmanDrawing/HangmanDrawing";
import Keyboard from "../Keyboard/Keyboard";
import Hint from "../Hint/Hint";
import useModal from "../../hooks/useModal";
import useHangmanGame from "../../hooks/useHangmanGame";
import useHint from "../../hooks/useHint";

const TOTAL_OF_INCORRECT_GUESSES = 7;

type HangmanGameProps = {
  word: string;
};

const HangmanGame: React.FC<HangmanGameProps> = () => {
  const wordToGuess = "chubby".split("");
  const { isModalOpen, modalText, closeModal, openModal } = useModal();

  const onGameWon = () => {
    openModal("you won :)");
  };

  const onGameLost = () => {
    openModal("you lost :(");
  };

  const { incorrectGuesses, guessedLetters, updateGuessedLetters } =
    useHangmanGame(wordToGuess, onGameWon, onGameLost);

  const displayWord = wordToGuess.map((_, index) => (
    <span key={index} className="guessing-word__char">
      {guessedLetters[index] || "_"}
    </span>
  ));

  const disableButton = (button: HTMLButtonElement) => {
    const letterToCheck = button.innerText.toLowerCase();

    button.disabled = true;

    if (wordToGuess.includes(letterToCheck)) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  };

  const letterClickHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
    const button = event.target as HTMLButtonElement;
    const letterClicked = button.innerText.toLowerCase();

    disableButton(button);
    updateGuessedLetters(letterClicked);
  };

  const definitions = useGetDefinition("chubby", "adjective");

  const {
    showDefinition,
    setShowDefinition,
    showExample,
    setShowExample,
    currentDefinition,
    currentExample,
    showHint,
  } = useHint(definitions);

  const displayDefinition = () => {
    showHint(setShowDefinition);
  };

  const displayExample = () => {
    showHint(setShowExample);
  };

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
            label="Definition"
            content={currentDefinition}
            show={showDefinition}
            onClick={displayDefinition}
          />
          <Hint
            label="Example"
            content={currentExample}
            show={showExample}
            onClick={displayExample}
          />
          <div className="incorrect-guesses">
            {incorrectGuesses} / {TOTAL_OF_INCORRECT_GUESSES}
          </div>
          <Keyboard clickHandler={letterClickHandler} />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalText}
      </Modal>
    </>
  );
};

export default HangmanGame;
