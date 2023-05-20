import { Link, useLocation } from 'react-router-dom';
import { ListItem } from './MovieList.styled';
const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => {
        return (
          <ListItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </ListItem>
        );
      })}
    </ul>
  );
};

export default MovieList;
