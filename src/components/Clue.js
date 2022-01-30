import "./Clue.css";

import Letter from "./Letter.js";

export default function Clue({ clue, guessNumber = 1 } = {}) {
  return (
    <div className="clue">
      <div className="guessNumber">{guessNumber}.</div>
      {clue.map((clue, idx) => (
        <Letter letter={clue.letter} clue={clue.clue} key={idx} />
      ))}
    </div>
  );
}
