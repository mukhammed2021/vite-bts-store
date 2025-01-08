import { Link } from "react-router";
import { ChevronDown, Moon, ShoppingCart } from "lucide-react";
import { Separator } from "./ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-100 bg-white">
      <div className="container flex min-h-[3.75rem] items-center justify-between">
        <Link to="/">
          <img src="logo.svg" alt="logo" />
        </Link>
        <div className="flex items-center gap-3">
          <button type="button">
            <Moon />
          </button>
          <Separator orientation="vertical" className="h-4 bg-zinc-100" />
          <Link to="/" className="relative flex items-center gap-[.375rem]">
            <ShoppingCart className="shrink-0" />
            <p className="hidden min-[425px]:block">Cart (2)</p>
            <span className="absolute -right-2 -top-1 flex size-4 items-center justify-center rounded-full bg-purple-800 text-xs leading-none text-white min-[425px]:hidden">
              2
            </span>
          </Link>
          <Separator orientation="vertical" className="h-4 bg-zinc-100" />
          <Popover modal>
            <PopoverTrigger className="flex items-center gap-1">
              <span className="text-sm min-[425px]:text-base">Log In</span>
              <ChevronDown className="size-4" />
            </PopoverTrigger>
            <PopoverContent className="w-auto space-y-4 min-[425px]:w-52">
              <Link to="/" className="block w-full text-left">
                Log In
              </Link>
              <Link to="/" className="block w-full text-left">
                Sign In
              </Link>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
