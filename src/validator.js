import { CLUES } from "./constants.js";

export function getClue({ answer, guess } = {}) {
  const upperAnswer = answer.toUpperCase();
  const upperGuess = guess.toUpperCase();
  return Array.from(upperGuess, (ch, idx) => ({
    letter: ch,
    clue:
      upperAnswer[idx] === ch
        ? CLUES.CORRECT
        : upperAnswer.indexOf(ch) > -1
        ? CLUES.IN_WORD
        : CLUES.NOT_IN_WORD
  }));
}
