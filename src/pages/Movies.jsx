import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieBySearchQuery } from 'services/movieApiService';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const queryMovie = searchParams.get('query') ?? '';

    if (!queryMovie) {
      setMovies([]);
      return;
    }

    const getMovieBySearchQuery = async query => {
      setStatus('pending');
      try {
        const { results } = await fetchMovieBySearchQuery(query);
        if (results.length === 0) {
          setStatus('notFound');
          return;
        }
        setMovies(results);
        setStatus('resolved');
      } catch (error) {
        console.error(error.message);
        setStatus('rejected');
      }
    };

    getMovieBySearchQuery(queryMovie);
  }, [searchParams, setMovies]);

  return (
    <>
      <Searchbar />
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MovieList movies={movies} />}
      {status === 'notFound' && (
        <div>We don't have any results by your search query.</div>
      )}
      {status === 'rejected' && <div>Ooops...... Something went wrong!</div>}
    </>
  );
}
