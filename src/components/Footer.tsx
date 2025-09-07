import React from 'react';

function Footer({ onOpenRules }) {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white p-4 text-center shadow-inner">
      <button
        className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition duration-300 ease-in-out"
        onClick={onOpenRules}
      >
        Regras
      </button>
    </footer>
  );
}

export default Footer;