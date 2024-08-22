import ThemeToggle from '../components/themeToggle/ThemeToggle';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-text">
      <h1 className="text-4xl font-bold">Bienvenido a My App</h1>
      <ThemeToggle />
    </div>
  );
}
