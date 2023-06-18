import { toast } from "react-toastify";
import { setClientInfo } from "../redux/reducer/setting";
import { I_IP } from "../types/types";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app";
const useGetApi = (): void => {
  const { clientAgree } = useAppSelector((state) => state.setting);
  const dispatch = useAppDispatch();
  useEffect(() => {
    let isMounted = true;
    const getClientApi = async () => {
      try {
        const data = await fetch("https://ipapi.co/json");
        const json: I_IP = await data.json();
        dispatch(setClientInfo(json));
      } catch (err: any) {
        toast.error("Something went wrong ", err.message);
      }
    };
    if (isMounted && clientAgree) {
      getClientApi();
    }
    return () => {
      isMounted = false;
    };
  }, [clientAgree, dispatch]);
};
export default useGetApi;