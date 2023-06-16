import { BsFillPersonPlusFill, BsEnvelope } from "react-icons/bs";
import { useState } from "react";
import { Application, Complaint, Map } from "../sections";
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
          <button onClick={() => setTab("application")} className="text-4xl outline-none">
            <BsFillPersonPlusFill />
          </button>
          <button onClick={() => setTab("complaint")} className="text-4xl outline-none">
            <BsEnvelope />
          </button>
        </div>
        {tab === "application" ? <Application /> : <Complaint />}
        <Map />
      </div>
    </section>
  );
};

export default Contact;