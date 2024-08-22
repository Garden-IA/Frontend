'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { routes } from '../../utils/routes';
import '../../../styles/globals.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo text-xl font-bold">
        <Link href="/">MiSitio</Link>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : 'hidden'} md:flex space-x-6`}>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/about">Acerca de</Link>
        </li>
        <li>
          <Link href="/services">Servicios</Link>
        </li>
        <li>
          <Link href="/contact">Contacto</Link>
        </li>
      </ul>
      <button className="navbar-toggle" onClick={handleToggleClick}>
        <span className="toggle-button">☰</span>
      </button>
    </nav>
  );
};

export default Navbar;
