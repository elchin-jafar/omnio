import { lazy, Suspense } from 'react';

const LazyMboxReport = lazy(() => import('./MboxReport'));

const WithSuspense = () => (
  <Suspense fallback="loading..">
    {' '}
    <LazyMboxReport />{' '}
  </Suspense>
);

export default WithSuspense;
