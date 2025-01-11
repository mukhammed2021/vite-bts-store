// import { useParams } from "react-router";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Product() {
  // const { id } = useParams();
  const isMobile = useIsMobile();

  return (
    <main>
      <section className="pb-4">
        <div className="container flex flex-col items-start gap-5 md:flex-row md:gap-x-8">
          <div className="basis-[60%]">
            <img
              src="/products/hoodie.png"
              alt="product"
              className="aspect-square size-full object-cover"
            />
          </div>
          <div className="basis-[40%]">
            <h2 className="mb-3 text-lg font-bold sm:text-xl md:text-2xl">
              [In the SEOM] HOODIE (IVORY)
            </h2>
            <p className="mb-[1.25rem] text-sm uppercase text-zinc-700 sm:text-base">
              merch
            </p>
            <p className="mb-5 text-base text-purple-700 sm:mb-[2.125rem] sm:text-lg">
              $12.30
            </p>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-purple-700 pb-[.875rem]">
              {isMobile ? (
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 focus-visible:ring-purple-700">
                      Purchase
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="flex items-end justify-between gap-4 px-4 py-2">
                      <div className="flex items-center">
                        <Button className="h-11 rounded-e-none rounded-s-sm border-y border-l border-zinc-200 bg-transparent hover:bg-zinc-200 focus-visible:ring-purple-700">
                          <Minus className="text-zinc-600" />
                        </Button>
                        <Input
                          min={1}
                          defaultValue={1}
                          type="number"
                          className="h-11 w-[3.75rem] rounded-none border-x-0 border-zinc-200 bg-transparent text-center focus-visible:ring-purple-700"
                        />
                        <Button className="h-11 rounded-e-sm rounded-s-none border-y border-r border-zinc-200 bg-transparent hover:bg-zinc-200 focus-visible:ring-purple-700">
                          <Plus className="text-zinc-600" />
                        </Button>
                      </div>
                      <p className="text-lg font-semibold text-purple-700">
                        $12.30
                      </p>
                    </div>
                    <DrawerFooter>
                      <Button
                        type="button"
                        className="h-11 bg-purple-600 hover:bg-purple-700 focus-visible:ring-purple-700"
                      >
                        <ShoppingCart />
                        <span>Add to Cart</span>
                      </Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              ) : (
                <>
                  <div className="flex items-center gap-5">
                    <Button
                      type="button"
                      className="h-11 bg-purple-600 hover:bg-purple-700 focus-visible:ring-purple-700"
                    >
                      <ShoppingCart />
                      <span>Add to Cart</span>
                    </Button>
                    <div className="flex items-center">
                      <Button className="h-11 rounded-e-none rounded-s-sm border-y border-l border-zinc-200 bg-transparent hover:bg-zinc-200 focus-visible:ring-purple-700">
                        <Minus className="text-zinc-600" />
                      </Button>
                      <Input
                        min={1}
                        defaultValue={1}
                        type="number"
                        className="h-11 w-[3.75rem] rounded-none border-x-0 border-zinc-200 bg-transparent text-center focus-visible:ring-purple-700"
                      />
                      <Button className="h-11 rounded-e-sm rounded-s-none border-y border-r border-zinc-200 bg-transparent hover:bg-zinc-200 focus-visible:ring-purple-700">
                        <Plus className="text-zinc-600" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-purple-700">
                    $12.30
                  </p>
                </>
              )}
            </div>
            <p className="text-sm md:text-base">
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
