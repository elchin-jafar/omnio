import { lazy, Suspense } from 'react';

const LazyOverviewPage = lazy(() => import('./Overview'));

const WithSuspense = () => (
  <Suspense fallback="loading..">
    {' '}
    <LazyOverviewPage />{' '}
  </Suspense>
);

export default WithSuspense;
