import { useState, useRef, useEffect } from 'react';

export default function CanvasPanel() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [brushRadius, setBrushRadius] = useState(4);
  const [currentLine, setCurrentLine] = useState([]);

  const colors = [
    { name: 'Black', hex: '#000000', class: 'bg-black' },
    { name: 'Red', hex: '#EF4444', class: 'bg-red-500' },
    { name: 'Blue', hex: '#3B82F6', class: 'bg-blue-500' },
    { name: 'Green', hex: '#22C55E', class: 'bg-green-500' },
    { name: 'Yellow', hex: '#FACC15', class: 'bg-yellow-400' },
  ];


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    

    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = color;
    context.lineWidth = brushRadius * 2;
    contextRef.current = context;
    

    const handleResize = () => {

      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.strokeStyle = color;
      context.lineWidth = brushRadius * 2;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = color;
      contextRef.current.lineWidth = brushRadius * 2;
    }
  }, [color, brushRadius]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
    setCurrentLine([{ x: offsetX, y: offsetY }]);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    setCurrentLine((prev) => [...prev, { x: offsetX, y: offsetY }]);
  };

  const stopDrawing = () => {
    if (isDrawing) {
      contextRef.current.closePath();
      setIsDrawing(false);
      

      console.log("New stroke drawn!", {
        color: color,
        radius: brushRadius,
        pointsCount: currentLine.length,
        coordinates: currentLine
      });
      setCurrentLine([]);
    }
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (canvas && contextRef.current) {
      contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <main className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col relative h-full">
      <div className="absolute top-4 left-4 right-4 flex justify-center pointer-events-none z-10">
        <span className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg pointer-events-auto">
          You are drawing...
        </span>
      </div>
      

      <div className="flex-1 w-full bg-slate-50 rounded-t-xl overflow-hidden cursor-crosshair relative">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          className="absolute inset-0 touch-none"
        />
      </div>
      

      <div className="h-16 bg-gray-50 border-t border-gray-200 rounded-b-xl flex items-center justify-center gap-4 px-4">
        {colors.map((c) => (
          <div 
            key={c.name}
            onClick={() => setColor(c.hex)}
            className={`w-8 h-8 rounded-full ${c.class} shadow-sm cursor-pointer transition-transform ${color === c.hex ? 'ring-2 ring-indigo-500 scale-110' : 'hover:scale-110'}`}
          />
        ))}
        
        <div className="w-[1px] h-8 bg-gray-300 mx-2"></div>
        
        <button 
          onClick={() => setColor('#F8FAFC')}
          className={`p-2 rounded-lg transition-colors ${color === '#F8FAFC' ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-200'}`} 
          title="Eraser"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.109a6 6 0 018.367 8.368zM15.414 4.586a2 2 0 112.828 2.828l-8.486 8.485a2 2 0 01-2.828-2.828l8.486-8.485z" clipRule="evenodd" /></svg>
        </button>

        <button 
          onClick={handleClear} 
          className="p-2 text-gray-600 hover:bg-red-100 hover:text-red-600 rounded-lg transition-colors" 
          title="Clear Canvas"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
        </button>

        <div className="w-[1px] h-8 bg-gray-300 mx-2"></div>
        <input 
          type="range" 
          min="1" 
          max="20" 
          value={brushRadius} 
          onChange={(e) => setBrushRadius(Number(e.target.value))}
          className="w-24 accent-indigo-600" 
        />
      </div>
    </main>
  );
}
