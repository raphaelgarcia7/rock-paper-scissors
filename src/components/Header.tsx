import React from 'react';

function Header({ score }) {
  return (
    <header className="bg-purple-700 text-white p-4 text-center shadow-md">
      <h1 className="text-3xl font-bold">Pedra, Papel e Tesoura</h1>
      <div className="mt-2 text-xl">
        Pontuação: <span className="font-semibold">{score}</span>
      </div>
    </header>
  );
}

export default Header;