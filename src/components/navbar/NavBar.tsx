'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../../../styles/globals.css';
import { isAuthenticated } from '../../utils/session';
import Avatar from '../avatar/Avatar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { routes } from '../../utils/routes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {}, [isOpen]);

  return (
    <nav className="flex flex-row items-center space-x-4 mb-4 navbar">
      <div className="basis-3/12 navbar-logo">
        <Link href="/">Gardenia</Link>
      </div>
      <ul className={`basis-6/12 navbar-links ${isOpen ? 'active' : 'hidden'} md:flex`}>
        <li>
          <Link href={routes.plants.path}>
            <strong>{routes.plants.label}</strong>
          </Link>
        </li>
        <li>
          <Link href={routes.tools.path}>
            <strong>{routes.tools.label}</strong>
          </Link>
        </li>
        <li>
          <Link href="/rooms">
            <strong>Habitaciones</strong>
          </Link>
        </li>
      </ul>
      <div className="flex flex-row justify-end basis-3/12 ">
        <button onClick={() => (isAuthenticated(status) ? router.push(routes.profile.path) : router.push(routes.signin.path))}>
          <Avatar
            title="JSisques"
            description="javierplazasisques@gmail.com"
            //src="https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
