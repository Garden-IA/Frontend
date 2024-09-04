'use client';

import SessionAuthProvider from '../context/SessionAuthProvider';
import { ThemeProvider } from '../context/ThemeContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionAuthProvider>
          <ThemeProvider>
            <main>{children}</main>
          </ThemeProvider>
        </SessionAuthProvider>
      </body>
    </html>
  );
}
