import React, { useEffect, useReducer } from 'react';
import { FETCH_SUCCESS, FETCH_ERROR } from './../React-hooks/Util/ActionsType';

const initialState = {
  loading: true,
  error: '',
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      console.log(action.payLoad);
      return {
        loading: false,
        error: '',
        data: action.payLoad,
      };
    case FETCH_ERROR:
      return {
        loading: true,
        error: 'Something went wrong!',
        data: [],
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [{ loading, error, data }, dispatch] = useReducer(reducer, initialState);
  const key = process.env.REACT_APP_API_KEY;
  const URL = `https://api.unsplash.com/search/photos?page=1&query=kurdistan&client_id=${key}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(URL)
          .then(res => res.json())
          .then(res => {
            dispatch({ type: FETCH_SUCCESS, payLoad: res.results });
          });
      } catch (error) {
        dispatch({ type: FETCH_ERROR });
      }
    };
    fetchData();
  }, [URL]);
  return (
    <div>
      <ul>
        {error ? error : null}
        {loading
          ? 'loading...'
          : data.map(photo => (
              <li key={photo.id}>
                <img src={photo.urls.regular} alt={photo.description} />
              </li>
            ))}
      </ul>
    </div>
  );
}

export default DataFetchingTwo;
