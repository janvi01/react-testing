import logo from "./logo.svg";
import "./App.css";
import HelloName from "./components/HelloName";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Testing
        </a>
      </header>
      <HelloName name="Janvi" />
    </div>
  );
}

export default App;
