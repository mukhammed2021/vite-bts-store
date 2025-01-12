import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "./app-layout";
import { Home } from "./pages/home";
import { Product } from "./pages/product";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
