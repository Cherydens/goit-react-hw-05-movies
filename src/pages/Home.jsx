import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchDayTrends } from 'services/movieApiService';

export default function Home() {
  const [dayTrends, setDayTrends] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const getDayTrends = async () => {
      setStatus('pending');
      try {
        const { results } = await fetchDayTrends();
        if (results.length === 0) {
          setStatus('notFound');
          return;
        }
        setDayTrends(results);
        setStatus('resolved');
      } catch (error) {
        console.error(error.message);
        setStatus('rejected');
      }
    };

    getDayTrends();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {status === 'resolved' && <MovieList movies={dayTrends} />}
      {status === 'notFound' && <div>We don't have any today trends.</div>}
    </>
  );
}
