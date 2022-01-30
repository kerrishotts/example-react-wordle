import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import AboutPage from "./routes/About";
import GamePage from "./routes/Game";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<GamePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
  rootElement
);
