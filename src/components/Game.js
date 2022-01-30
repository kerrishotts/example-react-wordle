import Guess from "./Guess.js";
import Clue from "./Clue.js";

import { getClue } from "../validator.js";

import { useSharedGameState } from "../sharedGameState";

const winningStrings = [
  /* 0          */ "",
  /* 1 attempt  */ "Incredible!",
  /* 2 attempts */ "Fantastic!",
  /* 3 attempts */ "Well done",
  /* 4 attempts */ "Good job",
  /* 5 attempts */ "Phew!",
  /* 6 attempts */ "Just barely!"
];

export default function Game() {
  const { state, addGuess } = useSharedGameState();

  const clues = state.guesses.map((guess) =>
    getClue({ answer: state.answer, guess })
  );
  const won = state.guesses[state.guesses.length - 1] === state.answer;

  return (
    <div className="game">
      {clues.map((clue, idx) => (
        <Clue guessNumber={idx + 1} clue={clue} key={idx} />
      ))}
      {clues.length <= 5
        ? !won && (
            <Guess
              guess=""
              guessNumber={clues.length + 1}
              onSubmit={addGuess}
            />
          )
        : !won && "Oh no!"}
      {won ? winningStrings[clues.length] : ""}
    </div>
  );
}
