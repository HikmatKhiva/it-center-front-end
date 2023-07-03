import { Tilt } from "react-tilt";
import { Logo } from "../animationElement";
import { itCenter } from "../assets";
import { Link } from "react-router-dom";
import { logo } from "../settings";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AboutUs = () => {
  return (
    <section id="about-us" className="py-5 bg-gray-100 overflow-x-hiddenT dark:bg-dark">
      <div className="container mx-auto">
        <div className="title py-5 dark:text-white flex items-center flex-col">
          <h2 className="text-3xl capitalize">Biz haqimizda</h2>
        </div>
        <div className="flex py-2 lg:justify-between justify-center flex-wrap lg:gap-20 items-center gap-10">
          <div className="xl:w-[40%] md:w-[30%] flex-grow">
            <Tilt options={logo}>
              <Logo className="float-left mr-2" />
            </Tilt>
            <p className="tracking-wide text-sm lg:text-xl dark:text-white">
              Prezidentimizning 5 ta tashabbusining uchinchi tashabbusini
              amalaga oshirish maqsadida "Aholi va yoshlar tomonidan kompyuter
              texnologiyalari va Internetdan samarali foydalanishni tashkil
              etish" asosida tashkil qilingan!
            </p>
            <div className="clear-both"></div>
            <Link
              className="capitalize hover:opacity-100 opacity-90 transition-all duration-300 bg-main text-white mt-5 inline-block py-2 px-4 rounded-lg"
              to="/about-us"
            >
              batafsil o'qish
            </Link>
          </div>
          <Tilt op>
            <LazyLoadImage
              effect="blur"
              className="xl:w-[500px] md:w-[400px] w-full object-cover lg:rounded-tr-full rounded-xl  max-h-[350px] rounded-br-2xl lg:rounded-br-none lg:rounded-bl-full"
              src={itCenter}
              alt="it-center"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
