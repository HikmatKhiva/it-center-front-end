import React, { ComponentType, Suspense } from "react";
import AdminPageProtect from "../middleware/AdminPageProtect";
import LoadingComponent from "./LoadingComponent";
// Define the Component type
type Component = ComponentType;
interface LazyAdminPageProps {
  Page: Component;
}
const LazyAdminPage: React.FC<LazyAdminPageProps> = ({
  Page,
}: {
  Page: React.ComponentType;
}) => {
  AdminPageProtect();
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Page />
    </Suspense>
  );
};
export default LazyAdminPage;
