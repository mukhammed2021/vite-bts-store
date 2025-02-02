import { useState } from "react";
import Products from "./Products";
import ProductsHeader from "./ProductsHeader";
import { useFetchProducts } from "@/hooks/use-fetch-products";

export default function Main() {
  const [sort, setSort] = useState("");
  const { products, isLoading } = useFetchProducts();

  if (isLoading)
    return (
      <div className="flex min-h-full w-full items-center justify-center">
        Loading...
      </div>
    );

  return (
    <main className="flex-auto pl-4 pr-4 md:pl-2">
      <ProductsHeader setSort={setSort} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-[.625rem] pb-4">
        <Products products={products} sort={sort} />
      </div>
    </main>
  );
}
