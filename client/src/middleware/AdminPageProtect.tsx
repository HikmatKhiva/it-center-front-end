import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/redux"; // Ensure this path is correct

const AdminPageProtect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { admin } = useAppSelector((state) => state.admin);
  useEffect(() => {
    if (!admin && location.pathname !== "/auth") {
      navigate("/auth");
    } else if (admin && location.pathname === "/auth") {
      navigate("/admin");
    }
  }, [admin, location.pathname]);
  return null;
};

export default AdminPageProtect;
