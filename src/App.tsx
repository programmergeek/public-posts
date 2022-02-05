import React from "react";
import "./App.css";
import { FullNavBar, MiniNavBar } from "./Components";
function App() {
  return (
    <div className="App">
      <MiniNavBar />
      <FullNavBar />
    </div>
  );
}

export default App;
