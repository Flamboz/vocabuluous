import "./Keyboard.css";

type KeyboardProps = {
  clickHandler: (event: React.MouseEvent<HTMLSpanElement>) => void;
};

const Keyboard: React.FC<KeyboardProps> = ({ clickHandler }) => {
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

  const letterElements = letters.map((letter) => (
    <button className="letter" key={letter} onClick={clickHandler}>
      {letter}
    </button>
  ));

  return <div className="letters">{letterElements}</div>;
};

export default Keyboard;
