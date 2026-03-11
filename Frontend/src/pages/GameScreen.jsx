import GameHeader from '../components/game/GameHeader';
import PlayerSidebar from '../components/game/PlayerSidebar';
import CanvasPanel from '../components/game/CanvasPanel';
import ChatSidebar from '../components/game/ChatSidebar';

export default function GameScreen() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-zinc-900 font-sans p-4">
      <GameHeader />
      

      <div className="flex flex-1 gap-4 overflow-hidden">
        <PlayerSidebar />
        <CanvasPanel />
        <ChatSidebar />
      </div>
    </div>
  );
}
