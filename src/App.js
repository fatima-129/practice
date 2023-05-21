import "./App.css";
import Home from "./Components/home/Home";
import BinaryToDecimal from "./Components/projects/BinaryToDecimal";
import BorderRadius from "./Components/projects/border-radius/BorderRaduis";
import BorderRaduis from "./Components/projects/border-radius/BorderRaduis";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/binary-to-decimal" element={<BinaryToDecimal />} />
          <Route path="/border-radius-preview" element={<BorderRadius />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
