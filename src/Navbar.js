import React, { useState } from 'react';
import './Navbar.css';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import Dashboard from './Dashboard';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <div><img src="https://imgs.search.brave.com/7mTUhRG1IvFo6L9wzfR9xiRIWdAQFaillGcV3Wdg8Tg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9i/dXNpbmVzcy96aGlq/aWFuLXJlaW1idXJz/ZW1lbnQtaXRlbXMv/dHJhZmZpYy1leHBl/bnNlLTEucG5n" alt="Expense Tracker" /></div>
        <div className='titl'>Xpensely</div>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#dashboard-container1">Home</a></li>
        <li><a href="#expense-list-container">Expenses List</a></li>
        <li><a href="#expense-form-container">Add Expense</a></li>
        <li><a href="#add-expense">Sign In</a></li>
        <li><a href="#add-expense">Log in</a></li>
      </ul>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className={`bar1 ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar2 ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar3 ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
