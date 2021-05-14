import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Random from './Random';
import Authors from './Authors';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const getRandomQuote = async () => {
    const raw = await fetch(
      'https://quote-garden.herokuapp.com/api/v3/quotes/random'
    );
    const res = await raw.json();

    setQuote(res.data[0].quoteText);
    setAuthor(res.data[0].quoteAuthor);
    setGenre(res.data[0].quoteGenre);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="text-gray-900 subpixel-antialiased">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={(props) => (
              <Random
                {...props}
                handleClick={() => getRandomQuote()}
                quote={quote}
                author={author}
                genre={genre}
              />
            )}
          />
          <Route path="/authors/:name" exact component={Authors} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
