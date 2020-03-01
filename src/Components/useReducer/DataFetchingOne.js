import React, { useState, useEffect } from 'react';

function DataFetchingOne() {
  const key = process.env.REACT_APP_API_KEY;
  const URL = `https://ap.unsplash.com/search/photos?page=1&query=flowers&client_id=${key}`;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(URL)
          .then(res => res.json())
          .then(res => {
            setData(res.results);
            setLoading(false);
            setError('');
          });
      } catch (error) {
        setLoading(false);
        setData([]);
        setError('Something went wrong!');
      }
    };
    fetchData();
  }, [URL]);

  return (
    <div>
      <ul>
        {loading
          ? 'Loading...'
          : data.map(photo => (
              <li key={photo.id}>
                <img src={photo.urls.small} alt={photo.alt_description} />
              </li>
            ))}
        {error ? error : null}
      </ul>
    </div>
  );
}

export default DataFetchingOne;
