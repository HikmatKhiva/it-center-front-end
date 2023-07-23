import { Tooltip } from "react-tooltip";
import { useAppDispatch, useAppSelector } from "../hooks/app";
import { anonymous } from "../assets";
import { showAlert } from "../redux/reducer/client";
import { MdLocationOn } from "react-icons/md";
const NavLocation = () => {
  const { userInfo } = useAppSelector((state) => state.client);
  const dispatch = useAppDispatch();
  return (
    <div className="cursor-pointer" onClick={() => dispatch(showAlert())}>
      {userInfo?.ip ? (
        <>
          <MdLocationOn
            data-tooltip-id="ip"
            className="dark:text-white text-3xl outline-none "
          />
          <Tooltip id="ip" place="bottom">
            <span> Your Ip {userInfo?.ip}</span> <br />
            <span> Your City {userInfo?.city}</span>
          </Tooltip>
        </>
      ) : (
        <>
          <Tooltip id="anonymous" place="bottom">
            Anonymous
          </Tooltip>
          <img
            data-tooltip-id="anonymous"
            data-tooltip-content="Anonymous"
            className="w-8 h-8  cursor-pointer my-anchor-element"
            src={anonymous}
            alt="anonymousMask"
          />
        </>
      )}
    </div>
  );
};
export default NavLocation;