import Modal, { BaseModalProps } from "../Modal/Modal";

type SeeWordsModalProps = BaseModalProps & {
  words: string;
};

const SeeWordsModal: React.FC<SeeWordsModalProps> = ({
  words,
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="modal__title">Here are the words you added</h1>
      <p> {words}</p>
    </Modal>
  );
};

export default SeeWordsModal;
