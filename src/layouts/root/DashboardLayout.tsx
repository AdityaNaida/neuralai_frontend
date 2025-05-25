//ui component
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatNavbar from "@/components/common/ChatNavbar";
import type { Sessiontype, UserData } from "@/components/common/Navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { getSessionFromLocalStorage } from "@/lib/globalMethod";
import { useEffect, useState, type ReactNode } from "react";

//type
type DashboardProp = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardProp) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const session = localStorage.getItem("UserSession");

  useEffect(() => {
    async function fetchSession() {
      const session = (await getSessionFromLocalStorage()) as Sessiontype;

      if (session && session.user) {
        const reqBody = {
          id: session.user._id as string,
        };

        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/get`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(reqBody),
          }
        );

        const data = await res.json();

        setUserData(data.user);
      } else {
        console.log("No valid session found.");
      }
    }

    fetchSession();
  }, [session]);

  return (
    <SidebarProvider className="bg-gray-50" defaultOpen={true}>
      <ChatSidebar userData={userData} />
      <SidebarInset className="flex flex-col">
        <ChatNavbar session={session} userData={userData} />
        <div className="md:flex-1 md:overflow-auto  bg-gray-50">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
