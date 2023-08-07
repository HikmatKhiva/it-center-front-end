import { lazy, Suspense } from "react";
import { PageLoading } from "../loadings";
const Spline = lazy(() => import("@splinetool/react-spline"));
const Hero = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Spline
        className="hero-animate lg:flex hidden"
        scene="https://prod.spline.design/xqVtEciHtU0-h29j/scene.splinecode"
      />
    </Suspense>
  );
};
export default Hero;