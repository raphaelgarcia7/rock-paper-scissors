import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assumindo que você usará react-router-dom para navegação

function Game({ playerChoice, setScore, resetPlayerChoice }) {
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const choices = ['rock', 'paper', 'scissors'];

  useEffect(() => {
    // Lógica para a máquina escolher de forma aleatória
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);

    // Lógica para determinar o resultado
    let gameResult = '';
    if (playerChoice === 'rock' && randomChoice === 'scissors') {
      gameResult = 'win';
      setScore(prevScore => prevScore + 1);
    } else if (playerChoice === 'scissors' && randomChoice === 'paper') {
      gameResult = 'win';
      setScore(prevScore => prevScore + 1);
    } else if (playerChoice === 'paper' && randomChoice === 'rock') {
      gameResult = 'win';
      setScore(prevScore => prevScore + 1);
    } else if (playerChoice === randomChoice) {
      gameResult = 'draw';
    } else {
      gameResult = 'lose';
    }
    setResult(gameResult);

    // Adicionar a regra de "não pedra duas vezes seguidas" pode ser implementado aqui
    // ou na lógica que chama o Game.js, dependendo da complexidade desejada.
    // Por exemplo, desabilitando o botão de pedra se a última jogada foi pedra.

  }, [playerChoice, setScore]); // Reexecuta o efeito se playerChoice ou setScore mudar

  const getEmoji = (choice) => {
    switch (choice) {
      case 'rock': return '✊';
      case 'paper': return '✋';
      case 'scissors': return '✌️';
      default: return '';
    }
  };

  const handlePlayAgain = () => {
    resetPlayerChoice(); // Limpa a escolha do jogador para voltar para Play.js
    // Se você estiver usando rotas, pode navegar de volta para a página principal
    // navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex items-center space-x-16">
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">Você</p>
          <span className="text-6xl">{getEmoji(playerChoice)}</span>
          <p className="mt-2 text-lg capitalize">{playerChoice}</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">Máquina</p>
          <span className="text-6xl">{getEmoji(computerChoice)}</span>
          <p className="mt-2 text-lg capitalize">{computerChoice}</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        {result === 'win' && <p className="text-4xl font-bold text-green-500 animate-bounce">Você Ganhou!</p>}
        {result === 'lose' && <p className="text-4xl font-bold text-red-500 animate-pulse">Você Perdeu!</p>}
        {result === 'draw' && <p className="text-4xl font-bold text-yellow-500">Empate!</p>}
      </div>

      <button
        className="mt-10 px-8 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out"
        onClick={handlePlayAgain}
      >
        Jogar de Novo
      </button>
    </div>
  );
}

export default Game;