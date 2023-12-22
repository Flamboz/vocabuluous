import Button from "../components/Button/Button";
import "./Homepage.css";
import Modal from "../components/Modal/Modal";
import { useState } from "react";

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"add" | "see" | "delete" | null>(
    null
  );
  const [words, setWords] = useState("");

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddButtonClick = () => {
    setIsModalOpen(true);
    setModalType("add");
  };

  const handleSeeButtonClick = () => {
    setIsModalOpen(true);
    setModalType("see");
  };

  const handleDeleteButtonClick = () => {
    setIsModalOpen(true);
    setModalType("delete");
  };

  return (
    <>
      <div className="wrapper">
        <div className="vocab">
          <p className="vocab__title">Vocab for today</p>
          <div className="vocab__buttons">
            <Button type="add" handleClick={handleAddButtonClick} />
            <Button type="see" handleClick={handleSeeButtonClick} />
            <Button type="delete" handleClick={handleDeleteButtonClick} />
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        words={words}
        setWords={setWords}
        modalType={modalType}
      />
    </>
  );
};

export default Homepage;
