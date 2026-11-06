import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

export function AdminLogin({
  onLoginSuccess
}: {
  onLoginSuccess: () => void;
}) {
  const [email, setEmail] = useState('ourtripafricaa@gmail.com');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      if (result.user.email?.toLowerCase() !== 'ourtripafricaa@gmail.com') {
        await auth.signOut();
        setError('Huna ruhusa ya kuingia kwenye Admin Dashboard.');
        return;
      }

      onLoginSuccess();

    } catch (err: any) {
      console.error('Admin login error:', err);
      setError(
        err.code === 'auth/invalid-credential'
          ? 'Email au password si sahihi.'
          : err.message || 'Imeshindikana kuingia. Jaribu tena.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-[#0e3022] mb-2">
          Our Trip Africa
        </h2>

        <p className="text-gray-600 mb-6">
          Administrator Login
        </p>

        <label className="block text-sm font-medium mb-2">
          Email Address
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
          required
        />

        <label className="block text-sm font-medium mb-2">
          Password
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg p-3 mb-5"
          placeholder="Enter your password"
          required
        />

        {error && (
          <p className="text-red-600 text-sm mb-4">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0e3022] text-white p-3 rounded-lg font-bold disabled:opacity-50"
        >
          {loading ? 'Signing in...' : 'Login to Admin'}
        </button>
      </form>
    </div>
  );
      }
