import { useEffect, useState } from "react";
import { Type_IP } from "../types/types";
const useLocation = () => {
  const [location, setLocation] = useState<Type_IP | null>(null);
  const findLocation = async () => {
    try {
      setLocation(null);
      const response = await fetch("https://ipapi.co/json");
      const data = await response.json();
      setLocation(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    findLocation();
    return () => {
      findLocation();
    };
  }, []);
  return { location };
};
export default useLocation;
