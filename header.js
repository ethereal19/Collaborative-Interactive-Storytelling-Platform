import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <nav className="container mx-auto flex justify-between">
      <Link to="/" className="text-xl font-bold">StorySphere</Link>
      <Link to="/new" className="bg-white text-blue-600 px-4 py-2 rounded">Start New Story</Link>
    </nav>
  </header>
);

export default Header;
