import { Link } from "react-router";
import { useTheme } from "./ThemeProvider";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <Link to="/">
      {theme === "light" || theme === "system" ? (
        <img src="/logo.svg" alt="logo" />
      ) : (
        <img src="/logo-dark.svg" alt="logo" />
      )}
    </Link>
  );
}
