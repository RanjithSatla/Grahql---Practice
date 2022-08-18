// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CharacterList from "./pages/CharactersList";
import Character from "./pages/Character";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route strict exact path="/" element={<CharacterList />} />
          <Route strict exact path="/:id" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
