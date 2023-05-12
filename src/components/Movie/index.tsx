import {
  MovieContainer,
  MovieImage,
  MovieName,
  MovieDescription,
} from './styles';

export interface IMovieProps {
  movie: {
    image: string;
    name: string;
    description: string;
  };
  onClick: () => void;
}

export default function Movie({ movie, onClick }: IMovieProps) {
  return (
    <MovieContainer onClick={onClick}>
      <MovieImage alt="Movie Image" src={movie.image} />
      <MovieName>{movie.name}</MovieName>
      <MovieDescription>{movie.description}</MovieDescription>
    </MovieContainer>
  );
}
