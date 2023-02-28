import words from "../data/words";
import { useState, useEffect } from "react";

import GameTitle from "./GameTitle";
import Figure from "./Figure";
import WrongLetter from "./WrongLetter";
import Word from "./Word";
import Popup from "./Popup";
import Notification from "./Notification";

let selectedWord = words[Math.floor(Math.random() * words.length)];

const Hangman = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  return (
    <>
      <GameTitle />
      <div className="game-container">
        <Figure />
        <WrongLetter />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup />
      <Notification />
    </>
  );
};

export default Hangman;
