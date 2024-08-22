import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <SessionProvider> {children}</SessionProvider>
        </main>
      </body>
    </html>
  );
}
