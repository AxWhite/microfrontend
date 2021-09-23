import React from 'react';
import AppLayout from './components/Layout';
import './App.css';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
import MoviesList from './components/MoviesList';
import { useEffect, useState } from 'react';
import useHttp from './hooks/use-http';

function App() {
  const [movies, setMovies] = useState([]);
  const { isLoading, error, sendRequest: fetchMovies } = useHttp();

  let content = null;

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
    <AppLayout>
      {content}
    </AppLayout>
  );
}

export default App;
