import React from "react";
import img from "./img/img.jpg";
import "./BookImg.css";

function BookImg(props) {
  // console.log(props);
  const { title, author, price, type } = props;

  return (
    <>
      <div className="container">
        <h1 className="header">이번주 베스트셀러</h1>
        <img src={img} alt="bookImg" />
        <h2>{title}</h2>
        <p>저자: {author}</p>
        <p>판매가: {price}원</p>
        <p>구분: {type}</p>
      </div>
    </>
  );
}

export default BookImg;
