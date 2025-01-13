import QuantityProductPrice from "@/components/QuantityProductPrice";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router";

export function Cart() {
  return (
    <main>
      <section className="pb-4">
        <div className="container">
          <h1 className="mb-8 text-2xl font-bold">Cart</h1>
          <div className="mb-5 flex items-center gap-2">
            <Checkbox id="all" className="size-5" />
            <label htmlFor="all" className="cursor-pointer">
              All
            </label>
          </div>

          <div className="mb-6 space-y-5">
            <article className="flex items-start gap-3 rounded-lg p-5 shadow-lg dark:bg-zinc-900">
              <Checkbox />
              <div className="flex flex-auto flex-col items-start gap-5 sm:flex-row">
                <Link to="/product/1" className="overflow-hidden rounded-md">
                  <img
                    src="/products/hoodie.png"
                    width={128}
                    height={128}
                    alt="[In the SEOM] HOODIE (IVORY)"
                    className="aspect-square size-32 object-cover"
                  />
                </Link>
                <div className="w-full flex-auto space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm dark:text-white min-[375px]:text-base">
                      <Link to="/product/1">[In the SEOM] HOODIE (IVORY)</Link>
                    </h3>
                    <span className="rounded-md bg-purple-700 px-2 py-1 text-xs uppercase tracking-widest text-white">
                      exclusive
                    </span>
                  </div>
                  <QuantityProductPrice />
                  <Button className="bg-purple-700 font-semibold hover:bg-purple-800 focus-visible:ring-purple-700 dark:text-zinc-100">
                    Buy X product
                  </Button>
                </div>
              </div>
            </article>
          </div>

          <div className="flex items-end justify-end gap-4">
            <p className="dark:text-zinc-200">
              Total: <span>$X</span>
            </p>
            <Button>Buy all</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
