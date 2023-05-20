import MovieList from 'components/movieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiService } from 'services/moviesApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchMovieByQuery() {
      apiService.query = query;
      const movies = await apiService.fetchMovieByQuery();
      setMovies(movies.results);
    }

    fetchMovieByQuery();
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    if (e.target.name.value === '') {
      setSearchParams({});
      setMovies([]);
      return;
    }
    setSearchParams({ query: e.target.name.value });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" defaultValue={query ?? ''} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies}></MovieList>
    </>
  );
};

export default Movies;
