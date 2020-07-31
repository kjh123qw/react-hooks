import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const useBeforeLeave = (onBefore) => {
  // if (typeof onBefore !== "function") {
  //   return;
  // }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave");
  }, []);
};

function App() {
  const begForeLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForeLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
