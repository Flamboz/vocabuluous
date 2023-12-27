import "./Button.css";

type ButtonProps = {
  type: "add" | "see" | "delete" | "submit" | "show";
  handleClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ type, handleClick }) => {
  const buttonClassName = `button button--${type}`;
  const buttonType = type === "submit" ? "submit" : "button";

  return (
    <button type={buttonType} className={buttonClassName} onClick={handleClick}>
      {type}
    </button>
  );
};

export default Button;
