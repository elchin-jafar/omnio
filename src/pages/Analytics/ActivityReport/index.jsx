import { lazy, Suspense } from 'react';

const LazyActivityReportPage = lazy(() => import('./ActivityReport'));

const WithSuspense = () => (
  <Suspense fallback="loading..">
    {' '}
    <LazyActivityReportPage />{' '}
  </Suspense>
);

export default WithSuspense;
