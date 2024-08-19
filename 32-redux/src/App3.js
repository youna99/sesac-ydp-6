import { useDispatch, useSelector } from 'react-redux';
import './styles/Box.css';

function App3() {
  const number = useSelector((state) => state.number);
  console.log('number >>>', number); // 100

  return (
    <div className="App">
      <h1>React Redux EX3</h1>
      <h2>Redux 사용!</h2>
      <h2>리듀서 추가!</h2>
      <h2>number: {number}</h2>
      <Box1 />
    </div>
  );
}

// Box1 컴포넌트
const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1 :</h2>
      <Box2 />
    </div>
  );
};

// Box2 컴포넌트
const Box2 = () => {
  return (
    <div className="Box2">
      <h2>Box2 : </h2>
      <Box3 />
    </div>
  );
};

// Box3 컴포넌트
const Box3 = () => {
  return (
    <div className="Box3">
      <h2>Box3 : </h2>
      <Box4 />
    </div>
  );
};

// Box4 컴포넌트
const Box4 = () => {
  // #8. useDispatch 훅 사용해서 액션을 디스패치하는 함수 가져오기.
  // - 이 함수를 사용하여 상태 업데이트!

  // Redux 상태에서 number 값을 선택하고, 액션을 디스패치 할 준비!
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div className="Box4">
      <h2>Box4 : {number}</h2>
      <button onClick={() => dispatch({ type: 'counter/PLUS' })}>plus</button>
      <button onClick={() => dispatch({ type: 'counter/MINUS' })}>minus</button>
    </div>
  );
};

export default App3;
