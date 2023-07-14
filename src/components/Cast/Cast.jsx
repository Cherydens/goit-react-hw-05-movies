import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastById } from 'services/movieApiService';
import { CastCard, CastContainer } from './Cast.styled';

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
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width={120}
                />
              )}
              <p>{name}</p>
              <p>Character: {character}</p>
            </CastCard>
          ))}
        </CastContainer>
      )}
    </>
  );
}
