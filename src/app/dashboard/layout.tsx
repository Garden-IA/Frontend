import React from 'react';
import '../../../styles/globals.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
