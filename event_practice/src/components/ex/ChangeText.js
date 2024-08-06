import React, { useState } from "react";

function ChangeText() {
  const [button, setButton] = useState(true);

  const onClickBtn = () => {
    setButton(!button);
  };

  return (
    <>
      <button onClick={onClickBtn}>{button ? "사라져라" : "보여라"}</button>
      {button && <h1>안녕하세요</h1>}
    </>
  );
}

export default ChangeText;
