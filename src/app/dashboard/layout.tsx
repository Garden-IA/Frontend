// src/app/auth/layout.tsx
import React from 'react';
import '../../../styles/globals.css'; // Estilos específicos para la sección de autenticación
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/NavBar';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Navbar />
      <div style={{ marginLeft: '250px', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
