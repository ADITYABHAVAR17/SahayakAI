import React from 'react';

const Button = ({ label, onClick, variant = 'primary', type = 'button' }) => {
  const baseClasses = `px-4 py-2 rounded font-medium transition-all`;
  const variants = {
    primary: `bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400`,
    secondary: `bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400`,
    danger: `bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400`,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;
