'use client';

import { useSession } from 'next-auth/react';

export const isAuthenticated = () => {
  const { data: session, status } = useSession();

  return status === 'authenticated' ? true : false;
};
