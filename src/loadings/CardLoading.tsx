import { motion } from "framer-motion"
import { fadeCardAnimate } from "../utils/motion"
const CardLoading = ({ index }: { index: number }) => {
    return (
        <motion.div
            whileInView={fadeCardAnimate(index * 0.3, 1)}
            className="flag-card animate-pulse w-[350px] h-[400px] rounded-lg">
            <span className="w-full h-1/2 block rounded-t-lg bg-gray-200 dark:bg-gray-600"></span>
            <div className="dark:bg-dark-card px-10 pt-5 pb-10 justify-between dark:bg-gray-800 bg-gray-300 flex flex-col gap-3 h-1/2">
                <div className="flex-grow flex flex-col gap-5">
                    <h3 className="bg-gray-100 rounded-md dark:bg-gray-700 h-4 mb-2 w-full"></h3>
                    <p className="bg-gray-100 rounded-md dark:bg-gray-700 h-4  w-10/12"></p>
                    <p className="bg-gray-100 rounded-md dark:bg-gray-700 h-4  w-10/12"></p>
                    <p className="bg-gray-100 rounded-md dark:bg-gray-700 h-4  w-10/12"></p>
                </div>
                <div className="flex justify-end">
                    <p className="bg-gray-100  rounded-md dark:bg-gray-700 h-4  w-16"></p>
                </div>
            </div>
        </motion.div>
    )
}
export default CardLoading