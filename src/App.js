import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Setter from "./components/setter";

function App() {
  const [winnerValue, setWinnerValue] = React.useState("");
  console.log(winnerValue, "from app.js");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main winnerValue={winnerValue} />} />

        <Route
          path="/setter"
          element={<Setter setWinnerValue={setWinnerValue} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
