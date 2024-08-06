import React, { useState } from "react";
import FruitList from "./FruitList";
import ColorChange from "./ColorChange";

function Select(props) {
  const [fruit, setFruit] = useState("watermelon");
  const [color, setColor] = useState("pink");
  const [bgc, setBgc] = useState("green");
  const [message, setMessage] = useState("안녕!");

  const getImageSrc = (fruit) => {
    switch (fruit) {
      case "watermelon":
        return "/img/수박.png";
      case "mango":
        return "/img/망고.png";
      case "peach":
        return "./img/복숭아.jpg";
      case "grape":
        return "/img/포도.jpg";
      default:
        return "";
    }
  };

  const handleFruit = (e) => {
    setFruit(e.target.value);
  };
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleBgc = (e) => {
    setBgc(e.target.value);
  };

  return (
    <div>
      <form>
        <label>과일 : </label>
        <FruitList fruit={(e) => handleFruit(e, setFruit)} />
        <label>배경색 : </label>
        <ColorChange color={(e) => handleBgc(e, setBgc)} />
        <label>글자색 : </label>
        <ColorChange color={(e) => handleColor(e, setColor)} />
        <label>내용 : </label>
        <input
          onChange={(e) => handleMessage(e, setMessage)}
          type="text"
          placeholder="내용을 입력하세요."
        />
      </form>
      <div>
        <img src={getImageSrc(fruit)} alt={fruit} style={{ width: "200px" }} />
        <h1 style={{ backgroundColor: bgc, color: color }}>{message}</h1>
      </div>
    </div>
  );
}
export default Select;
