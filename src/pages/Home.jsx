import MovieList from 'components/movieList/MovieList';
import { useEffect, useState } from 'react';
import { apiService } from 'services/moviesApi';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getPopularMovies() {
      const movies = await apiService.getPopularMovies();
      setMovies(movies.results);
    }
    getPopularMovies();
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      {<MovieList movies={movies}></MovieList>}
    </>
  );
};

export default Home;
