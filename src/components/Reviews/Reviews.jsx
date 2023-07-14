import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from 'services/movieApiService';
import {
  NoReviewsContainer,
  ReviewsContainer,
  ReviewsTitle,
} from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    getMovieById(movieId);
  }, [movieId]);

  const getMovieById = async id => {
    setStatus('pending');
    try {
      const { results } = await fetchMovieReviewsById(id);
      console.log(results);
      if (results.length === 0) {
        setStatus('rejected');
        return;
      }
      setReviews(results);
      setStatus('resolved');
    } catch (error) {
      console.error(error.message);
      setStatus('rejected');
    }
  };
  return (
    <>
      {status === 'resolved' && (
        <ReviewsContainer>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <ReviewsTitle>Author: {author}</ReviewsTitle>
              <p>{content}</p>
            </li>
          ))}
        </ReviewsContainer>
      )}
      {status === 'rejected' && (
        <NoReviewsContainer>
          We don't have any reviews for this movie.
        </NoReviewsContainer>
      )}
    </>
  );
}
