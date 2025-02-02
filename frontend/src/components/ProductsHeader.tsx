import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { SidebarTrigger } from "./ui/sidebar";

interface ProductsHeaderProps {
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProductsHeader({ setSort }: ProductsHeaderProps) {
  return (
    <div className="mb-[.875rem] flex items-center justify-between border-b border-b-purple-700 pb-4 dark:border-b-purple-400">
      <div className="flex items-center gap-x-[.625rem]">
        <SidebarTrigger className="size-6 md:hidden [&_svg]:size-6" />
        <h1 className="text-2xl font-semibold dark:text-zinc-100">
          All Products
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden text-sm uppercase tracking-widest dark:text-zinc-300 min-[425px]:block">
          sort by
        </span>
        <Select
          defaultValue="default"
          onValueChange={(value: string) => setSort(value)}
        >
          <SelectTrigger className="gap-3 border border-zinc-300 p-2 text-sm dark:border-zinc-700 dark:text-zinc-300">
            <SelectValue placeholder="Default" />
          </SelectTrigger>
          <SelectContent className="text-sm dark:text-zinc-300">
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="asc">Price (asc.)</SelectItem>
            <SelectItem value="desc">Price (desc.)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
