import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from 'services/movieApiService';
import {
  NoReviewsContainer,
  ReviewsContainer,
  ReviewsTitle,
} from './Reviews.styled';
import Loader from 'components/Loader/Loader';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!movieId) return;

    const getMovieById = async id => {
      setStatus('pending');
      try {
        const { results } = await fetchMovieReviewsById(id);
        if (results.length === 0) {
          setStatus('notFound');
          return;
        }
        setReviews(results);
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
        <ReviewsContainer>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <ReviewsTitle>Author: {author}</ReviewsTitle>
              <p>{content}</p>
            </li>
          ))}
        </ReviewsContainer>
      )}
      {status === 'notFound' && (
        <NoReviewsContainer>
          We don't have any reviews for this movie.
        </NoReviewsContainer>
      )}
      {status === 'rejected' && <div>Ooops...... Something went wrong!</div>}
    </>
  );
}
