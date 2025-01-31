import { Container } from "@mantine/core";
import { lazy, Suspense } from "react";
import { TextAnimate } from "../animation/text-animation";
import { AnimatedSpan, TypingAnimation, Terminal } from "../animation/terminal";
const Spline = lazy(() => import("@splinetool/react-spline"));
const HomePage = () => {
  return (
    <section className="h-[calc(100vh-60px)] flex items-center justify-center">
      <Container size="xl" className="h-full w-full">
        <div className="flex justify-between h-full items-center w-full">
          <h2 className="text-5xl  flex-grow">
            Sizning <span className="text-[#7DBA28]">IT </span> karyerangizni
            <br />{" "}
            <TextAnimate animation="blurInUp" by="character">
              shu yerdan boshlang!
            </TextAnimate>
          </h2>
          <Suspense fallback={<h2>Loading</h2>}>
            <Spline
              style={{ width: "50%", height: "100%" }}
              className="lg:flex hidden h-full w-1/2"
              scene="https://prod.spline.design/xqVtEciHtU0-h29j/scene.splinecode"
            />
          </Suspense>
        </div>

        {/* <Terminal>
          <TypingAnimation >
            &gt; npm it-khiva o'quv markazidan hisob yaratish
          </TypingAnimation>
          <TypingAnimation delay={4000}>
            &gt; O'quvchini ismi: Hikmat
          </TypingAnimation>
          <TypingAnimation delay={7000}>
            &gt; Telefon raqami:+99888-888-88-88
          </TypingAnimation>
          <TypingAnimation delay={9000}>
            &gt; O'quvchiga kurs tanlash Front-End
          </TypingAnimation>
          <TypingAnimation delay={12000}>
            &gt; O'quvchiga o'qituvchi tanlash:Abbos
          </TypingAnimation>
          <TypingAnimation delay={14000}>&gt; O`quvchi ma`lumotlarini bazaga kiritish...</TypingAnimation>
          <AnimatedSpan delay={16000} className="text-green-500">
            <span>✔ Ma'lumotlar bazaga saqlandi.</span>
          </AnimatedSpan>

   
        </Terminal> */}
      </Container>
    </section>
  );
};
export default HomePage;
