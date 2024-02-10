import { useContext } from "react";
import { Context } from "../../context";

export const Range = ({ isOpen }) => {
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
    <>
      <div className="h-12">
        {isOpen && (
          <div className="flex flex-col items-center rounded-bl-2xl bg-french-gray bg-opacity-85 px-6 2xl:rounded-b-2xl">
            <input
              type="range"
              className="my-2 h-1.5 w-24 cursor-pointer accent-green"
              id="fontSizeRange"
              onChange={handleFontSizeChange}
              min="10"
              max="100"
              step="10"
            />
            <label htmlFor="fontSizeRange" className="text-xs text-slate-600">
              Edit font size
            </label>
          </div>
        )}
      </div>
    </>
  );
};
