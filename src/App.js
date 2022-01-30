import "./styles.css";

import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>REACTLE</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}
