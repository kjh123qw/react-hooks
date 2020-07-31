import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const useClick = (onClick) => {
  // if (typeof onClick !== "function") {
  //   return;
  // }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

function App() {
  // const input = useRef();
  // setTimeout(() => input.current.focus(), 3000);
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
      {/* <input ref={input} placeholder="la" /> */}
    </div>
  );
}

export default App;
