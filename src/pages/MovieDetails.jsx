import GoBackLink from 'components/GoBackLink/GoBackLink';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import MovieNav from 'components/MovieNav/MovieNav';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/movieApiService';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

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
      {status === 'pending' && <Loader />}
      {(status === 'resolved' ||
        status === 'notFound' ||
        status === 'rejected') && <GoBackLink to={backLink.current} />}

      {status === 'resolved' && (
        <>
          <MovieCard movie={movie} />
          <MovieNav />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
      {status === 'notFound' && (
        <div>
          <h2>Movie not found.</h2>
        </div>
      )}
      {status === 'rejected' && (
        <div>
          <h2>Ooops...... Something went wrong!</h2>
        </div>
      )}
    </>
  );
}
