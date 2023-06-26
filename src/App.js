import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Weather />
          <h1>City</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
