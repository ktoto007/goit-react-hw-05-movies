import { apiService } from 'services/moviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    apiService
      .getMoviesRewiews(movieId)
      .then(reviews => setReviews(reviews.results));
  }, [movieId]);

  if (reviews) {
    if (reviews.length > 0) {
      return (
        <ul>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      );
    }

    return <p>We don't have any reviews for this moovie</p>;
  }
};

export default Reviews;
