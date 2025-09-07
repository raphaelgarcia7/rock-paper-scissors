import React from 'react';

function Play({ onChoice }) {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-2xl font-semibold mb-6">Escolha sua jogada:</h2>
      <div className="flex space-x-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          onClick={() => onChoice('rock')}
        >
          <span className="text-4xl">✊</span>
          <p className="mt-2 text-lg">Pedra</p>
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          onClick={() => onChoice('paper')}
        >
          <span className="text-4xl">✋</span>
          <p className="mt-2 text-lg">Papel</p>
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          onClick={() => onChoice('scissors')}
        >
          <span className="text-4xl">✌️</span>
          <p className="mt-2 text-lg">Tesoura</p>
        </button>
      </div>
    </div>
  );
}

export default Play;