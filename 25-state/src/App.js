import './App.css';
import Counter from './Counter';
import CounterFunction from './CounterFunction';
import SayFunction from './SayFunction';
import ClassFuncion from './ClassFuncion';
import CountFuncion from './CountFuncion';

function App() {
  return (
    <div className="App">
      <Counter/>
      <hr />

      <SayFunction/>
      <hr />

      <CounterFunction value={"Plus 1"}/>
      <hr />

      <ClassFuncion />
      <hr />

      <CountFuncion />
    </div>
  );
}

export default App;







