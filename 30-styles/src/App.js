import CssModuleComponents from './CssModuleComponents';
import SassComponent from './SassComponent';
import SassPrac1 from './SassPrac1';
import SassPrac2 from './SassPrac2';
import StyledComponent from './StyledComponent';
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>
      <hr />
      <CssModuleComponents />
      <hr />
      <SassComponent />
      <hr />
      <StyledComponent />
      <hr />
      <SassPrac1 />
      <hr />
      <SassPrac2 />
    </div>
  );
}

export default App;
