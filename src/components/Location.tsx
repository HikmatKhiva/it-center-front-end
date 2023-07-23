import { MdLocationOn, MdLocationOff } from "react-icons/md";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../hooks/app";
import { useEffect } from "react";
import { clearUserInfo, handleIP, hideAlert } from "../redux/reducer/client";
import { toast } from "react-toastify";
import { client } from "../server/client";
const Location = () => {
  const { alertUser, userInfo } = useAppSelector((state) => state.client);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => dispatch(hideAlert()), 7000);
  }, [alertUser]);
  const handleClose = () => dispatch(hideAlert());
  const handleClear = () => {
    dispatch(clearUserInfo());
    dispatch(hideAlert());
  };
  const handleSaveIp = async () => {
    try {
      const req = await fetch("https://ipapi.co/json");
      const data = await req.json();
      if (req.ok && data) {
        dispatch(handleIP(data));
        const newClient = {
          _type: "clientInfo",
          country: data?.country_name,
          city: data?.city,
          ip: data?.ip,
          network: data?.network,
          lat: data?.latitude,
          lng: data?.longitude,
          country_number: data?.country_calling_code,
        };
        client.create(newClient);
        toast.success(`Sizning ip manzilingiz saqlandi `);
      }
      dispatch(hideAlert());
    } catch (err) {
      toast.error(`Something went wrong ${err}`);
      dispatch(hideAlert());
    }
  };
  return (
    <div
      className={`fixed ${
        alertUser ? "top-5" : "-top-[10000px]"
      } transition-all duration-700 w-[90%] md:w-96 bg-gray-100 shadow-md dark:bg-light-dark py-4 rounded-md -translate-x-1/2 p-3 text-center dark:text-white left-1/2 z-[9999]`}
    >
      <motion.button
        id="clickable"
        whileTap={{ scale: [1, 0.6] }}
        className="text-xl dark:text-white mt-1 location-btn"
        aria-labelledby="button"
        type="button"
        aria-label="button"
      >
        {alertUser ? <MdLocationOn /> : <MdLocationOff />}
      </motion.button>
      {userInfo.ip ? (
        <p className="text-base">
          Sizning joylashgan manzilingiz <br /> yashirmoqchimisiz ?
        </p>
      ) : (
        <p className="text-base">
          Sizning joylashgan manzilingiz <br /> haqidagi ma'lumot saqlab
          qolinsinmi ?
        </p>
      )}
      {userInfo.ip ? (
        <div className="flex justify-center gap-3">
          <button
            onClick={handleClear}
            aria-labelledby="button"
            aria-label="button"
            type="button"
            className="p-2 font-medium flex-grow bg-green-600 text-white rounded-md transition duration-300 hover:bg-green-500 text-xs"
          >
            Ha
          </button>
          <button
            onClick={handleClose}
            aria-labelledby="button"
            type="button"
            aria-label="button"
            className="p-2 font-medium flex-grow bg-red-600 text-white rounded-md transition duration-300 hover:bg-red-500  text-xs"
          >
            Yo'q
          </button>
        </div>
      ) : (
        <div className="flex justify-center gap-3">
          <button
            onClick={handleSaveIp}
            aria-labelledby="button"
            aria-label="button"
            type="button"
            className="p-2 font-medium flex-grow bg-green-600 text-white rounded-md transition duration-300 hover:bg-green-500 text-xs"
          >
            Ha
          </button>
          <button
            onClick={handleClose}
            aria-labelledby="button"
            type="button"
            aria-label="button"
            className="p-2 font-medium flex-grow bg-red-600 text-white rounded-md transition duration-300 hover:bg-red-500  text-xs"
          >
            Yo'q
          </button>
        </div>
      )}
    </div>
  );
};
export default Location;