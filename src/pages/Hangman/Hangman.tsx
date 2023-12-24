import "./Hangman.css";

const Hangman = () => {
  return (
    <div className="hangman-wrapper">
      <div className="hangman-wrapper__left">
        <div className="hangman-visual">hangman game</div>
      </div>
      <div className="hangman-wrapper__right">
        <div className="blanks">_ _ _ _ _ _ _</div>
        <div className="hint">fat in a pleasant and attractive way</div>
        <div className="example">Look at the baby's _______ little legs.</div>
        <div className="incorrect-guesses">0/6</div>
        <div className="alphabet"></div>
      </div>
    </div>
  );
};

export default Hangman;
