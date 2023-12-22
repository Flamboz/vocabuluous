import { useEffect, useRef, useState } from "react";
import "./Modal.css";
import Button from "../Button/Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  words: string;
  setWords: React.Dispatch<React.SetStateAction<string>>;
  modalType: "add" | "see" | "delete" | null;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  words,
  setWords,
  modalType,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const modalRef = useRef<HTMLDialogElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  let modalChidlren = null;

  const handleModalClose = () => {
    if (onClose) {
      onClose();
    }

    setIsModalOpen(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleModalClose();
  };

  if (isModalOpen) {
    inputRef.current?.focus();
  }

  if (modalType === "add") {
    modalChidlren = (
      <>
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
      </>
    );
  }

  if (modalType === "see") {
    modalChidlren = (
      <>
        <h1 className="modal__title">Here are the words you added</h1>
        <p> {words}</p>
      </>
    );
  }

  if (modalType === "delete") {
    modalChidlren = (
      <>
        <h1 className="modal__title">Are you sure you want to delete them?</h1>
        <Button
          type="delete"
          handleClick={() => {
            setWords("");
            handleModalClose();
          }}
        ></Button>
      </>
    );
  }

  useEffect(() => {
    const modalElement = modalRef.current;
    setIsModalOpen(isOpen);

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen, isOpen]);

  return (
    <dialog className="modal" ref={modalRef}>
      <button className="close-button" onClick={handleModalClose}>
        <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
          <path
            fill="currentColor"
            d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
          />
        </svg>
      </button>
      {modalChidlren}
    </dialog>
  );
};

export default Modal;
