import Button from "../Button/Button";
import Modal, { BaseModalProps } from "../Modal/Modal";

type DeleteWordsModal = BaseModalProps & {
  setWords: React.Dispatch<React.SetStateAction<string>>;
};

const DeleteWordsModal: React.FC<DeleteWordsModal> = ({
  isOpen,
  setWords,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="modal__title">Are you sure you want to delete them?</h1>
      <Button
        type="delete"
        handleClick={() => {
          setWords("");
          onClose();
        }}
      ></Button>
    </Modal>
  );
};

export default DeleteWordsModal;
