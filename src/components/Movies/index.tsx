import Movie from 'components/Movie';
import { MovieContainer, MovieList } from './styles';

interface IMoviesProps {
  title: string;
}

export default function Movies({ title }: IMoviesProps) {
  return (
    <MovieContainer>
      <h3>{title}</h3>
      <MovieList>
        {Array.from(Array(10).keys()).map((el) => (
          <Movie
            onClick={() => {}}
            key={el}
            movie={{
              image:
                'https://m.media-amazon.com/images/M/MV5BMzdjNjI5MmYtODhiNS00NTcyLWEzZmUtYzVmODM5YzExNDE3XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_QL75_UX190_CR0,2,190,281_.jpg',
              name: 'Movie name',
              description: 'Movie description',
            }}
          />
        ))}
      </MovieList>
    </MovieContainer>
  );
}
