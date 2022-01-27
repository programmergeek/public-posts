import React from "react";
import "./App.css";
import {
  IconButton,
  IconButtonLabel,
  PrimaryButton,
  SecondaryButton,
} from "./Components";
import { Home } from "@styled-icons/entypo/Home";
function App() {
  return (
    <div className="App">
      <PrimaryButton>Read</PrimaryButton>
      <SecondaryButton>Sparta</SecondaryButton>
      <IconButton>
        <Home />
      </IconButton>
      <IconButtonLabel text="Sparta" />
    </div>
  );
}

export default App;
