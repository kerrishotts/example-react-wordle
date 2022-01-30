import { useState, useCallback } from "react";
import { useBetween } from "use-between";

import { words } from "./wordlist.js";

const useGameState = () => {
  const [state, setState] = useState({
    guesses: [],
    answer: words[Math.floor(Math.random() * words.length)]
  });

  const addGuess = useCallback(
    (guess) =>
      setState((state) => ({
        guesses: [...state.guesses, guess],
        answer: state.answer
      })),
    []
  );

  return {
    state,
    addGuess
  };
};

export const useSharedGameState = () => useBetween(useGameState);
