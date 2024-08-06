import React, { useState } from "react";

function Color() {
  const [color, setColor] = useState({ color: "black" });
  const [text, setText] = useState("검정색 글씨");

  let changeRed = () => {
    setColor({ color: "red" });
    setText("빨간색 글씨");
  };

  let changeBlue = () => {
    setColor({ color: "blue" });
    setText("파란색 글씨");
  };
  return (
    <div>
      <h1 style={color}>{text}</h1>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </div>
  );
}

export default Color;
