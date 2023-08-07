import { ChangeEvent, FormEvent, useState } from "react";
import { client } from "../server/client";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { TabTitle } from "../utils/TabTitle";
import { IComplaint } from "../types/types";
const Complaint = () => {
  TabTitle("Shikoyat bo'limi");
  const [complaint, setComplaint] = useState<IComplaint>({
    course: "front-end",
    text: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const sanity_client = {
    _type: "complaint",
    course_name: complaint.course,
    message: complaint.text,
  };
  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    if (!complaint.text) toast.error("Iltimos xabar kiriting");
    if (!complaint.course) toast.error("Iltimos kursni tanlang");
    try {
      setLoading(true);
      await client.create(sanity_client);
      toast.success("Xabaringiz yuborildi");
      setComplaint({
        course: "front-end",
        text: "",
      });
      setLoading(false);
    } catch (err: any) {
      toast.error(err?.message);
      setLoading(false);
    }
  };
  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => setComplaint((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <>
      <motion.form
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="lg:w-[700px] mx-auto my-5 dark:bg-light-dark bg-white py-5 rounded-md"
      >
        <div className="lg:px-20 px-5">
          <div className="mb-2">
            <label
              htmlFor="course"
              className="inline-block text-lg mb-2 dark:text-white"
            >
              Qaysi kurs o'qtivchisi ekanini belgilang
            </label>
            <select
              id="course"
              name="course"
              onChange={handleChange}
              defaultValue={complaint.course}
              className="border w-full p-2 rounded-md outline-none focus:border-main"
            >
              <option value="front-end">Front End</option>
              <option value="kompyuter savodxonligi">
                Kompyuter Savodxonligi
              </option>
              <option value="english">IT English</option>
            </select>
          </div>
          <textarea
            onChange={handleChange}
            required
            name="text"
            autoComplete="off"
            value={complaint.text}
            placeholder="Shikoyatni matni ni kiriting "
            className="border rounded-md min-h-[150px] outline-none focus:border-main p-2 w-full resize-none"
          ></textarea>
          <button
            disabled={loading}
            type="submit"
            onClick={handleClick}
            className="opacity-90 hover:opacity-100 my-5 bg-main p-2 outline-none text-white rounded w-full"
          >
            Yuborish
          </button>
        </div>
      </motion.form>
    </>
  );
};
export default Complaint;
