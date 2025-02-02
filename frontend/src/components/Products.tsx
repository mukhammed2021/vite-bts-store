import { Products as ProductsType } from "@/hooks/use-fetch-products";
import Product from "./Product";

interface ProductsProps {
  products: ProductsType;
  sort: string;
}

export default function Products({ products, sort }: ProductsProps) {
  const sortPriceProductsByAsc = [...products].sort(
    (a, b) => a.price - b.price,
  );
  const sortPriceProductsByDesc = [...products].sort(
    (a, b) => b.price - a.price,
  );

  if (sort === "asc") {
    return sortPriceProductsByAsc.map((product) => (
      <Product key={product._id} {...product} />
    ));
  } else if (sort === "desc") {
    return sortPriceProductsByDesc.map((product) => (
      <Product key={product._id} {...product} />
    ));
  }

  return products.map((product) => <Product key={product._id} {...product} />);
}
