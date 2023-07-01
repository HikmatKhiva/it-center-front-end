import { motion } from "framer-motion";
import Navigation from "./Navigation";
import { useAppDispatch, useAppSelector } from "../../hooks/app";
import { toggleMobileNav } from "../../redux/reducer/setting";
const MobileNav = () => {
  const { isOpen } = useAppSelector(state => state.setting);
  const dispatch = useAppDispatch()
  return (
    <motion.div
      className={`fixed w-10/12 flex h-screen z-10 top-[70px] ${isOpen ? "right-0" : "left-full"
        } transition-all duration-300 bg-white dark:bg-dark p-10`}
      initial={false}
    >
      <Navigation />
      <div
        onClick={() => dispatch(toggleMobileNav())}
        className={`${!isOpen && "hidden"} bg-gray-100 h-full left-0 opacity-50 dark:bg-light-dark flex-grow fixed top-[70px] w-1/6`}
      />
    </motion.div>
  );
};
export default MobileNav;