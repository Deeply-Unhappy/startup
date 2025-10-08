import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div id="app-root">
      <header>
        <nav className="navbar fixed-top">
          <div className="navbar-brand">
            RPS Infinite<sup>&reg;</sup>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="lobby_and_game.html">
                Lobby
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        App components go here
      </main>

      <footer>
        <div className="container-fluid">
          <span className="text-reset">
            “Rock Paper Scissors is the story of two friends, a murder and a revenge.”
          </span>
          {' | '}
          <a
            href="https://github.com/Deeply-Unhappy/startup/tree/main"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Link
          </a>
        </div>
      </footer>
    </div>
  );
}
