import { BsFillPersonPlusFill, BsEnvelope } from "react-icons/bs";
import { useState } from "react";
import { Application, Complaint } from "../components";
const Contact = () => {
  const [tab, setTab] = useState("application");
  return (
    <section id="contact" className="dark:bg-dark bg-gray-100">
      <div className="title dark:text-main py-5 flex items-center flex-col">
        <h2 className="text-3xl capitalize">
          {tab === "application" ? "Kursga yozilish" : "Shikoyat"}
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center gap-5 dark:text-main">
          <button onClick={() => setTab("application")} className="text-4xl ">
            <BsFillPersonPlusFill />
          </button>
          <button onClick={() => setTab("complaint")} className="text-4xl ">
            <BsEnvelope />
          </button>
        </div>
        {tab === "application" ? <Application /> : <Complaint />}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d145.6747594151479!2d60.36243840749663!3d41.38718262155303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfa576602efcc9%3A0xc7bd877c58d3fca0!2sIT%20CENTER!5e1!3m2!1sen!2s!4v1685876017405!5m2!1sen!2s"
          className="w-full my-5 h-36"
          allowFullScreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};
export default Contact;
