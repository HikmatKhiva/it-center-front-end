import { Text } from "@mantine/core";
import DebtorStudents from "../components/student/DebtorStudents";
import AdminStats from "../sections/AdminStats";
const AdminHome = () => {
  return (
    <section>
      <Text mt="10" size="24px">
        IT-Khiva Boshqaruv Paneli
      </Text>
      <AdminStats />
      <DebtorStudents />
    </section>
  );
};
export default AdminHome;