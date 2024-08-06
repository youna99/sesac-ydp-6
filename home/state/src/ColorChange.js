import React from "react";

export default function ColorChange(props) {
  return (
    <select onChange={props.color}>
      <option value="pink">분홍</option>
      <option value="red">빨강</option>
      <option value="orange">주황</option>
      <option value="yellow">노랑</option>
      <option value="green">초록</option>
      <option value="blue">파랑</option>
      <option value="violet">보라</option>
    </select>
  );
}
