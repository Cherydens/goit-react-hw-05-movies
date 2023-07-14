import MovieCard from 'components/MovieCard/MovieCard';
import MovieNav from 'components/MovieNav/MovieNav';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/movieApiService';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    getMovieById(movieId);
  }, [movieId]);

  const getMovieById = async id => {
    setStatus('pending');
    try {
      const result = await fetchMovieById(id);
      console.log(result);
      setMovie(result);
      setStatus('resolved');
    } catch (error) {
      console.error(error.message);
      setStatus('rejected');
    }
  };

  return (
    <>
      {status === 'resolved' && (
        <>
          <MovieCard movie={movie} />
          <MovieNav />
          <Outlet />
        </>
      )}
    </>
  );
}
