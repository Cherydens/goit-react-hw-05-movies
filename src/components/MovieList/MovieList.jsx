import { MovieListLink, MovieListStyled } from './MovieList.styled';

export default function MovieList({ movies }) {
  return (
    <>
      <MovieListStyled>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <MovieListLink to={`/movies/${id}`}>{title}</MovieListLink>
          </li>
        ))}
      </MovieListStyled>
    </>
  );
}
