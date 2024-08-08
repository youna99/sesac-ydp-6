import React, { useState } from "react";

function Practice2() {
  const [text, setText] = useState([]);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [searchOption, setSearchOption] = useState("writer");
  const [searchText, setSearchText] = useState("");
  const [filteredText, setFilteredText] = useState([]);

  // 데이터 추가
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

  // 검색 기능
  const handleSearch = () => {
    if (searchText.trim().length === 0) {
      setFilteredText([]);
      return;
    }

    const filtered = text.filter((info) => {
      if (searchOption === "writer") {
        return info.writer.includes(searchText);
      } else if (searchOption === "title") {
        return info.title.includes(searchText);
      }
      return false;
    });
    setFilteredText(filtered);
    setSearchText("");
  };

  // 전체 검색
  const handleSearchAll = () => {
    setFilteredText(text);
  };

  // 키보드 이벤트
  const handleKeyDown = (e, action) => {
    if (e.keyCode === 13) {
      action(e);
    }
  };

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
          onKeyDown={(e) => handleKeyDown(e, addText)}
        />
        <button onClick={addText}>작성</button> <br />
      </form>
      <div style={{ margin: "10px" }}>
        <select
          value={searchOption}
          onChange={(e) => setSearchOption(e.target.value)}
        >
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, handleSearch)}
        />
        <button onClick={handleSearch}>검색</button>
        <button onClick={handleSearchAll}>전체</button>
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
      {filteredText.length > 0 ? (
        <p>검색 결과</p>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
      {filteredText.length > 0 && (
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
            {filteredText.map((value) => (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Practice2;
