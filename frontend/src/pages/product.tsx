import { useParams } from "react-router";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import QuantityProductPrice from "@/components/QuantityProductPrice";
import { useFetchProduct } from "@/hooks/use-fetch-product";

export function Product() {
  const { id } = useParams();
  const { product, isLoading } = useFetchProduct(id);
  const isMobile = useIsMobile();

  if (isLoading)
    return (
      <div className="flex min-h-svh w-full flex-col items-center justify-center">
        Loading...
      </div>
    );

  return (
    <main>
      <section className="pb-4">
        <div className="container flex flex-col items-start gap-5 md:flex-row md:gap-x-8">
          <div className="basis-1/2">
            <img
              src={`http://localhost:3000${product?.imageUrl}`}
              alt="product"
              className="aspect-square size-full object-cover"
            />
          </div>
          <div className="basis-1/2">
            <h2 className="mb-3 text-lg font-bold dark:text-zinc-100 sm:text-xl md:text-2xl">
              {product?.name}
            </h2>
            <p className="mb-[1.25rem] text-sm uppercase text-zinc-700 dark:text-zinc-400 sm:text-base">
              {product?.category}
            </p>
            <p className="mb-5 text-base text-purple-700 dark:text-purple-500 sm:mb-[2.125rem] sm:text-lg">
              ${product?.price}
            </p>
            <div className="mb-5 flex items-end gap-5 border-b border-b-purple-700 pb-[.875rem] dark:border-b-purple-400">
              {isMobile ? (
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 focus-visible:ring-purple-700 dark:text-zinc-100">
                      Purchase
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Buy</DrawerTitle>
                      <DrawerDescription>{product?.name}</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex items-end justify-between gap-4 px-4 py-2">
                      <QuantityProductPrice price={product?.price} />
                    </div>
                    <DrawerFooter>
                      <Button
                        type="button"
                        className="h-11 bg-purple-600 hover:bg-purple-700 focus-visible:ring-purple-700 dark:text-zinc-100"
                      >
                        <ShoppingCart />
                        <span>Add to Cart</span>
                      </Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              ) : (
                <>
                  <Button
                    type="button"
                    className="h-11 bg-purple-600 text-zinc-100 hover:bg-purple-700 focus-visible:ring-purple-700"
                  >
                    <ShoppingCart />
                    <span>Add to Cart</span>
                  </Button>
                  <QuantityProductPrice price={product?.price} />
                </>
              )}
            </div>
            <p className="text-sm dark:text-zinc-300 md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
