import { MovieListLink, MovieListStyled } from './MovieList.styled';

export default function MovieList({ dayTrends }) {
  return (
    <>
      <h1>Trending today</h1>
      <MovieListStyled>
        {dayTrends.map(({ id, title }) => (
          <li key={id}>
            <MovieListLink to={`movies/${id}`}>{title}</MovieListLink>
          </li>
        ))}
      </MovieListStyled>
    </>
  );
}
