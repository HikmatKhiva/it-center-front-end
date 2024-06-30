"use client"
import { loading } from "@/assets/lottie";
import ReactLottie from "lottie-react";
const Loading = () => {
  return (
    <div className="h-[100vh_-_65px] grid place-items-center">
      <div className="w-10 h-10">
        <ReactLottie
          style={{ width: "100%", height: "100%" }}
          animationData={loading}
        />
      </div>
    </div>
  );
};
export default Loading;