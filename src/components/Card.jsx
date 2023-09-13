import React, { useState } from 'react';

const Card = ({ news }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex">
        <div className="w-1/3">
          <img src={news.image} alt={news.title} className="rounded-lg h-32" />
        </div>
        <div className="w-2/3 p-4">
          <h2 className="text-xl font-semibold">{news.title}</h2>
          <p className={`mt-2 ${expanded ? 'block' : 'hidden'}`}>{news.description}</p>
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
            onClick={toggleDescription}
          >
            {expanded ? 'Hide News' : 'Read News +'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
