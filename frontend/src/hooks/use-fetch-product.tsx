import { useEffect, useState } from "react";
import { z } from "zod";
import { productSchema } from "./use-fetch-products";

type Id = string | undefined;

type Product = z.infer<typeof productSchema>;

export function useFetchProduct(id: Id) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getProduct() {
      try {
        setIsLoading(true);
        const res = await fetch(`http://localhost:3000/products/${id}`);
        if (!res.ok) throw Error("Failed to fetch");

        const data = await res.json();

        const parsedProducts = productSchema.parse(data);

        setProduct(parsedProducts);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    getProduct();
  }, [id]);

  return { product, isLoading };
}
