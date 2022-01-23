import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { v4 as uuidv4 } from 'uuid';

const links = [
  {
    id: uuidv4(),
    to: '/',
    text: 'Home',
  },
  {
    id: uuidv4(),
    to: '/calculator',
    text: 'Calculator',
  },
  {
    id: uuidv4(),
    to: '/quote',
    text: 'Quote',
  },
];

const Navbar = () => (
  <nav data-testid="navtest" className="navBar">
    <h1 className="navlogo">Math Magicians</h1>
    <ul className="navlinks">
      {links.map((link) => (
        <li key={link.id}>
          <NavLink className="text-link" to={link.to}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
