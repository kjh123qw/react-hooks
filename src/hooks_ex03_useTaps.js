import React, { useState } from "react";
import "./App.css";

const content = [
  {
    tab: "Section1",
    content: "I;m the content of the Section 1",
  },
  {
    tab: "Section2",
    content: "I;m the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  // if (!allTabs || !Array.isArray(allTabs)) {
  //   return;
  // }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changItem: setCurrentIndex,
  };
};

function App() {
  const { currentItem, changItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;
