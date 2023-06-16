import { IAboutCard } from "../types/types";
import { motion } from "framer-motion";
import { fadeCardAnimate } from "../utils/motion";
const Card = ({ card, index }: { card: IAboutCard; index: number }) => {
  return (
    <motion.figure
      whileInView={fadeCardAnimate(index * .3,1)}
      className="w-1/3 shadow-2xl bg-white dark:bg-light-dark rounded-md"
    >
      <img className="w-full h-[180px] rounded-t-md" src={card.image} alt={card.title} />
      <figcaption className="text-center dark:text-white py-2">
        <h5 className="text-lg">{card.title}</h5>
      </figcaption>
    </motion.figure>
  );
};
export default Card;