import PropTypes from 'prop-types';
import noPhoto from '../../images/no-photo.jpg';
import {
  MovieCardContainer,
  MovieCardInfoContainer,
  MovieCardPosterContainer,
} from './MovieCard.styled';

export default function MovieCard({
  movie: { poster_path, title, release_date, vote_average, overview, genres },
}) {
  return (
    <MovieCardContainer>
      <MovieCardPosterContainer>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : noPhoto
          }
          alt={title}
        />
      </MovieCardPosterContainer>
      <MovieCardInfoContainer>
        <h2>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres.map(genre => genre.name).join(' ')}</p>
      </MovieCardInfoContainer>
    </MovieCardContainer>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }).isRequired,
};
