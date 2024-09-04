'use client';

import React from 'react';
import '../../../styles/globals.css'; // Ajusta la ruta si es necesario
import moment from 'moment';
import { routes } from '../../utils/routes';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-copyright">
        <span>© {moment().year()} Gardenia™. All Rights Reserved.</span>
      </div>
      <ul className="footer-links">
        <li>
          <a href={routes.about.path}>{routes.about.label}</a>
        </li>
        <li>
          <a href={routes.privatePolicy.path}>{routes.privatePolicy.label}</a>
        </li>
        <li>
          <a href={routes.licensing.path}>{routes.licensing.label}</a>
        </li>
        <li>
          <a href={routes.contact.path}>{routes.contact.label}</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
