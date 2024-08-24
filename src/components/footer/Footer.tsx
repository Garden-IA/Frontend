'use client';

import React from 'react';
import '../../../styles/globals.css'; // Ajusta la ruta si es necesario
import moment from 'moment';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-copyright">
        <span>© {moment().year()} Gardenia™. All Rights Reserved.</span>
      </div>
      <ul className="footer-links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Licensing</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
