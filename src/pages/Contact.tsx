import { BsFillPersonPlusFill, BsEnvelope } from "react-icons/bs";
import { Map } from "../sections";
import { Outlet, NavLink, useLocation } from "react-router-dom"
const Contact = () => {
  const {pathname} = useLocation()
  return (
    <section id="contact" className="dark:bg-dark bg-gray-100">
      <div className="title dark:text-white py-5 flex items-center flex-col">
        <h2 className="text-3xl capitalize">
          {pathname.split("/").filter((path) => path !== "").join(' ') === 'contact' ? "Kursga Yozilish":"Shikoyat"}
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center gap-5 dark:text-white links">
          <NavLink to="/contact" className="text-4xl outline-none">
            <BsFillPersonPlusFill />
          </NavLink>
          <NavLink to="/contact/complaint" className="text-4xl outline-none">
            <BsEnvelope />
          </NavLink>
        </div>
        <Outlet />
        <Map />
      </div>
    </section>
  );
};
export default Contact;