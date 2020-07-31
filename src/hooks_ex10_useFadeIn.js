import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

function App() {
  const fadeInH1 = useFadeIn(4, 2);
  const fadeInP = useFadeIn(4, 6);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalalalalala</p>
    </div>
  );
}

export default App;
