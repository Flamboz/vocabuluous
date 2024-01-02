import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import Modal, { BaseModalProps } from "../Modal/Modal";

type AddWordsModalProps = BaseModalProps & {
  words: string;
  setWords: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (event: React.FormEvent, submittedWords: string) => void;
};

const AddWordsModal: React.FC<AddWordsModalProps> = ({
  words,
  isOpen,
  onClose,
  handleSubmit,
}) => {
  const [modalWords, setModalWords] = useState(words);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="modal__title">Add a few words to practice</h1>
      <form
        className="modal__form"
        onSubmit={(event) => handleSubmit(event, modalWords)}
      >
        <input
          className="modal__input"
          type="text"
          value={modalWords}
          onChange={(event) => setModalWords(event.target.value)}
          ref={inputRef}
        />
        <Button type="submit" />
      </form>
    </Modal>
  );
};

export default AddWordsModal;
