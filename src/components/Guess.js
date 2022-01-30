import "./Guess.css";

import Input from "./Input.js";

function handleKeyPress(evt) {
  const target = evt.target;
  if (target.tagName !== "INPUT") return; /* non-input fields don't count */
  if (evt.key.length !== 1) return; /* don't want ENTER to register */
  evt.preventDefault(); /* comes after length check -- ENTER should still always submit */
  if (target.getAttribute("type") !== "submit")
    target.value = evt.key.toUpperCase();
  target.nextElementSibling && target.nextElementSibling.focus();
}

function handleKeyUp(evt) {
  const target = evt.target;
  if (target.tagName !== "INPUT") return;
  if (evt.key === "Backspace") {
    /* Handle backspace correctly */
    evt.preventDefault();
    if (target.getAttribute("type") !== "submit") target.value = "";
    target.previousElementSibling && target.previousElementSibling.focus();
  }
}

function handleSubmit(evt, cb) {
  const form = evt.target;
  const theRealGuess = Array.from(
    form.querySelectorAll("input[type=text]"),
    (el) => el.value
  )
    .join("")
    .trim();
  evt.preventDefault();
  if (theRealGuess.length !== 5) return;
  /* focus next line, if it appears */
  cb && cb(theRealGuess);
  setTimeout(() => {
    const firstTextElement = document.querySelector("input[type=text]");
    firstTextElement && firstTextElement.focus();
  }, 0);
  return false;
}

export default function Guess({ guessNumber = 1, guess, onSubmit } = {}) {
  const paddedGuess = (guess || "").padEnd(5, " ").toUpperCase();
  return (
    <form
      className="guess"
      onKeyPress={handleKeyPress}
      onKeyUp={handleKeyUp}
      onSubmit={(evt) => handleSubmit(evt, onSubmit)}
    >
      <div className="guessNumber">{guessNumber}.</div>
      {Array.from(paddedGuess).map((letter, idx) => (
        <Input value={letter} key={`${guessNumber}-${idx}`} />
      ))}
      <input type="submit" className="letter submit" value="⏎" />
    </form>
  );
}
