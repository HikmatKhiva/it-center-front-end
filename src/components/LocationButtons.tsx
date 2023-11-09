import { MouseEventHandler } from "react";
const LocationButtons = ({
  funcOk,
  funcCancel,
}: {
  funcOk: MouseEventHandler<HTMLButtonElement>;
  funcCancel: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className="flex justify-center gap-3">
      <button
        onClick={funcOk}
        aria-labelledby="button"
        aria-label="button"
        type="button"
        className="p-2 font-medium flex-grow bg-green-600 text-white rounded-md transition duration-300 hover:bg-green-500 text-xs"
      >
        Ha
      </button>
      <button
        onClick={funcCancel}
        aria-labelledby="button"
        type="button"
        aria-label="button"
        className="p-2 font-medium flex-grow bg-red-600 text-white rounded-md transition duration-300 hover:bg-red-500  text-xs"
      >
        Yo'q
      </button>
    </div>
  );
};
export default LocationButtons;