import Movies from 'components/Movies';
import { useAppDispatch } from 'hooks/store';
import { useEffect } from 'react';
import { resetMovies } from 'store/movie';

export default function TVShowsPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetMovies());
    };
  }, []);

  return <Movies title="Latest TV Shows" />;
}
