import React, { useState } from "react";
import './App.css'
import Calculator from "./components/Calculator";
import Convertor from "./components/Convertor";

function App() {
  const [showConvertor, setShowConvertor] = useState(false);
  const [toggle, setToggle] = useState(false)
  const switchHAndler = () => {
    setShowConvertor(!showConvertor);
    setToggle(!toggle)
  }
  return (
    <div className="wrapper">
      <button className="switchBtn" onClick={switchHAndler}>Switch to {toggle ? "Calculator" : "Convertor"}</button>
      {!showConvertor && <Calculator />}
      {showConvertor && <Convertor />}
    </div>
  );
}

export default App;
