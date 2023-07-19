import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieListLink, MovieListStyled } from './MovieList.styled';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <>
      <MovieListStyled>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <MovieListLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </MovieListLink>
          </li>
        ))}
      </MovieListStyled>
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ).isRequired,
};
