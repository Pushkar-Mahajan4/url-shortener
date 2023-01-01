import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/main-content/login-component/Login";
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
  return (
    <div className="App">
      <Navbar windowSize={windowSize} />
      <Login />
    </div>
  );
}

export default App;
