import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastById } from 'services/movieApiService';
import { CastCard, CastContainer, NoCastContainer } from './Cast.styled';
import noPhoto from '../../images/no-photo.jpg';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    getMovieById(movieId);
  }, [movieId]);

  const getMovieById = async id => {
    setStatus('pending');
    try {
      const { cast } = await fetchMovieCastById(id);
      console.log(cast);
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
  return (
    <>
      {status === 'resolved' && (
        <CastContainer>
          {cast.map(({ credit_id, name, profile_path, character }) => (
            <CastCard key={credit_id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width={120}
                  height={180}
                />
              ) : (
                <img src={noPhoto} alt={name} width={120} />
              )}
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
    </>
  );
}
