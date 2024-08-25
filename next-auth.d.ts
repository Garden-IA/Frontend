// next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      image?: string | null;
      //   role?: string | null;
      //   locale?: string | null;
      lastLogin?: string | null;
    };
  }

  interface User {
    id: string;
    email: string;
    name?: string | null;
    image?: string | null;
    // role?: string;
    // locale?: string;
    lastLogin?: string | null;
  }

  interface JWT {
    id?: string;
    email?: string;
    name?: string;
    image?: string;
    // role?: string;
    // locale?: string;
    lastLogin?: string | null;
  }
}
