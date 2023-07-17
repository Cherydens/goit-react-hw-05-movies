import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchDayTrends } from 'services/movieApiService';

export default function Home() {
  const [dayTrends, setDayTrends] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    getDayTrends();
  }, []);

  const getDayTrends = async () => {
    setStatus('pending');
    try {
      const { results } = await fetchDayTrends();
      console.log(results);
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
  return (
    <>
      {status === 'resolved' && <MovieList dayTrends={dayTrends} />}
      {status === 'notFound' && <div>We don't have any today trends.</div>}
    </>
  );
}
