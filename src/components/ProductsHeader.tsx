import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { SidebarTrigger } from "./ui/sidebar";

export default function ProductsHeader() {
  return (
    <div className="mb-[.875rem] flex items-center justify-between border-b border-purple-700 pb-4">
      <div className="flex items-center gap-x-[.625rem]">
        <SidebarTrigger className="size-6 md:hidden [&_svg]:size-6" />
        <h1 className="text-2xl font-semibold">All Products</h1>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden text-sm uppercase tracking-widest min-[425px]:block">
          sort by
        </span>
        <Select>
          <SelectTrigger className="gap-3 border border-zinc-300 p-2 text-sm">
            <SelectValue placeholder="Default" />
          </SelectTrigger>
          <SelectContent className="text-sm">
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="asc">Price (asc.)</SelectItem>
            <SelectItem value="desc">Price (desc.)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
