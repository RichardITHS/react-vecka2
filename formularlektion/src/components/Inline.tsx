import React from "react";
import "../App.css";

const heading: React.CSSProperties = {
  fontSize: "72px",
  color: "red",
};

const Inline = () => {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
      <p className="blue">jag är stylad på vanligt vis</p>
    </div>
  );
};

export default Inline;
