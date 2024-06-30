import { TextRevealCard } from "@/components/ui/text-reveal-card";
const HeroSection = () => {
  return (
    <div className="container relative mx-auto py-10 z-20">
        <h1 className="md:text-7xl text-2xl font-bold dark:text-white">
          Sizning <span className="text-main">IT</span> karyerangizni <br /> shu
          yerdan boshlang!
        </h1>
        <TextRevealCard
          text="You know the business"
          revealText="I know the chemistry"
          className=""
        />
    </div>
  );
};
export default HeroSection;