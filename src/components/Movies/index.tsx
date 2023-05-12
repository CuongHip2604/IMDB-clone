import Loading from 'components/Loading';
import Movie from 'components/Movie';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import { fetchMovies } from 'store/actions/movie';
import { LIMIT, PAGE } from '../../constants';
import { LoadingWraper, MovieContainer, MovieList } from './styles';

interface IMoviesProps {
  title: string;
  isMoviePage?: boolean;
}

export default function Movies({ title, isMoviePage }: IMoviesProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const InfiniteScrollComponent = InfiniteScroll;
  const [page, setPage] = useState<number>(PAGE);
  const movies = useAppSelector((state) => state.movie.movies);
  const loading = useAppSelector((state) => state.movie.loading);
  const isCalledAPI = useRef<boolean>(false);
  const isFirstCalledAPI = useRef<boolean>(true);

  useEffect(() => {
    if (isCalledAPI.current) return;

    dispatch(fetchMovies({ offset: page, limit: LIMIT, isMoviePage }))
      .unwrap()
      .then(() => {
        isFirstCalledAPI.current = false;
      });
    isCalledAPI.current = true;
  }, [dispatch, page]);

  return (
    <>
      {loading && isFirstCalledAPI.current ? (
        <LoadingWraper>
          <Loading />
        </LoadingWraper>
      ) : (
        <MovieContainer>
          <h3>{title}</h3>
          <InfiniteScrollComponent
            dataLength={movies.length}
            next={() => {
              isCalledAPI.current = false;
              setPage((prev) => prev + 1);
            }}
            hasMore={movies.length < 250}
            loader={<Loading />}
            style={{ overflow: 'hidden' }}
          >
            <MovieList>
              {movies.map((movie, index) => (
                <Movie
                  onClick={() => isMoviePage && navigate(`/movies/${movie.id}`)}
                  key={index}
                  movie={{
                    image: movie.image,
                    name: movie.title,
                    description: movie.crew,
                  }}
                />
              ))}
            </MovieList>
          </InfiniteScrollComponent>
        </MovieContainer>
      )}
    </>
  );
}
