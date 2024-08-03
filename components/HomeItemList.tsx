import { Product } from "@/types/product";
import Card from "./Card";

const productList: Product[] = [
  {
    id: "1",
    name: "Product 1",
    description: "Product 1 description",
    image: "product-1.jpg",
    price: 100,
    rating: 4,
    discount: 10,
  },
  {
    id: "2",
    name: "Product 2",
    description: "Product 2 description",
    image: "product-2.jpg",
    price: 200,
    rating: 5,
    discount: 20,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Product 3 description",
    image: "product-3.jpg",
    price: 300,
    rating: 3,
    discount: 30,
  },
  {
    id: "4",
    name: "Product 4",
    description: "Product 4 description",
    image: "product-4.jpg",
    price: 400,
    rating: 2,
    discount: 40,
  },
  {
    id: "5",
    name: "Product 5",
    description: "Product 5 description",
    image: "product-5.jpg",
    price: 500,
    rating: 1,
    discount: 50,
  },
];

export default function HomeItemList() {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2">
      <>
        {productList.map((product) => {
          <Card
            key={product.id}
            {...product}
            href={`/product/${product.id}`}
          />;
        })}
      </>
    </section>
  );
}
