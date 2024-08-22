'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError(result.error);
    } else if (result?.ok) {
      window.location.href = '/'; // Redirige al usuario a la página principal o a donde prefieras
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      {error && <p className="text-red-500 text-center">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full"
        required
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full hover:bg-blue-600">
        Sign In
      </button>
    </form>
  );
}
