import { INavigation } from "../types/types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeNav } from "../utils/motion";
const NavItem = ({ nav, index }: { nav: INavigation; index: number }) => {
  return (
    <motion.li
      variants={fadeNav(index * 0.2, 1)}
      className="capitalize  hover:text-main dark:text-main dark:hover:text-white transition duration-300 font-normal"
      initial="start"
      animate="finished"
      key={nav.id}
    >
      <Link className="text-base lg:text-lg" to={`${nav.url}`}>{nav.title}</Link>
    </motion.li>
  );
};
export default NavItem;
