import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];
  return (
    <nav>
      <ul className="nav">
        {links.map((link) => (
          <li key={link.id} data-testid={link.id}>
            <NavLink to={link.path} className="active-link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
