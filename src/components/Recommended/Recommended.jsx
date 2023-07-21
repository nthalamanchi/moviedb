import React from 'react';

const RecommendedFilms = ({ recommendedMovies }) => {
  return (
    <div className="recommended-films-container d-flex justify-content-center align-items-center">
      <div className="recommended-films w-50">
        <h3 className="mb-3 fw-bold text-center text-uppercase">Recommended Films:</h3>
        <ul className="list-group">
          {recommendedMovies.map((movie) => (
            <li key={movie.id} className="list-group-item list-group-item-action">
              {movie.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecommendedFilms;
