import React from "react";
import "./App.css";
import {
  LabeledIconButton,
  PrimaryButton,
  SecondaryButton,
} from "./Components";
import { Home } from "@styled-icons/entypo/Home";
function App() {
  return (
    <div className="App">
      <PrimaryButton>Read</PrimaryButton>
      <SecondaryButton>Sparta</SecondaryButton>
      <LabeledIconButton label="Home">
        <Home />
      </LabeledIconButton>
    </div>
  );
}

export default App;
