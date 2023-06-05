import { Link } from "react-router-dom";
import { INavigation } from "../../types/types";
import { motion } from "framer-motion";
import { fadeNavMobile } from "../../utils/motion";
import { useAppDispatch } from "../../hooks/app";
import { toggleHideMobileNav } from "../../redux/reducer/setting";
const NavItem = ({ nav, index }: { nav: INavigation; index: number }) => {
  const dispatch = useAppDispatch()
  return (
    <motion.li
      onClick={() => dispatch(toggleHideMobileNav())}
      whileInView={fadeNavMobile(index * 0.1, 1)}
      className="capitalize text-lg  hover:text-main mb-5 dark:text-main dark:hover:text-white transition duration-300 font-normal"
      initial="start"
      animate="finished"
      key={nav.id}
    >
      <Link to={`${nav.url}`}>{nav.title}</Link>
    </motion.li>
  );
};
export default NavItem;