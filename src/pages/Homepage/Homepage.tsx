import Button from "../../components/Button/Button";
import "./Homepage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddWordsModal from "../../components/AddWordsModal/AddWordsModal";
import SeeWordsModal from "../../components/SeeWordsModal/SeeWordsModal";
import DeleteWordsModal from "../../components/DeleteWordsModal/DeleteWordsModal";

const Homepage = () => {
  const [openedModalType, setOpenedModalType] = useState<
    "add" | "see" | "delete" | null
  >(null);

  const [words, setWords] = useState("");

  const handleCloseModal = () => {
    setOpenedModalType(null);
  };

  const handleAddButtonClick = () => {
    setOpenedModalType("add");
  };

  const handleSeeButtonClick = () => {
    setOpenedModalType("see");
  };

  const handleDeleteButtonClick = () => {
    setOpenedModalType("delete");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleCloseModal();
  };

  return (
    <>
      <div className="homepage-wrapper">
        <div className="homepage__vocab">
          <p className="vocab__title">Vocab for today</p>
          <div className="vocab__buttons">
            <Button type="add" handleClick={handleAddButtonClick} />
            <Button type="see" handleClick={handleSeeButtonClick} />
            <Button type="delete" handleClick={handleDeleteButtonClick} />
          </div>
        </div>
        <div className="homepage__games">
          <div className="game">
            <Link to="/hangman">Hangman</Link>
          </div>
        </div>
      </div>
      <AddWordsModal
        isOpen={openedModalType === "add"}
        onClose={handleCloseModal}
        words={words}
        setWords={setWords}
        handleSubmit={handleSubmit}
      />
      <SeeWordsModal
        isOpen={openedModalType === "see"}
        onClose={handleCloseModal}
        words={words}
      />
      <DeleteWordsModal
        isOpen={openedModalType === "delete"}
        onClose={handleCloseModal}
        setWords={setWords}
      />
    </>
  );
};

export default Homepage;
