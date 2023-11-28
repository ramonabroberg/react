import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mark" age="32"/>
    </div>
  );
}

export default App;
