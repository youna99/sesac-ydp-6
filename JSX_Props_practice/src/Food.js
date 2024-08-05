import React from "react";

const Food = (props) => {
  //   console.log(props);
  const { food } = props;

  return (
    <>
      <h2>
        내가 좋아하는 음식은 <span style={{ color: "red" }}>{food}</span>!!
      </h2>
    </>
  );
};

Food.defaultProps = {
  food: "수박",
};

export default Food;
