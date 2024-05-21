import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/vs-ai">Vs-AI</Link>
        </li>
        <li>
          <Link to="/vs-player">Vs-Player</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
