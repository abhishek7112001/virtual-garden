import React from 'react';
import Cards from '../Cards/Cards';

const Garden = () => {
  return (
    <div
      className="h-screen bg-cover bg-center" 
      style={{
        backgroundImage: "url('/gardenbg.jpg')", 
      }}
    >
        <Cards />

    </div>
  );
};

export default Garden;
