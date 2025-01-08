import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function ProductsHeader() {
  return (
    <div className="mb-[.875rem] flex items-center justify-between border-b border-purple-700 pb-4">
      <h1 className="text-2xl font-semibold">All Products</h1>
      <div className="flex items-center gap-2">
        <span className="text-sm uppercase tracking-widest">sort by</span>
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
