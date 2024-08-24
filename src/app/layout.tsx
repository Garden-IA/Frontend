'use client';

import SessionAuthProvider from '../context/SessionAuthProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionAuthProvider>
          <main>{children}</main>
        </SessionAuthProvider>
      </body>
    </html>
  );
}
