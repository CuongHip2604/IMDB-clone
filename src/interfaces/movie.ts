export interface MovieInterface {
  crew: string;
  fullTitle: string;
  id: string;
  imDbRating: string;
  imDbRatingCount: string;
  image: string;
  rank: string;
  title: string;
  year: string;
  plot: string;
  duration: number;
  genres: string[];
}

export interface MovieQuery {
  limit: number;
  offset: number;
}
