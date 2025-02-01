import { useFetchProducts } from "@/hooks/use-fetch-products";
import Product from "./Product";
import ProductsHeader from "./ProductsHeader";

export default function Products() {
  const { products, isLoading } = useFetchProducts();

  if (isLoading)
    return (
      <div className="flex min-h-full w-full items-center justify-center">
        Loading...
      </div>
    );

  return (
    <main className="flex-auto pl-4 pr-4 md:pl-2">
      <ProductsHeader />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-[.625rem] pb-4">
        {products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </main>
  );
}
