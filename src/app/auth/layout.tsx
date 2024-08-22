// src/app/auth/layout.tsx
'use-client';
import React from 'react';
import '../../../styles/globals.css'; // Estilos específicos para la sección de autenticación

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
