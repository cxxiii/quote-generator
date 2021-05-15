import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import Random from './Random';
import Authors from './Authors';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const getRandomQuote = () => {
    const res = ajax(
      'https://quote-garden.herokuapp.com/api/v3/quotes/random'
    ).pipe(map((e) => e.response));
    res.subscribe((res) => {
      setQuote(res.data[0].quoteText);
      setAuthor(res.data[0].quoteAuthor);
      setGenre(res.data[0].quoteGenre);
    });
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="text-gray-900 text-shadow-sm subpixel-antialiased">
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
