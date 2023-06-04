import { ISocial } from "../types/types";
import { motion } from "framer-motion";
import { socialAnimate } from "../utils/motion";
const Social = ({ social, index }: { social: ISocial; index: number }) => {
  return (
    <motion.a
      whileInView={socialAnimate(index * 0.3, 1)}
      href={social.url}
      className={`text-gray-500 text-2xl cursor-pointer hover:scale-110  hover:text-[${social.color}]`}
    >
      {<social.icon />}
    </motion.a>
  );
};
export default Social;
