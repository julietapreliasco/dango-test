import { Card } from "../../components/card";
import { mockedProducts } from "../../data/products";

export const Home = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="grid grid-cols-1 gap-10 p-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {mockedProducts.map((product) => (
          <Card
            key={product.id}
            name={product.soapName}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};
