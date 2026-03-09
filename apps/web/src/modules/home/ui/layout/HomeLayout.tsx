import type { ReactNode } from "react";
import { SidebarProvider } from "@repo/ui/components/sidebar";
import HomeNavbar from "../components/HomeNavbar.tsx";
import HomeSidebar from "../components/HomeSidebar/index";
interface HomeLayoutProps {
  children: ReactNode;
}
function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar />
        <div className="flex min-h-screen pt-16">
          <HomeSidebar />
          <main>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
export default HomeLayout;
