/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sheet, SheetTitle } from "@/components/ui/sheet";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  //   SidebarMenuButton,
  //   SidebarMenuItem,
  //   SidebarMenuSub,
  //   SidebarMenuSubItem,
  //   SidebarMenuSubButton,
  SidebarGroup,
  SidebarGroupContent,
  //   SidebarGroupLabel,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// import
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";

import { NavLink, useLocation } from "react-router-dom";
import type { UserData } from "../common/Navbar";
import { useQuery } from "@tanstack/react-query";

//types
type Props = {
  userData: UserData | null;
};

export default function ChatSidebar({ userData }: Props) {
  const path = useLocation().pathname;
  const pathname = path.split("/").pop();
  const apiBody = {
    userId: userData ? userData._id : "",
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["users", apiBody.userId], // include userId to refetch on change
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/chats`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiBody),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    },
    enabled: !!userData?._id, // only run query if userData._id exists
  });

  return (
    <Sheet>
      <Sidebar
        variant="floating"
        collapsible="icon"
        style={{ borderRadius: `10px` }}
      >
        <SidebarHeader className="flex items-center justify-between flex-row">
          <SheetTitle className="flex items-center flex-nowrap gap-1">
            <img
              src="/logo.webp"
              alt="logo image"
              className="h-6 md:h-7 w-6 md:w-7"
              loading="lazy"
              decoding="async"
            />
            <NavLink
              to={"/"}
              className={` md:text-lg font-semibold  group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:hidden`}
            >
              Neural AI
            </NavLink>
          </SheetTitle>

          <SidebarTrigger className="cursor-pointer hidden md:block group-data-[state=collapsed]:hidden" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            {/* <SidebarGroupLabel>
              <span className="transition-opacity duration-200 ease-in-out group-data-[state=collapsed]:opacity-0">
                Main Menu
              </span>
            </SidebarGroupLabel> */}
            <SidebarGroupContent>
              <SidebarMenu>
                <NavLink
                  to={"/app"}
                  style={{ borderRadius: `10px` }}
                  className={`bg-gradient-to-br from-purple-500 to-blue-500 mt-5 text-white py-2 text-center flex items-center justify-center gap-2 group-data-[state=collapsed]:opacity-0`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                  New Chat
                </NavLink>

                <p className="my-4 text-xs group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:hidden">
                  Recent Chats
                </p>

                {isPending ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="animate-spin text-gray-500"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2.25c-5.384 0-9.75 4.366-9.75 9.75s4.366 9.75 9.75 9.75v-2.437A7.312 7.312 0 1 1 19.313 12h2.437c0-5.384-4.366-9.75-9.75-9.75"
                    ></path>
                  </svg>
                ) : error ? (
                  "Something went wrong"
                ) : (
                  <div className="flex flex-col ">
                    {data.map((e: any) => (
                      <NavLink
                        to={`/c/${e._id}`}
                        key={e._id}
                        className={`text-sm hover:bg-gray-100 whitespace-nowrap text-ellipsis overflow-hidden p-3 group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:hidden ${
                          e._id === pathname ? `bg-gray-100` : ``
                        }`}
                        style={{ borderRadius: `10px` }}
                      >
                        {e.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </Sheet>
  );
}
