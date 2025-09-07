import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Play from './components/Play';
import Game from './components/Game';
import Footer from './components/Footer';
import Modal from './components/Modal';

function AppContent() {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    setPlayerChoice(choice);
    navigate('/game'); // Navega para a página de resultado
  };

  const resetPlayerChoice = () => {
    setPlayerChoice(null);
    navigate('/'); // Volta para a página de escolha
  };

  const openRulesModal = () => {
    setIsModalOpen(true);
  };

  const closeRulesModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex flex-col">
      <Header score={score} />

      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Play onChoice={handleChoice} />} />
          <Route path="/game" element={<Game playerChoice={playerChoice} setScore={setScore} resetPlayerChoice={resetPlayerChoice} />} />
        </Routes>
      </main>

      <Footer onOpenRules={openRulesModal} />
      <Modal isOpen={isModalOpen} onClose={closeRulesModal} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;