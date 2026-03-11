export default function RoomCard({ title, description, icon, onClick, hoverColorClass, iconBgClass, iconColorClass }) {
  return (
    <div 
      onClick={onClick}
      className={`bg-gray-50 dark:bg-zinc-700/50 p-6 rounded-xl border border-gray-200 dark:border-zinc-600 flex flex-col items-center text-center transition-colors cursor-pointer group hover:border-${hoverColorClass}`}
    >
      <div className={`w-16 h-16 ${iconBgClass} ${iconColorClass} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{description}</p>
    </div>
  );
}
