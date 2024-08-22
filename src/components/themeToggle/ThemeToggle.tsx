'use client';

import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';

const ThemeToggle: React.FC = () => {
  const { t } = useTranslation('common');
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    // Cargar el tema desde el localStorage o usar el tema del sistema
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
    } else {
      // Si no hay tema guardado, usar el tema del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'system') {
      // No establecemos un atributo específico, usamos la configuración del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      // Aplicamos el tema específico
      document.documentElement.setAttribute('data-theme', theme);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="flex space-x-2 mt-4">
      <button className={`btn ${theme === 'light' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setTheme('light')}>
        <SunIcon className="h-6 w-6" />
        <span>{t('lightMode')}</span>
      </button>
      <button className={`btn ${theme === 'dark' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setTheme('dark')}>
        <MoonIcon className="h-6 w-6" />
        <span>{t('darkMode')}</span>
      </button>
      <button className={`btn ${theme === 'system' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setTheme('system')}>
        <ComputerDesktopIcon className="h-6 w-6" />
        <span>{t('system')}</span>
      </button>
    </div>
  );
};

export default ThemeToggle;
