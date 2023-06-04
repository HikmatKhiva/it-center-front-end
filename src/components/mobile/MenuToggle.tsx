import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
const MenuToggle = ({ toggle, isOpen }: { toggle: any; isOpen: boolean }) => (
  <motion.button whileTap={{scale:[.7,1]}} className="dark:text-white text-2xl" onClick={toggle}>
    {isOpen ? <AiOutlineCloseCircle /> : <AiOutlineMenu />}
  </motion.button>
);
export default MenuToggle;