import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });

    navigate('/home');
  };

  return (
    <AuthLayout title="Sign in to play">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-xl bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            placeholder="Enter username"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-xl bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            placeholder="Enter password"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full mt-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-indigo-500/30"
        >
          Sign In
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        Don't have an account? <Link to="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Sign up</Link>
      </p>
    </AuthLayout>
  );
}
