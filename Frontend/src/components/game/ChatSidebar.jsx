import { useState } from 'react';

export default function ChatSidebar() {
  const [messages, setMessages] = useState([
    { id: 1, user: 'System', text: 'Game started!', isSystem: true },
    { id: 2, user: 'Player1', text: 'Is it a cat?', isSystem: false },
  ]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;
    
    setMessages([...messages, { 
      id: Date.now(), 
      user: 'You', 
      text: currentMessage, 
      isSystem: false 
    }]);
    setCurrentMessage('');
  };

  return (
    <aside className="w-80 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 flex flex-col">
      <div className="p-4 border-b border-gray-100 dark:border-zinc-700 font-bold text-gray-700 dark:text-gray-300">
        Chat (Guesses)
      </div>
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
        {messages.map((msg) => (
          <div key={msg.id} className={`text-sm ${msg.isSystem ? 'text-green-600 dark:text-green-400 font-bold text-center my-2' : 'text-gray-800 dark:text-gray-200'}`}>
            {!msg.isSystem && <span className="font-bold text-gray-500 dark:text-gray-400 mr-2">{msg.user}:</span>}
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-100 dark:border-zinc-700 flex gap-2">
        <input 
          type="text" 
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type your guess here..."
          className="flex-1 bg-gray-50 dark:bg-zinc-700 border border-gray-200 dark:border-zinc-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
        />
      </form>
    </aside>
  );
}
