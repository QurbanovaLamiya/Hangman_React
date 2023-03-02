import PropTypes from "prop-types";

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, index) => (
        <span className="letter" key={index}>
          {correctLetters.includes(letter) && letter}
        </span>
      ))}
    </div>
  );
};

Word.propTypes = {
  selectedWord: PropTypes.string,
  correctLetters: PropTypes.array,
};

export default Word;
