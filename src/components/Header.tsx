import { Link } from "react-router";
import { Moon, ShoppingCart } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Header() {
  return (
    <header className="border border-zinc-100">
      <div className="container flex min-h-[3.75rem] items-center justify-between">
        <Link to="/">
          <img src="logo.svg" alt="logo" />
        </Link>
        <div className="flex items-center gap-3">
          <button type="button">
            <Moon />
          </button>
          <Separator orientation="vertical" className="h-4 bg-zinc-100" />
          <button
            type="button"
            className="relative flex items-center gap-[.375rem]"
          >
            <ShoppingCart className="shrink-0" />
            <p className="hidden min-[425px]:block">Cart (2)</p>
            <span className="absolute -right-2 -top-1 flex size-4 items-center justify-center rounded-full bg-purple-800 text-xs leading-none text-white min-[425px]:hidden">
              2
            </span>
          </button>
          <Separator orientation="vertical" className="h-4 bg-zinc-100" />
          <Select>
            <SelectTrigger>
              <SelectValue
                placeholder="Log In"
                className="text-sm min-[425px]:text-base"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="login">Log In</SelectItem>
              <SelectItem value="signup">Sign Up</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}
