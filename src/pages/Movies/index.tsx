import Movies from 'components/Movies';
import { useAppDispatch } from 'hooks/store';
import { useEffect } from 'react';
import { resetMovies } from 'store/movie';

export default function MoviesPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetMovies());
    };
  }, []);

  return <Movies isMoviePage title="Latest Movies" />;
}
