import { ISocial } from "../types/types";
import { motion } from "framer-motion";
import { socialAnimate } from "../utils/motion";
import { urlFor } from "../server/client";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Social = ({ social, index }: { social: ISocial; index: number }) => {
  return (
    <motion.a
      whileInView={socialAnimate(index * 0.3, 1)}
      href={social.url}
      rel="noopener noreferrer"
      target="_blank"
      role="link"
      aria-label={social?.name || "footer link"}
      className={`text-gray-500 text-2xl cursor-pointer hover:scale-110  hover:text-[${social.color}]`}
    >
      {social.icon && <social.icon />}
      {social.image && <LazyLoadImage className="w-5 rounded-full hover:scale-150 transition-all duration-300 " src={urlFor(social.image).url()} alt={social.name} />}
    </motion.a>
  );
};
export default Social;
