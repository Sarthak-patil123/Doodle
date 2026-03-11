export default function GameHeader() {
  return (
    <header className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 p-4 mb-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 tracking-tight">Doodle</div>
        <div className="px-3 py-1 bg-gray-100 dark:bg-zinc-700 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">Room: ABCD</div>
      </div>
      <div className="text-xl font-mono font-bold text-gray-800 dark:text-white bg-gray-100 dark:bg-zinc-700 px-4 py-2 rounded-lg">
        _ _ T _ _ M _ N
      </div>
      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 font-semibold">
        <span>Time: <span className="text-indigo-600 dark:text-indigo-400 font-mono">45s</span></span>
        <button className="text-sm bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-500/20 dark:text-red-400 px-3 py-1 rounded-lg transition-colors">
          Quit
        </button>
      </div>
    </header>
  );
}
