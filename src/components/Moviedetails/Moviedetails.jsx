import React from 'react';
import { useSelector } from 'react-redux';
import RecommendedFilms from '../Recommended/Recommended';

const MovieDetails = () => {
  const movies = useSelector((state) => state.movieReducer.movies);

  if (!movies || movies.length === 0) {
    return <p>Loading...</p>;
  }

  const firstCardGenreIds = movies.length > 0 ? movies[0].genre_ids : [];

  const recommendedMovies = movies.filter((movie) => {
    return firstCardGenreIds.some((genreId) => movie.genre_ids.includes(genreId));
  });

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {movies.map((movie, index) => (
          <div key={movie.id} className="col mb-3">
            <div className="card shadow h-100">
              <div className="card-body d-flex flex-column">
                <h2 className="card-title">{movie.title}</h2>
                <p className="card-text"><strong>Release Date:</strong> {movie.release_date}</p>
                <p className="card-text"><strong>Rating:</strong> {movie.vote_average}</p>
                <p className="card-text flex-grow-1">{movie.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {recommendedMovies.length > 0 && <RecommendedFilms recommendedMovies={recommendedMovies} />}
    </div>
  );
};

export default MovieDetails;
