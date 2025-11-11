import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem' }}>
        Task Manager
      </Link>
      <ul style={{ listStyle: 'none', display: 'inline-flex', marginLeft: '2rem', padding: 0 }}>
        <li style={{ marginRight: '1rem' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Task List
          </Link>
        </li>
        <li>
          <Link to="/add" style={{ color: 'white', textDecoration: 'none' }}>
            Add Task
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
