export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-zinc-900 font-sans p-4">
      <div className="w-full max-w-sm p-8 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl border border-gray-200 dark:border-zinc-700">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tight">
            Doodle
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">
            {title}
          </p>
          {subtitle && (
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
