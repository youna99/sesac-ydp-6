import './App.css';

function App() {
  const name = '멍멍이';
  const animal = '강아지';

  const a = 5;
  const b = 2;

  const title = 'Hello World';
  return (
    <>
    {/* 실습 1 */}
      <h2>
        제 반려 동물의 이름은 {name}입니다.
      </h2>
      <h2>
      {name}는 {animal}입니다.
      </h2>

      {/* 실습 2 */}
      <div>
        {3 + 5 == 8 ? <span>정답입니다!</span> : <span>오답입니다!</span>}
      </div>

      {/* 실습 3 */}
      <div>
        {a > b && 'a가 b보다 큽니다.'}
      </div>

      {/* 실습 4 */}
      <div class="title">{title}</div>
      <form>
        <div>
          아이디: <input type="text"></input>
        </div>
        <div>
          비밀번호: <input type="password"></input>
        </div>
      </form>
    </>
  );
}

export default App;
