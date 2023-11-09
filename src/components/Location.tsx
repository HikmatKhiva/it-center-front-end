import { MdLocationOn, MdLocationOff } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../hooks/app";
import { useEffect } from "react";
import { clearUserInfo, hideAlert, handleSave } from "../redux/reducer/client";
import useLocation from "../hooks/useLocation";
import LocationButtons from "./LocationButtons";
const Location = () => {
  const { alertUser, userInfo } = useAppSelector((state) => state.client);
  const dispatch = useAppDispatch();
  const { location } = useLocation();
  useEffect(() => {
    setTimeout(() => dispatch(hideAlert()), 7000);
  }, [alertUser, dispatch]);
  const handleClose = () => dispatch(hideAlert());
  const handleClear = () => dispatch(clearUserInfo());
  const handleSaveIP = () => dispatch(handleSave(location));
  return (
    <div
      className={`fixed ${
        alertUser ? "top-5" : "-top-[10000px]"
      } transition-all duration-700 w-[90%] md:w-[350px] bg-gray-100 shadow-md dark:bg-light-dark py-4 rounded-md -translate-x-1/2 p-3 text-center dark:text-white left-1/2 z-[9999]`}
    >
      <button
        id="clickable"
        className="text-xl dark:text-white mt-1 location-btn"
        aria-labelledby="button"
        type="button"
        aria-label="button"
      >
        {alertUser ? <MdLocationOn /> : <MdLocationOff />}
      </button>
      <p className="text-base mb-2">
        {userInfo?.ip
          ? "Sizning joylashgan manzilingiz yashirmoqchimisiz"
          : "Sizning joylashgan manzilingiz haqidagi ma'lumot saqlab qolinsinmi"}
      </p>
      {userInfo?.ip ? (
        <LocationButtons funcOk={handleClear} funcCancel={handleClose} />
      ) : (
        <LocationButtons funcOk={handleSaveIP} funcCancel={handleClose} />
      )}
    </div>
  );
};
export default Location;