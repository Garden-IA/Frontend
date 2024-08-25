'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../../../styles/globals.css';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { isAuthenticated } from '../../utils/session';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {}, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">Gardenia</Link>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : 'hidden'} md:flex`}>
        <li>
          <Link href="/plants">Plantas</Link>
        </li>
        <li>
          <span className="separator">|</span>
        </li>
        <li>
          <Link href="/tools">Herramientas</Link>
        </li>
        <li>
          <span className="separator">|</span>
        </li>
        <li>
          <Link href="/rooms">Habitaciones</Link>
        </li>
      </ul>
      <button className="navbar-user" onClick={() => (isAuthenticated() ? (window.location.href = '/profile') : (window.location.href = '/login'))}>
        <UserCircleIcon className="h-6 w-6"></UserCircleIcon>
      </button>
      <button className="navbar-toggle" onClick={handleToggleClick}>
        <span className="toggle-button">☰</span>
      </button>
    </nav>
  );
};

export default Navbar;
