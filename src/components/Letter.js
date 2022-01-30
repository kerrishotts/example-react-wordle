import "./Letter.css";
import { CLUES } from "../constants.js";

export default function Letter({ letter = " ", clue } = {}) {
  return <div className={`letter ${clue}`}>{letter}</div>;
}
