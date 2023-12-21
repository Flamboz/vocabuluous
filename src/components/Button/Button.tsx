import './Button.css'

type ButtonProps = {
  type: "add" | "see" | "delete";
};

const Button: React.FC<ButtonProps> = ({ type }) => {
  const buttonClassName = `button button--${type}`;

  return <button className={buttonClassName}>{type}</button>;
};

export default Button;
