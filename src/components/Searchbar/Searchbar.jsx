import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/actions/movieActions';
import "./Searchbar.css"

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchMovies(searchQuery));
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <input
        type="text"
        className="form-control me-2 w-25 center"
        placeholder="Enter movie title..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
