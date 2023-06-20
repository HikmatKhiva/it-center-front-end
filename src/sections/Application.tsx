import { useState, ChangeEvent, FormEvent } from "react";
import { client } from "../server/client";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { TabTitle } from "../utils/TabTitle";
const Application = () => {
  TabTitle('Kursga Yozilish')
  const [newStudent, setNewStudent] = useState({
    name: "",
    phone: "90",
    course: "front-end",
  });
  const [loading, setLoading] = useState(false);
  const sanity_newStudent = {
    _type: "application",
    name: newStudent.name,
    phone: newStudent.phone,
    course: newStudent.course,
  };
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) =>
    setNewStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    if (!newStudent.name) return toast.error("Iltimos ismingizni kiriting ");
    if (newStudent.phone.length === 11)
      return toast.error("Iltimos telefon raqamingni tekshirib ko'ring ");
    if (!newStudent.course) return toast.error("Iltimos kursni tanlang ");
    try {
      setLoading(true);
      await client.create(sanity_newStudent);
      setLoading(false);
      toast.success("Arizangiz qabul qilindi");
      setNewStudent({
        name: "",
        phone: "90",
        course: "front-end",
      });
    } catch (err: any) {
      toast.error("Nimadir xato iltimos qayta urinib ko'ring ", err.message);
      setLoading(false);
    }
  };
  return (
    <motion.form
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="lg:w-[700px] w-full mx-auto my-5 dark:bg-light-dark bg-white py-10 rounded-md">
      <div className="lg:px-20 px-5">
        <input
          type="text"
          onChange={handleChangeInput}
          name="name"
          value={newStudent.name}
          placeholder="Ismingizni Kirting"
          className="w-full border p-2 mb-3 rounded-md focus:border-main outline-none"
        />
        <div className="flex relative">
          <div className="text-center left-2 absolute">
            <span className="text-sm">UZ</span>
            <img
              className="w-[30px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/32px-Flag_of_Uzbekistan.svg.png"
              alt="flag uzbekistan"
            />
          </div>
          <input
            type="text"
            placeholder="Tel raqamingnizni kiriting"
            value={newStudent.phone}
            onChange={handleChangeInput}
            name="phone"
            className="w-full border pl-12 p-2 mb-3 rounded-md focus:border-main outline-none"
          />
        </div>
        <select className="border w-full p-2 rounded-md outline-none focus:border-main">
          <option value="front-end">Front End</option>
          <option value="kompyuter savodhonligi">Kompyuter Savodxonligi</option>
          <option value="english">IT English</option>
        </select>
        <button
          disabled={loading}
          onClick={handleClick}
          type="submit"
          className="my-5 bg-main p-2 outline-none text-white rounded w-full"
        >
          Yuborish
        </button>
      </div>
    </motion.form>
  );
};
export default Application;