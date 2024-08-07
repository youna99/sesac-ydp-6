import React, { useState } from "react";

function MapPractice() {
  const [text, setText] = useState([
    {
      id: 1,
      name: "코디",
      email: "codi@gmail.com",
    },
    {
      id: 2,
      name: "윤소희",
      email: "yoonsohee@gmail.com",
    },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const addText = () => {
    const newText = text.concat({
      id: text.length + 1,
      name: inputName,
      email: inputEmail,
    });
    setText(newText);
    setInputName("");
    setInputEmail("");
  };

  const handleKeyDown = (e) => {
    // console.log("e >>", e);
    if (e.keyCode === 13) {
      addText();
    }
  };

  const deleteText = (valueID) => {
    const newText = text.filter((text) => text.id !== valueID);

    setText(newText);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={addText}>등록</button>
      {text.map((value) => (
        <h2 key={value.id} onDoubleClick={() => deleteText(value.id)}>
          {value.name} : {value.email}
        </h2>
      ))}
    </div>
  );
}

export default MapPractice;
