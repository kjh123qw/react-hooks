import React, { useState, useEffect, useRef } from "react";
import useAxios from "./useAxios";
import "./App.css";

function App() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts-proxy.now.sh/list_movies.json",
  });
  console.log(
    `Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`
  );
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;
