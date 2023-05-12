import Breadcrumb, { BreadcrumbItemProps } from 'components/Breadcrumb';
import {
  MovieContent,
  MovieDescription,
  MovieDetailContainer,
  MovieDuration,
  MovieImage,
  MovieInfomation,
  MovieName,
  MovieType,
  MovieWraper,
  MovieYear,
} from './styles';
import { ReactComponent as IconCalendar } from 'assets/icons/ic-calendar.svg';
import { ReactComponent as IconClock } from 'assets/icons/ic-clock.svg';
import { ReactComponent as IconPlay } from 'assets/icons/ic-play.svg';
import { useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { fetchMovieById } from 'store/actions/movie';
import Loading from 'components/Loading';
import { theme } from 'constants/theme';

export default function MovieDetail() {
  const params = useParams();
  const isCalledAPI = useRef<boolean>(false);
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movie.movie);
  const loading = useAppSelector((state) => state.movie.loading);

  const breadcrumbs: BreadcrumbItemProps[] = useMemo(() => {
    if (movie) {
      return [
        {
          title: 'Movies',
          path: '/',
        },
        {
          title: movie.title,
        },
      ];
    }
    return [];
  }, [movie]);

  useEffect(() => {
    if (isCalledAPI.current) return;

    params.id && dispatch(fetchMovieById(params.id));
    isCalledAPI.current = true;
  }, [params]);

  return (
    <MovieDetailContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Breadcrumb items={breadcrumbs} />
          <MovieInfomation>
            <MovieImage>
              <img src={movie?.image} alt="" />
              <IconPlay />
            </MovieImage>
            <MovieContent>
              <MovieName>{movie?.title}</MovieName>
              <MovieWraper>
                <MovieType>{movie?.genres.join(', ')}</MovieType>
                <MovieYear>
                  <IconCalendar
                    style={{ width: 20, height: 20, color: theme.rose_500 }}
                  />
                  <span>{movie?.year}</span>
                </MovieYear>
                <MovieDuration>
                  <IconClock
                    style={{ width: 20, height: 20, color: theme.rose_500 }}
                  />
                  <span>{movie?.duration} mins</span>
                </MovieDuration>
              </MovieWraper>
              <MovieDescription>{movie?.plot}</MovieDescription>
            </MovieContent>
          </MovieInfomation>
        </>
      )}
    </MovieDetailContainer>
  );
}
