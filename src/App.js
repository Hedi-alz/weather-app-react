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
        <div className="github">
          <a
            href="https://github.com/Hedi-alz/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source coded
          </a>{" "}
          by Hedieh
        </div>
      </header>
    </div>
  );
}

export default App;
