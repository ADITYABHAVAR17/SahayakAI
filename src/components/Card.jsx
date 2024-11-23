import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <Link
        to={link}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Explore
      </Link>
    </div>
  );
};

export default Card;
