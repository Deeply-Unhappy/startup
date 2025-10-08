import React from 'react';
import './lobby_and_game.css';

export function Lobby_and_game() {
  return (
    <main className="lobby-layout">
      <aside className="sidebar fixed-left">
        <div className="icon"><img src="/rock_pretty.png" alt="Rock" /></div>
        <div className="icon"><img src="/paper_pretty.png" alt="Paper" /></div>
        <div className="icon"><img src="/scissors_pretty.png" alt="Scissors" /></div>
      </aside>

      <section className="matches">
        <div className="matches_header">Available Matches</div>
        <div className="match">Game 1</div>
        <div className="match">Game 2</div>
        <div className="match">Game 3</div>
        <div className="match">Game 4</div>
        <div className="match">Game 5</div>
        <div className="match">Game 6</div>
        <div className="match">Game 7</div>
        <div className="match">Game 8</div>
        <div className="match">Game 9</div>
        <div className="match">Game 10</div>
      </section>
    </main>
  );
}
