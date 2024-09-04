'use client';

import { useSession, getCsrfToken, signIn } from 'next-auth/react';

export const isAuthenticated = (status: string) => {
  return status === 'authenticated' ? true : false;
};

// export const getSession = () => {
//   const { data: session, status } = useSession();
//   return session;
// };

// export const getUserData = () => {
//   const { data: session, status } = useSession();
//   return session?.user;
// };

// export const getToken = async () => {
//   const csrfToken = await getCsrfToken();
//   return csrfToken;
// };

// export const singIn = (provider: string) => {
//   return signIn(provider);
// };
