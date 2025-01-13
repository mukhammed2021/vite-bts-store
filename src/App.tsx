import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "./app-layout";
import { Home } from "./pages/home";
import { Product } from "./pages/product";
import { ThemeProvider } from "./components/ThemeProvider";
import { Cart } from "./pages/cart";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
