//ui component
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatNavbar from "@/components/common/ChatNavbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { ReactNode } from "react";

//type
type DashboardProp = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardProp) {
  return (
    <SidebarProvider className="bg-gray-50" defaultOpen={true}>
      <ChatSidebar />
      <SidebarInset className="flex flex-col">
        <ChatNavbar />
        <div className="flex-1 overflow-auto p-4 bg-gray-50">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
