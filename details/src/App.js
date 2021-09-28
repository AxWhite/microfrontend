import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
import { useEffect, useState } from 'react';
import useHttp from './hooks/use-http';
import MovieDetails from './components/MovieDetails';
import { createBrowserHistory } from "history";
import { Router } from 'react-router-dom';

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  const [movie, setMovie] = useState();
  const { isLoading, error, sendRequest: fetchMovie } = useHttp();
  const movieNum = window.location.pathname.split('/')[2] || 1;
  let content = null;

  useEffect(() => {
    console.log('OnInit', 'Details');
  }, []);

  useEffect(() => {
    fetchMovie(
      { url: `https://swapi.dev/api/films/${movieNum}` },
      (movie) => setMovie(movie)
    );
  }, [setMovie, fetchMovie, movieNum]);

  if (!error) {
    content = <MovieDetails isLoading={isLoading} movie={movie} />
  } else {
    content = (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary">Back Home</Button>}
      />
    )
  }

  return (
    <Router history={history}>
      {content}
    </Router>
  );
}

export default App;
