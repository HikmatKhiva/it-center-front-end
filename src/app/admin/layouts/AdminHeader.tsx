import AdminUser from "../components/AdminUser";
const AdminHeader = () => {
  return (
    <header className="border-b h-[65px] px-10 border-[#262626] flex flex-col justify-center">
      <AdminUser />
    </header>
  );
};
export default AdminHeader;