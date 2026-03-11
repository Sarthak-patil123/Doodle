import { useNavigate } from 'react-router-dom';
import RoomCard from '../components/home/RoomCard';

export default function HomeScreen() {
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    const randomRoomId = Math.random().toString(36).substring(2, 6).toUpperCase();
    navigate(`/game/${randomRoomId}`);
  };

  const handleJoinRoom = () => {
    const roomCode = prompt("Enter room code:");
    if (roomCode) {
      navigate(`/game/${roomCode.toUpperCase()}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-zinc-900 font-sans p-4">
      <div className="w-full max-w-2xl p-8 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl border border-gray-200 dark:border-zinc-700">
        
        <header className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200 dark:border-zinc-700">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tight">
            Doodle Lobby
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold">
              U
            </div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Username</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RoomCard
            title="Create Room"
            description="Start a new private game and invite your friends."
            hoverColorClass="indigo-500"
            iconBgClass="bg-indigo-100 dark:bg-indigo-500/20"
            iconColorClass="text-indigo-600 dark:text-indigo-400"
            onClick={handleCreateRoom}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            }
          />

          <RoomCard
            title="Join Room"
            description="Enter a room code to join an existing game."
            hoverColorClass="purple-500"
            iconBgClass="bg-purple-100 dark:bg-purple-500/20"
            iconColorClass="text-purple-600 dark:text-purple-400"
            onClick={handleJoinRoom}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            }
          />
        </div>

      </div>
    </div>
  );
}
