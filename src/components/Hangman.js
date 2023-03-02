import words from "../data/words";
import { useState, useEffect } from "react";

import GameTitle from "./GameTitle";
import Figure from "./Figure";
import WrongLetter from "./WrongLetter";
import Word from "./Word";
import Popup from "./Popup";
import Notification from "./Notification";

import { showNotification as show } from "../utils/util";

let selectedWord = words[Math.floor(Math.random() * words.length)];

const Hangman = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  const playAgain = () => {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    selectedWord = words[Math.floor(Math.random() * words.length)];
  };

  return (
    <>
      <GameTitle />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetter wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
};

export default Hangman;
