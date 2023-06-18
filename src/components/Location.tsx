import { MdLocationOn, MdLocationOff } from "react-icons/md";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../hooks/app";
import { Tooltip } from "react-tooltip";
import { clientAgreed, clientDisAgreed } from "../redux/reducer/setting";
const Location = () => {
    const { clientAgree} = useAppSelector(state => state.setting);
    const dispatch = useAppDispatch()
    return (
        <div className="relative">
            <motion.button
                id="clickable"
                whileTap={{ scale: [1, .6] }}
                className="text-xl dark:text-white mt-1 location-btn">
                {clientAgree ? <MdLocationOn /> : <MdLocationOff />}
            </motion.button>
            <Tooltip className="flex  flex-col" anchorSelect="#clickable" clickable>
                <p className="text-sm">Sizning joylashgan manzilingiz <br /> haqidagi ma'lumot saqlab qolinsinmi</p>
                <div className="flex justify-center">
                    <button onClick={() => dispatch(clientAgreed())} className="p-2 bg-green-500 text-xs">YES</button>
                    <button onClick={()=>dispatch(clientDisAgreed())} className="p-2 bg-red-500 text-xs">NO</button>
                </div>
            </Tooltip>
        </div>
    );
};

export default Location;
