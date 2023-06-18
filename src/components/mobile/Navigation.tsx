import { motion } from "framer-motion";
import { navigation } from "../../settings";
import MobileNavItem from "./MobileNavItem";
const Navigation = () => {
  return (
    <motion.ul>
      {navigation.map((nav, index) => (
        <MobileNavItem key={index} nav={nav} index={index} />
      ))}
    </motion.ul>
  );
};

export default Navigation;
