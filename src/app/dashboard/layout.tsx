// src/app/auth/layout.tsx
import React from 'react';
import '../../../styles/globals.css'; // Estilos globales
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
