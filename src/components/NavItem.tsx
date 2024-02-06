import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeNav } from "../utils/motion";
import { useAppDispatch } from "../hooks/app";
import { toggleHideMobileNav } from "../redux/reducer/setting";
const NavItem = ({ nav, index }: { nav: INavigation; index: number }) => {
  const dispatch = useAppDispatch();
  return (
    <motion.li
      onClick={() => dispatch(toggleHideMobileNav())}
      variants={fadeNav(index * 0.2, 1)}
      className="capitalize  hover:text-main dark:text-white dark:hover:text-main transition duration-300 font-normal"
      initial="start"
      animate="finished"
      key={nav.id}
    >
      <NavLink
        className="text-base nav-link font-normal  lg:text-lg"
        to={`${nav.url}`}
      >
        {nav.title}
      </NavLink>
    </motion.li>
  );
};
export default NavItem;
