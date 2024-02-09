import { useState } from "react";
import { Button } from "../button";
import { Input } from "../input";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

export const Card = ({ name, price, description, image }) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(name);

  const handleEdit = (event) => {
    const newTitle = event.target.value;
    setNewTitle(newTitle);
  };

  return (
    <article className="max-w-80 rounded-md border-2  border-gray-300 p-4 pt-6 ">
      {image && (
        <img
          className="w-full object-cover"
          src={image}
          alt={`Picture of ${name}`}
        />
      )}
      <div className="pt-6">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h2 className="max-w-56 overflow-hidden text-justify text-lg">
              {newTitle}
            </h2>
            <button className="m-2" onClick={() => setEditMode(!editMode)}>
              {editMode ? <FaCheck /> : <MdEdit />}
            </button>
          </div>
          {editMode && (
            <div className="my-2 flex gap-3 py-1">
              <Input handleEdit={handleEdit} />
            </div>
          )}
        </div>
        <div className="flex py-4">
          <p className="font-semibold">{`$${price}`}</p>
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="mx-2 w-10 border"
          />
        </div>
        <p className="h-44 text-justify">{description}</p>
        <div className="flex flex-col items-center pt-8">
          <Button />
          <a className="p-2 underline" href="#">
            Learn more
          </a>
        </div>
      </div>
    </article>
  );
};
