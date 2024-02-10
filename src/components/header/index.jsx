import { Context } from "../../context";
import { useContext, useState } from "react";
import { Range } from "../range";
import { GiGinkgoLeaf } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { totalProducts } = useContext(Context);

  return (
    <>
      <div className="sticky top-0 z-50 flex h-20 items-center justify-between bg-french-gray px-6 2xl:px-16 ">
        <div className="flex gap-3">
          <h1 className="text-base sm:text-xl">Tourmaline</h1>
          <GiGinkgoLeaf size="21" color="#3D413A" />
        </div>
        <div className="flex gap-3">
          <a className="flex" href="#">
            <p className="hidden py-1 pr-4 sm:block">Shopping Cart</p>
            <div className="flex justify-center rounded-full bg-ebony px-3 py-1">
              <MdOutlineShoppingCart size="21" color="#3D413A " />
              <p className="px-1 text-sm text-white">{totalProducts}</p>
            </div>
          </a>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <MdOutlineKeyboardArrowDown size="21" />
            ) : (
              <MdOutlineKeyboardArrowUp size="21" />
            )}
          </button>
        </div>
      </div>
      <div className="top-20 z-50 flex justify-end sm:sticky 2xl:px-16">
        <Range isOpen={isOpen} />
      </div>
    </>
  );
};
