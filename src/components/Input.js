import "./Input.css";

export default function Input({ defaultValue, onChange } = {}) {
  return (
    <input type="text" defaultValue={defaultValue} className="letter input" />
  );
}
