import { Outlet } from "react-router-dom";
import Header from "./Header";

const Default = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="pt-[60px]">
        <Outlet />
      </main>
    </div>
  );
};

export default Default;
