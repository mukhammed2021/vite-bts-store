import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export function Cart() {
  return (
    <main>
      <section className="pb-4">
        <div className="container">
          <h1 className="mb-8 text-2xl font-bold">Cart</h1>
          <div className="mb-5 flex items-center gap-2">
            <Checkbox
              id="all"
              className="size-5 focus-visible:ring-purple-700 dark:focus-visible:ring-0"
            />
            <label htmlFor="all" className="cursor-pointer">
              All
            </label>
          </div>

          <div className="mb-6 space-y-5">
            <CartItem />
          </div>

          <div className="flex items-end justify-end gap-4">
            <p className="dark:text-zinc-200">
              Total: <span>$X</span>
            </p>
            <Button className="focus-visible:ring-purple-700 dark:focus-visible:ring-0">
              Buy all
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
