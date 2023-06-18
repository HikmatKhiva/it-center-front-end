import { lazy, Suspense } from "react";
import PageLoading from "./PageLoading";
const LazyLoadRoutes = (componentName: string) => {
  const LazyElement = lazy(() => import(`../pages/${componentName}.tsx`));
  return (
    <Suspense fallback={<PageLoading />}>
      <LazyElement />
    </Suspense>
  );
};
export default LazyLoadRoutes;