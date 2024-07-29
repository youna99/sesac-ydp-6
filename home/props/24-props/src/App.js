import "./App.css";
import Button from "./Button";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import Category from "./Category";

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <ClassComponent name="SeSAC 6기" />
      <hr />

      <FunctionComponent />
      <FunctionComponent name="SeSAC 6기" />
      <hr />

      <Button link="https://www.google.com">Google</Button>

      <Category>
        <li>First item.</li>
        <li>Second item.</li>
        <li>Another item.</li>
      </Category>
    </div>
  );
}

export default App;
