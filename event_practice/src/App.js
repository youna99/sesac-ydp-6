import "./App.css";
import HandlerEx from "./components/ex/HandlerEx";
import Color from "./components/ex/Color";
import ChangeText from "./components/ex/ChangeText";

function App() {
  return (
    <div className="App">
      <HandlerEx />
      <hr />

      <Color />
      <hr />

      <ChangeText />
    </div>
  );
}

export default App;
