import { MdOutlineShoppingCart } from "react-icons/md";

export const Header = () => {
  return (
    <div className="flex h-20 items-center justify-between bg-light-pink px-6 2xl:px-16 ">
      <h1 className="text-xl sm:text-2xl">Tourmaline Products</h1>
      <div className="flex">
        <a className="flex" href="#">
          <p className="hidden pr-4 sm:block">Shopping Cart</p>
          <MdOutlineShoppingCart size={21} />
          <p className="text-sm">2</p>
        </a>
      </div>
    </div>
  );
};