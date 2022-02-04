import React from "react";
import "./App.css";
import { MiniNavBar } from "./Components";
import { Home } from "@styled-icons/entypo/Home";
function App() {
  return (
    <div className="App">
      <MiniNavBar
        iconsAndLabels={[
          {
            icon: <Home />,
            label: "Home",
          },
        ]}
      />
    </div>
  );
}

export default App;
