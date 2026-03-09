import HomeLayout from "@/modules/home/ui/layout/HomeLayout";
import type { ReactNode } from "react";
interface layoutProps {
  children: ReactNode;
}
function layout({ children }: layoutProps) {
  return <HomeLayout>{children}</HomeLayout>;
}
export default layout;
