import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface QuantityProductPriceProps {
  price: number | undefined;
}

export default function QuantityProductPrice({
  price,
}: QuantityProductPriceProps) {
  return (
    <div className="flex w-full items-end justify-between gap-x-5 gap-y-2">
      <div className="flex h-11 items-center">
        <Button className="h-full rounded-e-none rounded-s-sm border-y border-l border-zinc-200 bg-transparent hover:bg-zinc-200 focus-visible:ring-purple-700 dark:rounded-e-none dark:border-zinc-700 dark:hover:bg-zinc-800">
          <Minus className="text-zinc-600 dark:text-zinc-400" />
        </Button>
        <Input
          min={1}
          defaultValue={1}
          type="number"
          className="h-full w-[3.75rem] rounded-none border-x-0 border-zinc-200 bg-transparent text-center focus-visible:ring-purple-700 dark:border-zinc-700 dark:text-zinc-400"
        />
        <Button className="h-full rounded-e-sm rounded-s-none border-y border-r border-zinc-200 bg-transparent hover:bg-zinc-200 focus-visible:ring-purple-700 dark:rounded-s-none dark:border-zinc-700 dark:hover:bg-zinc-800">
          <Plus className="text-zinc-600 dark:text-zinc-400" />
        </Button>
      </div>
      <p className="text-lg font-semibold text-purple-700 dark:text-purple-500">
        ${price}
      </p>
    </div>
  );
}
