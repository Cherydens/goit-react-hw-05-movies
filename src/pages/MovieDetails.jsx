import MovieCard from 'components/MovieCard/MovieCard';
import MovieNav from 'components/MovieNav/MovieNav';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/movieApiService';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!movieId) return;

    const getMovieById = async id => {
      setStatus('pending');
      try {
        const result = await fetchMovieById(id);
        if (!result) {
          setStatus('notFound');
          return;
        }
        setMovie(result);
        setStatus('resolved');
      } catch (error) {
        console.error(error.message);
        setStatus('rejected');
      }
    };

    getMovieById(movieId);
  }, [movieId]);

  return (
    <>
      {status === 'resolved' && (
        <>
          <MovieCard movie={movie} />
          <MovieNav />
          <Outlet />
        </>
      )}
      {status === 'notFound' && <div>Movie not found.</div>}
    </>
  );
}
