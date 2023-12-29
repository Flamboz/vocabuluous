import Button from "../../../../components/Button/Button";
import "./Hint.css";

type HintProps = {
  label: string;
  content: string | null;
  show: boolean;
  onClick: () => void;
};

const Hint: React.FC<HintProps> = ({ label, content, show, onClick }) => {
  return (
    <div className="hint hint--definition">
      <p className="hint__label">{label}</p>
      {show ? (
        <p className="hint__text">{content}</p>
      ) : (
        <Button type="show" handleClick={onClick} />
      )}
    </div>
  );
};

export default Hint;
