'use client';

import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon, FaLaptop } from 'react-icons/fa';
import useTheme from '../../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { t } = useTranslation('common');
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-row justify-center space-x-2 mb-4">
      <button className={`flex flex-row justify-center btn ${theme === 'light' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setTheme('light')}>
        <FaSun className="h-6 w-6 mr-2" />
        <span>{t('lightMode')}</span>
      </button>
      <button className={`flex flex-row justify-center btn ${theme === 'dark' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setTheme('dark')}>
        <FaMoon className="h-6 w-6 mr-2" />
        <span>{t('darkMode')}</span>
      </button>
      <button
        className={`flex flex-row justify-center btn ${theme === 'system' ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => setTheme('system')}
      >
        <FaLaptop className="h-6 w-6 mr-2" />
        <span>{t('system')}</span>
      </button>
    </div>
  );
};

export default ThemeToggle;
