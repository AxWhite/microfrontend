import React from 'react';
import AppLayout from './components/Layout';
import './App.css';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
import { useEffect, useState } from 'react';
import useHttp from './hooks/use-http';
import MovieDetails from './components/MovieDetails';

function App() {
  const [movie, setMovie] = useState();
  const { isLoading, error, sendRequest: fetchMovie } = useHttp();
  const movieNum = window.location.pathname.split('/')[2] || 1;
  let content = null;

  useEffect(() => {
    fetchMovie(
      { url: `https://swapi.dev/api/films/${movieNum}` },
      (movie) => setMovie(movie)
    );
  }, [setMovie, fetchMovie]);

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
    <AppLayout title={movie ? movie.title : null}>
      {content}
    </AppLayout>
  );
}

export default App;
