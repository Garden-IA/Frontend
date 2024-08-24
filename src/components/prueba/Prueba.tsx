'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Prueba() {
  const { data: session, status } = useSession();

  const checkSession = () => {
    return status === 'authenticated';
  };

  return (
    <>
      <div>{checkSession() ? <p>Usuario tiene sesión activa</p> : <p>No hay sesión activa</p>}</div>
      <a href="/api/auth/signin">Ir a logearse</a>
    </>
  );
}
