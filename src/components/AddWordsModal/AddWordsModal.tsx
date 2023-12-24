import { useRef } from "react";
import Button from "../Button/Button";
import Modal, { BaseModalProps } from "../Modal/Modal";

type AddWordsModalProps = BaseModalProps & {
  words: string;
  setWords: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (event: React.FormEvent) => void;
};

const AddWordsModal: React.FC<AddWordsModalProps> = ({
  words,
  setWords,
  isOpen,
  onClose,
  handleSubmit,
}) => {

  const inputRef = useRef<HTMLInputElement | null>(null);

  if (isOpen) {
    inputRef.current?.focus();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="modal__title">Add a few words to practice</h1>
      <form className="modal__form" onSubmit={handleSubmit}>
        <input
          className="modal__input"
          type="text"
          value={words}
          onChange={(event) => setWords(event.target.value)}
          ref={inputRef}
        />
        <Button type="submit" />
      </form>
    </Modal>
  );
};

export default AddWordsModal;
