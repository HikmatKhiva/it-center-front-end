import { Footer, Navbar } from "./index";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Layout = () => {
  return (
    <div className="font-roboto flex flex-col min-h-screen">
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};
export default Layout;