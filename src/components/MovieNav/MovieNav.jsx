import {
  MovieNavContainer,
  MovieNavLink,
  MovieNavMenu,
} from './MovieNav.styled';

export default function MovieNav() {
  return (
    <MovieNavContainer>
      <h5>Additional information</h5>
      <MovieNavMenu>
        <li>
          <MovieNavLink to="cast">Cast</MovieNavLink>
        </li>
        <li>
          <MovieNavLink to="reviews">Reviews</MovieNavLink>
        </li>
      </MovieNavMenu>
    </MovieNavContainer>
  );
}
