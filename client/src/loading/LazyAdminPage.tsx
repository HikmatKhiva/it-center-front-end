import React, { ComponentType, Suspense } from "react";
import AdminPageProtect from "../middleware/AdminPageProtect";
// Define the Component type
type Component = ComponentType;
interface LazyAdminPageProps {
  Page: Component;
}
const LazyAdminPage: React.FC<LazyAdminPageProps> = ({ Page }: { Page: React.ComponentType }) => {
    AdminPageProtect();
    return (
    <Suspense fallback={<>Loading</>}>
      <Page />
    </Suspense>
  );
};

export default LazyAdminPage;
