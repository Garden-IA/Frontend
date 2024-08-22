'use client';

import React from 'react';
import Link from 'next/link';
import { routes } from '../../utils/routes';
import '../../../styles/globals.css'; // Ajusta la ruta si es necesario

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="navbar-content">
        <div className="navbar-logo">
          <Link href="/">Logo</Link>
        </div>
        <div className="navbar-links">
          <Link key={routes.home.path} href={routes.home.path}>
            {routes.home.label}
          </Link>
          <Link key={routes.profile.path} href={routes.profile.path}>
            {routes.profile.label}
          </Link>
          <Link key={routes.plants.path} href={routes.plants.path}>
            {routes.plants.label}
          </Link>
          <Link key={routes.settings.path} href={routes.settings.path}>
            {routes.settings.label}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
