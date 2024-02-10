import { useState } from "react";
import { Button } from "../button";
import { Input } from "../input";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { Context } from "../../context";
import { useContext } from "react";

export const Card = ({ name, price, description, image }) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(name);
  const [productAmount, setProductAmount] = useState(1);
  const { fontSize, setTotalProducts } = useContext(Context);

  const handleEdit = (event) => {
    const newTitle = event.target.value;
    setNewTitle(newTitle);
  };

  const handlePriceChange = (event) => {
    const amountValue = event.target.value;
    setProductAmount(parseInt(amountValue, 10));
  };

  const handleAddToCart = () => {
    setTotalProducts((prevTotal) => prevTotal + productAmount);
    setProductAmount(1);
  };

  return (
    <article className="hover:border-ebony max-w-80 rounded-md border-2  border-gray-300 p-4 pt-6 ">
      {image && (
        <img
          className="w-full object-cover opacity-85"
          src={image}
          alt={`Picture of ${name}`}
        />
      )}
      <div className="pt-6">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h2
              className={`min-h-16 max-w-56 overflow-hidden break-words text-justify ${fontSize}`}
            >
              {newTitle}
            </h2>
            <button className="m-2" onClick={() => setEditMode(!editMode)}>
              {editMode ? (
                <FaCheck color="#3D413A" />
              ) : (
                <MdEdit color="#3D413A" />
              )}
            </button>
          </div>
          {editMode && (
            <div className="my-2 flex gap-3 py-1">
              <Input handleEdit={handleEdit} />
            </div>
          )}
        </div>
        <div className="flex py-4">
          <p className="font-semibold">{`$${productAmount * price}`}</p>
          <input
            type="number"
            min="1"
            max="20"
            defaultValue="1"
            value={productAmount}
            onChange={handlePriceChange}
            onKeyDown={(event) => {
              event.preventDefault();
            }}
            className="mx-2 w-10 border"
          />
        </div>
        <p className="h-44 overflow-clip text-justify">{description}</p>
        <div className="flex flex-col items-center pt-8">
          <Button handleAddToCart={handleAddToCart} />
          <a className="p-2 underline" href="#">
            Learn more
          </a>
        </div>
      </div>
    </article>
  );
};
