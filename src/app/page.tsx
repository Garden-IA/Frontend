'use client';

import { useRouter } from 'next/navigation';
import Prueba from '../components/prueba/Prueba';
import ThemeToggle from '../components/themeToggle/ThemeToggle';
import { isAuthenticated } from '../utils/checkAuthentication';
import { routes } from '../utils/routes';

export default function Home() {
  const router = useRouter();

  const redirect = () => {
    router.push('/prueba');
  };

  !isAuthenticated ? router.push(routes.signin.path) : router.push(routes.home.path);

  // return (
  //   <div className="flex flex-col items-center justify-center h-screen bg-background text-text">
  //     <h1 className="text-4xl font-bold">Bienvenido a My App</h1>

  //     <ThemeToggle />
  //     <Prueba />
  //     <button onClick={redirect}>AAAAAAAAAAAAA</button>
  //   </div>
  // );
}
