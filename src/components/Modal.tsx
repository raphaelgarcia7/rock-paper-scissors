import React from 'react';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Regras do Jogo</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">
            &times;
          </button>
        </div>
        <div className="text-gray-700 space-y-4">
          <p>Os jogadores devem simultaneamente esticar a mão, formando um dos três símbolos: pedra, papel ou tesoura.</p>
          <p>
            <span className="font-semibold">Pedra</span> ganha da tesoura (amassando-a ou quebrando-a).
          </p>
          <p>
            <span className="font-semibold">Tesoura</span> ganha do papel (cortando-o).
          </p>
          <p>
            <span className="font-semibold">Papel</span> ganha da pedra (embrulhando-a).
          </p>
          <p>
            Se dois jogadores fizerem o mesmo gesto, ocorre um <span className="font-semibold">empate</span>.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Regra especial: Não é permitido mostrar pedra duas vezes seguidas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;