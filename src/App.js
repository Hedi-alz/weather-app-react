import logo from "./logo.svg";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Search weather</h1>
          <Weather />
        </div>
      </header>
    </div>
  );
}

export default App;
