import { useContext } from "react";
import { Context } from "../context";

export const Range = () => {
  const { setFontSize } = useContext(Context);

  const sizeBreakpoints = [
    { max: 20, sizeClass: "text-xs" },
    { max: 40, sizeClass: "text-sm" },
    { max: 60, sizeClass: "text-base" },
    { max: 80, sizeClass: "text-lg" },
    { max: 100, sizeClass: "text-xl" },
  ];

  const handleFontSizeChange = (event) => {
    const fontSizeValue = event.target.value;

    const { sizeClass } = sizeBreakpoints.find((bp) => fontSizeValue <= bp.max);

    setFontSize(sizeClass);
  };

  return (
    <div className="flex h-12 flex-col rounded-b-2xl bg-light-pink px-6">
      <input
        type="range"
        className="my-2 h-1.5 w-20 cursor-pointer appearance-none rounded-lg border-transparent bg-fuchsia-950"
        id="customRange"
        onChange={handleFontSizeChange}
        min="10"
        max="100"
        step="10"
      />
      <label htmlFor="customRange" className="text-xs text-gray-500">
        Edit font size
      </label>
    </div>
  );
};
