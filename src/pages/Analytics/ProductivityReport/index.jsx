import { lazy, Suspense } from 'react';

const LazyProductivityPage = lazy(() => import('./ProductivityReport'));

const WithSuspense = () => (
  <Suspense fallback="loading..">
    {' '}
    <LazyProductivityPage />{' '}
  </Suspense>
);

export default WithSuspense;
