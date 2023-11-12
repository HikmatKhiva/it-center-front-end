import { RiEmotionSadFill } from "react-icons/ri";
import { useRouteError } from "react-router-dom";
import { ErrorResponse } from "../types/types";
const Error = () => {
  const error: unknown = useRouteError();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errorCheck = (error: any): error is ErrorResponse =>
    "data" in error && "status" in error && "statusText" in error;
  if (errorCheck(error)) {
    return (
      <section className="bg-gray-100 dark:bg-dark w-full px-16 md:px-0 flex-grow flex items-center justify-center">
        <div className="bg-white border dark:bg-light-dark dark:border-main border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
          <RiEmotionSadFill className="text-6xl dark:text-main" />
          <p className="text-xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
            Qandaydir Muamo bor qayta urinib ko'ring
          </p>
          <p className="text-red-500 mt-8 py-2  text-center">
            {error.message}.
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-gray-100 dark:bg-dark w-full px-16 md:px-0 flex-grow flex items-center justify-center">
      <div className="bg-white border dark:bg-light-dark dark:border-main border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <RiEmotionSadFill className="text-6xl dark:text-main" />
        <p className="text-xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
          Qandaydir Muamo bor qayta urinib ko'ring
        </p>
        <p className="text-red-500 mt-8 py-2  text-center">
          An error occurred.
        </p>
      </div>
    </section>
  );
};
export default Error;