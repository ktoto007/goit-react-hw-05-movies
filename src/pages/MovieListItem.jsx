import { Suspense } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { apiService } from 'services/moviesApi';

const MovieListItem = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getMoviesDetails() {
      const details = await apiService.getMoviesDetails(movieId);
      setMovie(details);
    }
    getMoviesDetails();
  }, [movieId]);

  if (movie) {
    return (
      <>
        <Link to={backLinkLocationRef.current}>Go back</Link>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.vote_average}</p>
            <h2>Overvie</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres.map(genre => `${genre.name} `)}</p>
          </div>
        </div>
        <div>
          <p></p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    );
  }
};

export default MovieListItem;
