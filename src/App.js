import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/francescalalli/"
              target="_blank"
              id="social-link"
              rel="noreferrer"
            >
              Francesca Lalli
            </a>
            , open-sourced on{" "}
            <a
              href="https://github.com/Flall/dictionary-project"
              target="_blank"
              id="social-link"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://dynamic-hummingbird-b6c74c.netlify.app"
              target="_blank"
              id="social-link"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
