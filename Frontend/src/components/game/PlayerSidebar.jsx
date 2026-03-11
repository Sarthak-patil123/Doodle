export default function PlayerSidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 flex flex-col hidden md:flex">
      <div className="p-4 border-b border-gray-100 dark:border-zinc-700 font-bold text-gray-700 dark:text-gray-300 uppercase text-sm tracking-wider">
        Players
      </div>
      <div className="flex-1 overflow-y-auto p-2">
        {[1, 2, 3].map((player, idx) => (
          <div key={idx} className={`p-3 rounded-lg flex items-center justify-between mb-2 ${idx === 0 ? 'bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20' : 'hover:bg-gray-50 dark:hover:bg-zinc-700/50 transition-colors'}`}>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${idx === 0 ? 'bg-indigo-500 text-white' : 'bg-gray-200 dark:bg-zinc-600 text-gray-600 dark:text-gray-300'}`}>
                P{idx+1}
              </div>
              <span className={`font-semibold ${idx === 0 ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-700 dark:text-gray-200'}`}>Player{idx+1}</span>
            </div>
            <span className="font-mono text-gray-500 font-bold text-sm">{1000 - (idx * 150)}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
