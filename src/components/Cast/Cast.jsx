import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastById } from 'services/movieApiService';
import { CastCard, CastContainer, NoCastContainer } from './Cast.styled';
import noPhoto from '../../images/no-photo.jpg';
import Loader from 'components/Loader/Loader';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!movieId) return;

    const getMovieById = async id => {
      setStatus('pending');
      try {
        const { cast } = await fetchMovieCastById(id);
        if (cast.length === 0) {
          setStatus('notFound');
          return;
        }
        setCast(cast);
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
      {status === 'resolved' && (
        <CastContainer>
          {cast.map(({ credit_id, name, profile_path, character }) => (
            <CastCard key={credit_id}>
              <img
                src={
                  profile_path
                    ? [`https://image.tmdb.org/t/p/w500${profile_path}`]
                    : noPhoto
                }
                alt={name}
                width={120}
              />
              {name && <p>{name}</p>}
              {character && <p>Character: {character}</p>}
            </CastCard>
          ))}
        </CastContainer>
      )}
      {status === 'notFound' && (
        <NoCastContainer>
          We don't have any cast for this movie.
        </NoCastContainer>
      )}
      {status === 'rejected' && <div>Ooops...... Something went wrong!</div>}
    </>
  );
}
