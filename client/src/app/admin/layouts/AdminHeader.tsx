import AdminUser from "../components/AdminUser";
import BackButton from "../components/BackButton";
const AdminHeader = () => {
  return (
    <header className="border-b h-[65px] px-10 border-[#262626] flex  justify-between items-center">
      <BackButton />
      <AdminUser />
    </header>
  );
};
export default AdminHeader;