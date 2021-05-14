import React from 'react';
import { Link } from 'react-router-dom';

const Random = ({ handleClick, quote, author, genre }) => {
  return (
    <>
      <header className="flex place-content-end">
        <button
          onClick={handleClick}
          className="flex items-center cursor-pointer pl-4 border-l-2 border-yellow-500 mt-4 mr-4 text-sm md:text-base"
        >
          new quote{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </header>
      <main className="grid place-items-center h-screen">
        <blockquote className="my-2 mx-4 md:mx-16 pl-8 border-l-4 border-solid border-yellow-500 text-2xl md:text-4xl font-heading">
          {`“${quote}”`}
        </blockquote>
        <footer className="text-lg md:text-2xl text-center">
          <Link to={`/authors/${author.replace(' ', '-')}`}>
            <div className="border-b-2 border-yellow-500 pb-2 mb-2 italic">
              {author}
            </div>
            <div className="text-gray-500 text-base md:text-lg">{genre}</div>
          </Link>
        </footer>
      </main>
    </>
  );
};

export default Random;
