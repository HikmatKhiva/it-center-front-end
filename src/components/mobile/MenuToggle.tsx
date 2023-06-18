import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../hooks/app";
import { toggleMobileNav } from "../../redux/reducer/setting";

const MenuToggle = () => {
  const { isOpen } = useAppSelector(state => state.setting);
  const dispatch = useAppDispatch()
  return (
    <motion.button whileTap={{ scale: [.7, 1] }} className="dark:text-white text-2xl" onClick={() => dispatch(toggleMobileNav())}>
      {isOpen ? <AiOutlineCloseCircle /> : <AiOutlineMenu />}
    </motion.button>
  )
};
export default MenuToggle;