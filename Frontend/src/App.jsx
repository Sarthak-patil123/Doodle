import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import HomeScreen from './pages/HomeScreen'
import GameScreen from './pages/GameScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/game/:roomId" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
