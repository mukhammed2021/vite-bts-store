import Header from "@/components/Header";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <>
      <Header />
      <div className="page">
        <Outlet />
      </div>
    </>
  );
}
