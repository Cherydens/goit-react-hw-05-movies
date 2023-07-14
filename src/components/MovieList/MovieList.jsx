import { Link } from 'react-router-dom';
import { MovieListStyled } from './MovieList.styled';

export default function MovieList({ dayTrends }) {
  return (
    <>
      <h1>Trending today</h1>
      <MovieListStyled>
        {dayTrends.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        ))}
      </MovieListStyled>
    </>
  );
}
