import { Suspense } from "react";

const LazyLoadPage = ({ Page }: { Page: React.ComponentType }) => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Page />
    </Suspense>
  );
};
export default LazyLoadPage;
