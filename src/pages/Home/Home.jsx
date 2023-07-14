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
      setDayTrends(results);
      setStatus('resolved');
    } catch (error) {
      console.error(error.message);
      setStatus('rejected');
    }
  };
  return (
    <main>
      {status === 'resolved' && (
        <>
          <h1>Trending today</h1>
          <ul>
            {dayTrends.map(dayTrend => (
              <li key={dayTrend.id}>{dayTrend.title}</li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
