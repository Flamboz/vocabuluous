import Button from "../components/Button/Button";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="wrapper">
      <div className="vocab">
        <p className="vocab__title">Vocab for today</p>
        <div className="vocab__buttons">
          <Button type="add" />
          <Button type="see" />
          <Button type="delete" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
