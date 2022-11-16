import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Setter from "./components/setter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/setter" element={<Setter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
