import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Hangman from "./pages/Hangman/Hangman";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/hangman" element={<Hangman />} />
    </Routes>
  );
}

export default App;
