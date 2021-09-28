import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
import MoviesList from './components/MoviesList';
import { useEffect, useState } from 'react';
import useHttp from './hooks/use-http';
import { createBrowserHistory } from "history";
import { Router } from 'react-router-dom';

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  const [movies, setMovies] = useState([]);
  const { isLoading, error, sendRequest: fetchMovies } = useHttp();

  let content = null;

  useEffect(() => {
    console.log('[OnInit]', 'Homescreen');
  }, []);

  useEffect(() => {
    fetchMovies(
      { url: '/films' }, 
      (movies) => setMovies(movies)
    );
  }, [setMovies, fetchMovies]);

  if (!error) {
    content = <MoviesList isLoading={isLoading} movies={movies}></MoviesList>
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
  )
}

export default App;
