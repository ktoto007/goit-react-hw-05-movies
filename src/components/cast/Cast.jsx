import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiService } from 'services/moviesApi';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    apiService.getMoviesCredits(movieId).then(credits => setCast(credits.cast));
  }, [movieId]);

  if (cast) {
    return (
      <ul>
        {cast.map(({ profile_path, name, character, id }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
              width="120px"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Cast;
