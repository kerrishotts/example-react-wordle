import Clue from "../components/Clue";
import Letter from "../components/Letter";

import { CLUES } from "../constants.js";
import { getClue } from "../validator.js";

export default function AboutPage() {
  const clue = getClue({ answer: "MISTY", guess: "DAISY" });

  return (
    <div style={{ maxWidth: "40em" }}>
      <h2>How to play</h2>
      <p>
        You have six tries to guess a five letter word. After each guess, you're
        provided hints to help you guess the word.
      </p>
      <div className="guess">
        <Letter letter="R" clue={CLUES.NOT_IN_WORD} />
        <span>The letter is not in the word</span>
      </div>
      <div className="guess">
        <Letter letter="A" clue={CLUES.IN_WORD} />
        <span>The letter is in the word, but not in this position</span>
      </div>
      <div className="guess">
        <Letter letter="Y" clue={CLUES.CORRECT} />
        <span>The letter is in the word in the correct position</span>
      </div>
      <p>
        For example, if you guessed "DAISY", you might receive the following
        clues:
      </p>
      <Clue guess="DAISY" clue={clue} />
      <p>You can infer the following:</p>
      <ul>
        <li>
          The "Y" is in the correct place, and so the word must end in "Y".
        </li>
        <li>
          "I" and "S" both appear <i>in the word</i>, but at different places.
        </li>
        <li>
          The letters "D" and "A" do not appear at all in the word, and so it's
          pointless to continue using these letters in your guesses.
        </li>
      </ul>
      <p>(In this example, the actual word is "MISTY")</p>
    </div>
  );
}
