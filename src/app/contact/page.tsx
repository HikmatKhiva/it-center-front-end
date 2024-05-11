import { Tabs } from "@/components/ui/tabs";
import Login from "./components/Login";
import Register from "./components/Register";
const ContactPage = () => {
  const tabs = [
    {
      title: "Login",
      value: "login",
      content: <Login />,
    },
    // {
    //   title: "Register",
    //   value: "register",
    //   content: <Register />,
    // },
  ];
  return (
    <main>
      <div className="container mx-auto py-10">
        {/* <Tabs tabs={tabs} /> */}
        <Login />
      </div>
    </main>
  );
};
export default ContactPage;
