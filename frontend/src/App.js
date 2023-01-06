import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/main-content/login-component/Login";
import About from "./components/main-content/about-component/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [windowSize, setWindowSize] = useState(
    window.matchMedia("(min-width: 768px)")
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setWindowSize(e.matches));
  }, []);

  const Application = () => {
    return (
      <div className="App">
        <Login />
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Navbar windowSize={windowSize} />
      <Routes>
        <Route path="/" element={<Application />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
