"use client";
import React, { useState, useEffect } from 'react';
import { quotes } from '../utils/quotes';

const BookQuote: React.FC = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    // Select a random quote from the list
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    setQuote(randomQuote.text);
    setAuthor(randomQuote.author);
  }, []);

  return (
    <div className="p-6 bg-teal-50 rounded-lg max-w-md mx-auto mt-4">
      <h2 className="text-2xl font-semibold text-teal-900 mb-4 text-center">Quote of the Day</h2>
      <div className="flex flex-col items-center">
        <p className="text-lg italic text-teal-600 text-center mb-4">
          {quote}
        </p>
        <p className="text-md font-semibold text-teal-900 text-right">
          - {author}
        </p>
      </div>
    </div>
  );
};

export default BookQuote;