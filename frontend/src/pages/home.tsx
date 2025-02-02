import AppSidebar from "@/components/AppSidebar";
import Main from "@/components/main";
import { SidebarProvider } from "@/components/ui/sidebar";

export function Home() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <Main />
      </SidebarProvider>
    </>
  );
}
