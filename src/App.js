import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VsAI from './components/VsAI';
import VsPlayer from './components/VsPlayer';
import HomePage from './components/HomePage';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <header className="app-header">
            <h1>Tic Tac Toe</h1>
            <nav className="app-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/vs-ai">Vs AI</Link></li>
                <li><Link to="/vs-player">Vs Player</Link></li>
              </ul>
            </nav>
          </header>

          <main className="app-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/vs-ai" element={<VsAI />} />
              <Route path="/vs-player" element={<VsPlayer />} />
            </Routes>
          </main>

          <footer className="app-footer"></footer>
        </div>
      </Router>
    );
  }
}

export default App;
