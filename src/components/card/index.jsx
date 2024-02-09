import { Button } from "../button";

export const Card = ({ name, price, description, image }) => {
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
        <h2 className="max-w-56 text-justify text-lg">{name}</h2>
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
