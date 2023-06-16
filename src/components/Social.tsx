import { ISocial } from "../types/types";
import { motion } from "framer-motion";
import { socialAnimate } from "../utils/motion";
import { urlFor } from "../server/client";
const Social = ({ social, index }: { social: ISocial; index: number }) => {
  return (
    <motion.a
      whileInView={socialAnimate(index * 0.3, 1)}
      href={social.url}
      rel="noopener noreferrer"
      target="_blank"
      className={`text-gray-500 text-2xl cursor-pointer hover:scale-110  hover:text-[${social.color}]`}
    >
      {social.icon && <social.icon />}
      {social.image && <img className="w-5" src={urlFor(social.image).url()} alt={social.name} />}
    </motion.a>
  );
};
export default Social;
