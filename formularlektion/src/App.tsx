import React from "react";
import "./App.css";
import FormHandling from "./components/FormHandling";
import FormHandlingValidation from "./components/FormHandlingValidation";
import Inline from "./components/Inline";
import StyledComponents from "./components/StyledComponents";

function App() {
  return (
    <div className="App">
      hejsan
      <FormHandling />
      <FormHandlingValidation />
      <Inline />
      <StyledComponents />
    </div>
  );
}

export default App;
