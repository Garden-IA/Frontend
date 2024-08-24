import React from 'react';
import '../../../styles/globals.css';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/NavBar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
}
