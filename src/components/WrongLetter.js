const WrongLetter = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong Letters</p>}
        {wrongLetters.map((letter, index) => (
          <span key={index} className="wrong-letters">
            {letter},
          </span>
        ))}
      </div>
    </div>
  );
};

export default WrongLetter;
