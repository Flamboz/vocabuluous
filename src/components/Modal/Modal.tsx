import { PropsWithChildren, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

export type BaseModalProps = PropsWithChildren & {
  isOpen: boolean;
  onClose: () => void;
  proceedToNextWord?: () => void;
};

const Modal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  proceedToNextWord,
  children,
}) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleModalClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleBackdropClick = (event: MouseEvent) => {
    const modalElement = modalRef.current;
    if (modalElement && event.target === modalElement) {
      handleModalClose();
    }
  };

  const handleNextWordClick = () => {
    if (proceedToNextWord) {
      handleModalClose();
      proceedToNextWord();
    }
  };

  const toggleModal = (isOpen: boolean) => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    if (isOpen) {
      modalElement.showModal();
      modalElement.addEventListener("click", handleBackdropClick);
    } else {
      modalElement.close();
      modalElement.removeEventListener("click", handleBackdropClick);
    }
  };

  const handleBackHome = () => {
    handleModalClose();
    navigate("/");
  };

  useEffect(() => {
    toggleModal(isOpen);
    return () => {
      toggleModal(false);
    };
  }, [isOpen]);

  return (
    <dialog className="modal" ref={modalRef}>
      <button
        className="modal__button modal__button--home"
        onClick={handleBackHome}
      >
        <svg fill="#000000" height="1em" width="1em" viewBox="0 0 330 330">
          <g id="SVGRepo_iconCarrier">
            <path
              id="XMLID_92_"
              d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"
            ></path>
          </g>
        </svg>
        <span className="modal__button-text">Home</span>
      </button>
      <button
        className="modal__button modal__button--close"
        onClick={handleModalClose}
      >
        <svg fill="none" viewBox="0 0 24 24" height="1.2em" width="1.2em">
          <path
            fill="currentColor"
            d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
          />
        </svg>
      </button>
      <div className="modal__text">{children}</div>
      {proceedToNextWord && <button
        className="modal__button modal__button--next-word"
        onClick={handleNextWordClick}
      >
        <span className="modal__button-text">Next word</span>
        <svg fill="#000000" height="1em" width="1em" viewBox="0 0 330 330">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
            ></path>
          </g>
        </svg>
      </button>}
    </dialog>
  );
};

export default Modal;
