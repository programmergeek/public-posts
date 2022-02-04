import React from "react";
import "./App.css";
import { MiniNavBar } from "./Components";
import { Home } from "@styled-icons/entypo/Home";
import { AddSquareMultiple } from "@styled-icons/fluentui-system-filled/AddSquareMultiple";
function App() {
  return (
    <div className="App">
      <MiniNavBar
        iconsAndLabels={[
          {
            icon: <Home />,
            label: "Home",
          },
          {
            icon: <AddSquareMultiple />,
            label: "Create",
          },
        ]}
      />
    </div>
  );
}

export default App;
