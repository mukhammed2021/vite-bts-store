import { useEffect, useState } from "react";
import { z } from "zod";

export const productSchema = z.object({
  _id: z.string(),
  name: z.string(),
  category: z.string(),
  price: z.number(),
  exclusive: z.boolean(),
  imageUrl: z.string(),
});

const productsSchema = z.array(productSchema);

export type Products = z.infer<typeof productsSchema>;

export function useFetchProducts() {
  const [products, setProducts] = useState<Products | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:3000/products");
        if (!res.ok) throw Error("Failed to fetch");

        const data = await res.json();

        const parsedProducts = productsSchema.parse(data);

        setProducts(parsedProducts);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, []);

  return { products, isLoading };
}
