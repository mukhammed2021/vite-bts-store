import Product from "./Product";
import ProductsHeader from "./ProductsHeader";

const products = [
  {
    id: 1,
    src: "products/2_cool_4_skool.jpeg",
    title: "Single Album [2 COOL 4 SKOOL]",
    category: "album",
    price: 8.52,
    exclusive: false,
  },
  {
    id: 2,
    src: "products/dark_and_wild.jpeg",
    title: "BTS 1st Album [Dark & Wild]",
    category: "album",
    price: 12.21,
    exclusive: false,
  },
  {
    id: 3,
    src: "products/orul82.jpeg",
    title: "BTS 1st Mini Album[O!RUL8,2?]",
    category: "album",
    price: 9.75,
    exclusive: false,
  },
  {
    id: 4,
    src: "products/skool_luv_affair.jpeg",
    title: "BTS 2nd Mini Album[Skool Luv Affair]",
    category: "album",
    price: 9.75,
    exclusive: false,
  },
  {
    id: 5,
    src: "products/Beanie.jpeg",
    title: "Beanie",
    category: "merch",
    price: 34.44,
    exclusive: true,
  },
];

export default function Products() {
  return (
    <main>
      <ProductsHeader />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-[.625rem] pb-4">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
