import React from "react";

export default function FruitList(props) {
  return (
    <select onChange={props.fruit}>
      <option value="watermelon">수박</option>
      <option value="mango">망고</option>
      <option value="peach">복숭아</option>
      <option value="grape">포도</option>
    </select>
  );
}
