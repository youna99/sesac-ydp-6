import React, { useState } from "react";

function Practice2() {
  const [text, setText] = useState([]);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [option, setOption] = useState("writer");
  const [searchText, setSearchText] = useState("");

  const addText = (e) => {
    e.preventDefault();
    const newText = text.concat({
      id: text.length + 1,
      writer: writer,
      title: title,
    });
    setText(newText);
    setWriter("");
    setTitle("");
  };

  const optionChange = (e) => {
    setOption(e.target.value);
  };

  //   const searchInfo = text.filter((info) =>)
  return (
    <>
      <form style={{ margin: "10px" }}>
        작성자:
        <input
          type="text"
          placeholder="작성자"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
        />
        제목:
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addText}>작성</button> <br />
      </form>
      <div style={{ margin: "10px" }}>
        <select onChange={optionChange}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button>검색</button>
      </div>
      <table
        border="1"
        cellPadding="10"
        cellSpacing="1"
        style={{ margin: "10px" }}
      >
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {text.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.writer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>검색 결과가 없습니다.</p>
      <table>
        {}
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default Practice2;
