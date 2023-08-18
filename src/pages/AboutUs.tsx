import { Tilt } from "react-tilt";
import { logo } from "../assets"
import { defaultOptions } from "../settings";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AboutUs = () => {
  return (
    <section className="dark:bg-dark bg-gray-100">
      <div className="container mx-auto ">
        <div className="flex justify-center mt-5 select-none">
          <Tilt options={defaultOptions}>
            <LazyLoadImage effect="blur" className="w-96" src={logo} alt="logo" />
          </Tilt>
        </div>
        <p className="text-xl text-center my-5 dark:text-white">IT Center "Axborot texnologiyalari markazi" IT Park O'zbekiston hamkorligida yaratilgan.
          Bizning IT markazimizda 6 dan ortiq IT kurslari bo'lib hozirda yanada kurslarni va mentorlarni ko'paytirish rejalashtirilmoqda. O'quv markazimiz 2020-yil sentyabr oyida o'z faoliyatini boshlagan.
          Hozirda bizda Front End dasturlash, Back End dasturlash, Grafik dizayn, UI/UX dizayn va Web dizayn kurslari tashkil qilingan.</p>
      </div>
    </section>
  );
};
export default AboutUs;