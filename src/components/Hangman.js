import "./Hangman.css";

const Hangman = () => {
  return (
    <div>
      <h1>Hangman</h1>
      <p>Please enter animal name</p>

      <div
        style={{
          width: "70%",
          margin: "0 auto",
          padding: "80px",
          border: "1px solid #fff",
        }}
      >
        <div
          style={{
            width: "50%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div>
            <svg
              width={250}
              height={250}
              style={{
                fill: "transparent",
                stroke: "#fff",
                strokeWidth: "4px",
              }}
            >
              <line x1="50" y1="20" x2="130" y2="20" />
              <line x1="130" y1="20" x2="130" y2="50" />
              <line x1="50" y1="20" x2="50" y2="250" />
              <line x1="10" y1="250" x2="90" y2="250" />

              <circle cx={130} cy={70} r={20} className="item" />

              <line x1="130" y1="90" x2="130" y2="170" className="item" />

              <line x1="130" y1="120" x2="100" y2="100" className="item" />
              <line x1="130" y1="120" x2="160" y2="100" className="item" />

              <line x1="130" y1="170" x2="100" y2="190" className="item" />
              <line x1="130" y1="170" x2="160" y2="190" className="item" />
            </svg>
          </div>

          <div className="wrongLetters">
            <span>Wrong Letters : </span>
            <span>a,b,c</span>
          </div>
        </div>

        <div
          className="word"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px 0",
          }}
        >
          <div>d</div>
          <div>o</div>
          <div>g</div>
        </div>
      </div>
    </div>
  );
};

export default Hangman;
