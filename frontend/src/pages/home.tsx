import AppSidebar from "@/components/AppSidebar";
import Products from "@/components/Products";
import { SidebarProvider } from "@/components/ui/sidebar";

export function Home() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <Products />
      </SidebarProvider>
    </>
  );
}
