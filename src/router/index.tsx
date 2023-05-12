import { LazyExoticComponent, Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Loader = (Component: LazyExoticComponent<() => JSX.Element>) => () =>
  (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );

const AppLayout = Loader(lazy(() => import('layout/AppLayout')));
const Movies = Loader(lazy(() => import('pages/Movies')));
const TVShows = Loader(lazy(() => import('pages/TvShows')));
const MovieDetail = Loader(lazy(() => import('pages/MovieDetail')));

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: 'tv-shows',
        element: <TVShows />,
      },
      {
        path: 'movies/:id',
        element: <MovieDetail />,
      },
    ],
  },
]);

export default router;
