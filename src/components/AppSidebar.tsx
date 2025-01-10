import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Separator } from "./ui/separator";

const categories = [
  "All Products",
  "Album",
  "Merch",
  "BT21",
  "In the SEOM by Fans",
  "TinyTAN",
  "EDU",
  "BOOK",
];

export default function AppSidebar() {
  return (
    <Sidebar className="!border-r-0 bg-background pt-[5.5625rem]">
      <SidebarContent>
        <SidebarGroup className="px-4 pt-1 max-md:pt-[1.125rem] md:pr-2">
          <form className="mb-[1.875rem] flex items-center gap-x-[.375rem]">
            <Input
              placeholder="Search for a product"
              className="h-[2.125rem] rounded-sm border-zinc-200 bg-transparent p-0 px-2 placeholder:text-zinc-300 focus-visible:ring-purple-700"
            />
            <Button className="size-[2.125rem] bg-zinc-500">
              <Search />
            </Button>
          </form>
          <SidebarGroupLabel className="mb-5 h-auto px-0 text-sm font-medium text-zinc-800">
            Categories
          </SidebarGroupLabel>
          <SidebarMenu className="mb-[1.125rem] border-l border-zinc-200">
            {categories.map((category) => (
              <SidebarMenuItem key={category}>
                <SidebarMenuButton className="rounded-none border-l-2 border-transparent px-4 text-zinc-600 hover:border-l-2 hover:border-zinc-800 hover:bg-transparent hover:text-zinc-800 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-purple-700 active:bg-transparent">
                  {category}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <div className="space-y-2 border-t border-zinc-300 pt-[.875rem]">
            <p className="text-sm uppercase tracking-widest text-zinc-800">
              PRICE FILTER
            </p>
            <div className="flex items-center justify-between gap-x-[.375rem]">
              <Input
                type="number"
                defaultValue={0}
                min={0}
                className="h-[2.125rem] w-full border-zinc-200 bg-transparent py-0 focus-visible:ring-purple-700"
              />
              <Separator className="w-[.5625rem] bg-zinc-600" />
              <Input
                type="number"
                defaultValue={10000}
                min={0}
                className="h-[2.125rem] w-full border-zinc-200 bg-transparent py-0 focus-visible:ring-purple-700"
              />
            </div>
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
