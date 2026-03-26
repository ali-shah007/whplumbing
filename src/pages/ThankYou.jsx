// src/pages/ThankYou.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-32 bg-white text-black">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        Your message has been successfully sent. We will get back to you shortly.
      </p>
      <Link
        to="/"
        className="bg-black text-white px-6 py-2 rounded hover:bg-white hover:text-black border-2 border-black transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
