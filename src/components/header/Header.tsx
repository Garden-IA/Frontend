'use client';

import React from 'react';
import '../../../styles/globals.css'; // Ajusta la ruta si es necesario
import Navbar from '../navbar/NavBar';

const Header: React.FC = () => {
  return (
    <header>
      <Navbar />
    </header>
  );
};

export default Header;
