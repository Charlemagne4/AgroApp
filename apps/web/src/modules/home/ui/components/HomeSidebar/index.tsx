import { Separator } from "@repo/ui/components/separator";
import { Sidebar, SidebarContent } from "@repo/ui/components/sidebar";
import MainSection from "../../sections/MainSection";

function HomeSidebar() {
  return (
    <div>
      <Sidebar className="z-40 border-none pt-16" collapsible="icon">
        <SidebarContent className="bg-background">
          <MainSection />
          <Separator />
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
export default HomeSidebar;
