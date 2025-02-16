import { Suspense } from "react";
import LoadingComponent from "./LoadingComponent";
const LazyLoadPage = ({ Page }: { Page: React.ComponentType }) => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Page />
    </Suspense>
  );
};
export default LazyLoadPage;