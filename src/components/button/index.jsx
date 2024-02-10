export const Button = ({ handleAddToCart }) => {
  return (
    <button
      className="bg-green h-10 w-40 rounded-3xl border-gray-700 text-white"
      onClick={handleAddToCart}
    >
      Add to cart
    </button>
  );
};
