import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

const Authors = () => {
  const { name } = useParams();
  const [quotes, setQuotes] = useState([]);

  const getAuthorQuotes = () => {
    const res = ajax(
      `https://quote-garden.herokuapp.com/api/v3/quotes?author=${name.replace(
        '-',
        '%20'
      )}`
    ).pipe(map((e) => e.response));
    res.subscribe((res) => {
      setQuotes(res.data);
    });
  };

  useEffect(() => {
    getAuthorQuotes();
  }, []);

  return (
    <>
      <header className="flex place-content-start">
        <Link to="/">
          <button className="flex items-center cursor-pointer pl-4 border-l-2 border-yellow-500 mt-4 ml-4 text-sm md:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>{' '}
            Back to random quotes
          </button>
        </Link>
      </header>
      <main className="mt-16 grid place-items-stretch gap-24">
        <h1 className="font-bold text-3xl md:text-5xl border-b-4 border-yellow-500 pb-4 place-self-center">
          {name.replace('-', ' ')}
        </h1>
        {quotes.map((quote) => (
          <blockquote
            key={quote._id}
            className="mx-4 md:mx-16 pl-8 border-l-4 border-solid border-yellow-500 text-2xl md:text-3xl font-heading"
          >
            {quote.quoteText}
          </blockquote>
        ))}
      </main>
    </>
  );
};

export default Authors;
