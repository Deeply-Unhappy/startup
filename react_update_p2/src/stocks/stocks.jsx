import React from 'react';
import './stocks.css';

export function Stocks() {
  return (
    <main className="container-fluid text-center">
      <div className="heading-text">
        For all your rock, paper, scissor portfolio needs:<br />
        The value of ROK, PPR, and SCS as traded on the New York Stock Exchange
      </div>
      <ul className="stock-container">
        <li className="stock-item">
          <span className="stock-value">ROK - $346.91</span>
        </li>
        <li className="stock-item">
          <span className="stock-value">PPR - $0.030</span>
        </li>
        <li className="stock-item">
          <span className="stock-value">SCS - $16.82</span>
        </li>
      </ul>
    </main>
  );
}
