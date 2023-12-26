import { PropsWithChildren, useEffect, useRef } from "react";
import "./Modal.css";

export type BaseModalProps = PropsWithChildren & {
  isOpen: boolean;
  onClose?: () => void;
};

const Modal: React.FC<BaseModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  console.log(isOpen);

  const handleModalClose = () => {
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isOpen]);

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
      {children}
    </dialog>
  );
};

export default Modal;