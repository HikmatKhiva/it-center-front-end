import { Logo } from "../animationElement";
import { navigation } from "../settings";
import { container } from "../utils/motion";
import { motion } from "framer-motion";
import ThemeIcon from "../components/ThemeIcon";
import { Location, MenuToggle, MobileNav, NavItem } from "../components";
const Navbar = () => {
  return (
    <header className="h-[70px] items-center flex border-b-2 sticky top-0 bg-white z-20 dark:bg-dark dark:border-main  ">
      <motion.nav className="container mx-auto flex justify-between items-center ">
        <Logo />
        <div className="flex items-center lg:gap-4 gap-2">
          <motion.ul variants={container} className="lg:flex gap-4 hidden">
            {navigation.map((nav, index) => (
              <NavItem index={index} key={nav.id} nav={nav} />
            ))}
          </motion.ul>
          <motion.div className="lg:hidden flex items-center">
            <MenuToggle />
            <MobileNav />
          </motion.div>
          <ThemeIcon />
          {/* <Location /> */}
        </div>
      </motion.nav>
    </header>
  );
};
export default Navbar;
