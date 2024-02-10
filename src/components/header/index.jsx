import { MdOutlineShoppingCart } from "react-icons/md";
import { Range } from "../range";
import { Context } from "../../context";
import { useContext } from "react";
import { GiGinkgoLeaf } from "react-icons/gi";

export const Header = () => {
  const { totalProducts } = useContext(Context);

  return (
    <>
      <div className="bg-french-gray sticky top-0 z-50 flex h-20 items-center justify-between px-6 2xl:px-16 ">
        <div className="flex gap-3">
          <h1 className="text-base sm:text-xl">Tourmaline</h1>
          <GiGinkgoLeaf size="21" color="#3D413A" />
        </div>
        <a className="flex" href="#">
          <p className="hidden py-1 pr-4 sm:block">Shopping Cart</p>
          <div className="bg-ebony flex  justify-center rounded-full px-3 py-1">
            <MdOutlineShoppingCart size="21" color="#3D413A " />
            <p className="px-1 text-sm text-white">{totalProducts}</p>
          </div>
        </a>
      </div>
      <div className="top-20 z-50 flex justify-end sm:sticky 2xl:px-16">
        <Range />
      </div>
    </>
  );
};
