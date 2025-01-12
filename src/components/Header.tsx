import { Link } from "react-router";
import { ChevronDown, ShoppingCart } from "lucide-react";
import { Separator } from "./ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ModeToggle } from "./ModeToggle";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 mb-7 border-b border-zinc-100 bg-background px-4 dark:border-zinc-900 dark:bg-zinc-950">
      <div className="flex min-h-[3.75rem] items-center justify-between">
        <Logo />
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Separator
            orientation="vertical"
            className="h-4 bg-zinc-100 dark:bg-zinc-900"
          />
          <Link
            to="/"
            className="relative flex items-center gap-[.375rem] dark:text-zinc-300"
          >
            <ShoppingCart className="shrink-0" />
            <p className="hidden min-[425px]:block">Cart (2)</p>
            <span className="absolute -right-2 -top-1 flex size-4 items-center justify-center rounded-full bg-purple-800 text-xs leading-none text-white min-[425px]:hidden">
              2
            </span>
          </Link>
          <Separator
            orientation="vertical"
            className="h-4 bg-zinc-100 dark:bg-zinc-900"
          />
          <Popover modal>
            <PopoverTrigger className="flex items-center gap-1 dark:text-zinc-300">
              <span className="text-sm min-[425px]:text-base">Log In</span>
              <ChevronDown className="size-4" />
            </PopoverTrigger>
            <PopoverContent className="w-auto space-y-4 min-[425px]:w-52">
              <Link
                to="/"
                className="block w-full text-left dark:text-zinc-300"
              >
                Log In
              </Link>
              <Link
                to="/"
                className="block w-full text-left dark:text-zinc-300"
              >
                Sign In
              </Link>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
