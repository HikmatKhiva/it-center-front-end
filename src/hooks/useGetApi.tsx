import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./app"
import { setClientInfo } from "../redux/reducer/setting";
import { toast } from "react-toastify"
import { I_IP } from "../types/types";
const useGetApi = ():void => {
  const { clientAgree } = useAppSelector(state => state.setting);
  const dispatch = useAppDispatch()
  useEffect(() => {
    let isMount = true;
    const getClientApi = async (): Promise<void> => {
      try {
        const data = await fetch("https://ipapi.co/json");
        const json: I_IP = await data.json();
        dispatch(setClientInfo(json));
      } catch (err: any) {
        toast.error("Something went wrong ", err.message);
      }
    };
    if (clientAgree) {
      getClientApi();
    }
    return () => {
      isMount = false;
    };
  }, [clientAgree, dispatch]);
}
export default useGetApi;