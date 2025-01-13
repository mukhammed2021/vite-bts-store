import { Link } from "react-router";
import { Checkbox } from "./ui/checkbox";
import QuantityProductPrice from "./QuantityProductPrice";
import { Button } from "./ui/button";

export default function CartItem() {
  return (
    <article className="flex items-start gap-3 rounded-lg p-5 shadow-lg dark:bg-zinc-900">
      <Checkbox className="focus-visible:ring-purple-700 dark:focus-visible:ring-0" />
      <div className="flex flex-auto flex-col items-start gap-5 sm:flex-row">
        <Link
          to="/product/1"
          className="shrink-0 basis-32 overflow-hidden rounded-md"
        >
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
  );
}
