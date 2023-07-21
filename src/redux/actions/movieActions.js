import axios from 'axios';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';


export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
};


export const fetchMovies = (searchQuery) => {
  return (dispatch) => {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=1ed3f6e8a474e431abc54e30c67c74c4`;
    axios
      .get(apiUrl)
      .then((response) => {
        const movies = response.data.results;
        dispatch(fetchMoviesSuccess(movies));
      })
      .catch((error) => {
        dispatch(fetchMoviesFailure(error.message));
      });
  };
};
