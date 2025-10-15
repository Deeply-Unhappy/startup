import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Lobby_and_game } from './lobby_and_game/lobby_and_game';
import { Login } from './login/login'
import { Stocks } from './stocks/stocks'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <BrowserRouter>
      <div id="app-root">
        <header>
          <nav className="navbar fixed-top">
            <div className="navbar-brand">
              RPS Infinite<sup>&reg;</sup>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className='nav-link' to='login'>Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to='lobby_and_game'>Lobby</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to='stocks'>Stocks</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='/login' element={<Login />} />
          <Route path='/lobby_and_game' element={<Lobby_and_game />} />
          <Route path='/stocks' element={<Stocks />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

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
    </BrowserRouter>
  );
}
function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}