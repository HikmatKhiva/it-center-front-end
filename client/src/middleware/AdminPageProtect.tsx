import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AdminPageProtect = () => {
  const navigate = useNavigate();
  const admin = sessionStorage.getItem("admin") || true;
  useEffect(() => {
    if (!admin) {
      navigate("/auth");
    }
  }, [admin]);
  return null;
};

export default AdminPageProtect;
