import React, { useState } from 'react';
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from 'firebase/auth';
import { auth } from '../lib/firebase';

const ADMIN_EMAIL = 'ourtripafricaa@gmail.com';

export function AdminLogin({
  onLoginSuccess
}: {
  onLoginSuccess: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      if (result.user.email?.toLowerCase() !== ADMIN_EMAIL) {
        await signOut(auth);
        setError('Access denied. This account is not authorized.');
        return;
      }

      onLoginSuccess();

    } catch (err) {
      console.error('Login failed:', err);
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-3 text-[#0e3022]">
          Our Trip Africa Admin
        </h2>

        <p className="text-gray-600 mb-6">
          Sign in with your authorized administrator account.
        </p>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full px-6 py-3 bg-[#0e3022] text-white rounded-lg hover:bg-[#174b35] disabled:opacity-50"
        >
          {loading ? 'Signing in...' : 'Sign in with Google'}
        </button>

        {error && (
          <p className="text-red-600 mt-4 text-sm">
            {error}
          </p>
        )}
      </div>
    </div>
  );
          }
