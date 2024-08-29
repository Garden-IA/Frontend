import React from 'react';
import '../../../styles/globals.css';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/NavBar';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
