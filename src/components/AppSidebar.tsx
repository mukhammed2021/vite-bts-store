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
              className="h-[2.125rem] rounded-sm border-zinc-200 bg-transparent p-0 px-2 placeholder:text-zinc-300 focus-visible:ring-purple-700 dark:border-zinc-800 dark:placeholder:text-zinc-700"
            />
            <Button className="size-[2.125rem] bg-zinc-500 focus-visible:ring-purple-700 dark:bg-zinc-600 dark:focus-visible:outline-none">
              <Search />
            </Button>
          </form>
          <SidebarGroupLabel className="mb-5 h-auto px-0 text-sm font-medium text-zinc-800 dark:text-zinc-300">
            Categories
          </SidebarGroupLabel>
          <SidebarMenu className="mb-[1.125rem] border-l border-l-zinc-200 dark:border-l-zinc-800">
            {categories.map((category) => (
              <SidebarMenuItem key={category}>
                <SidebarMenuButton className="rounded-none border-l-2 border-transparent px-4 text-zinc-600 hover:border-l-2 hover:border-zinc-800 hover:bg-transparent hover:text-zinc-800 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-purple-700 active:bg-transparent dark:rounded-none dark:text-zinc-500 dark:hover:border-l-zinc-400 dark:hover:text-zinc-400 dark:focus-visible:rounded-sm dark:focus-visible:outline-none">
                  {category}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <div className="space-y-2 border-t border-t-zinc-300 pt-[.875rem] dark:border-t-zinc-700">
            <p className="text-sm uppercase tracking-widest text-zinc-800 dark:text-zinc-300">
              PRICE FILTER
            </p>
            <div className="flex items-center justify-between gap-x-[.375rem]">
              <Input
                type="number"
                defaultValue={0}
                min={0}
                className="h-[2.125rem] w-full border-zinc-200 bg-transparent py-0 focus-visible:ring-purple-700 dark:border-zinc-800 dark:text-zinc-400"
              />
              <Separator className="w-[.5625rem] bg-zinc-600 dark:bg-zinc-400" />
              <Input
                type="number"
                defaultValue={10000}
                min={0}
                className="h-[2.125rem] w-full border-zinc-200 bg-transparent py-0 focus-visible:ring-purple-700 dark:border-zinc-800 dark:text-zinc-400"
              />
            </div>
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
