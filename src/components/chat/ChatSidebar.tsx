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

import { NavLink } from "react-router-dom";

export default function ChatSidebar() {
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
                {/* {menuItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    {item.items ? (
                      <Collapsible
                        open={openGroups.includes(item.label)}
                        onOpenChange={() => toggleGroup(item.label)}
                      >
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            className="w-full justify-between"
                            tooltip={item.label}
                          >
                            <div className="flex items-center">
                              <item.icon className="mr-2 h-4 w-4" />
                              <span>{item.label}</span>
                            </div>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                openGroups.includes(item.label) && "rotate-180"
                              )}
                            />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.href}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={pathname === subItem.href}
                                >
                                  <Link href={subItem.href}>
                                    <subItem.icon className="mr-2 h-4 w-4" />
                                    {subItem.label}
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href}
                        tooltip={item.label}
                      >
                        <Link href={item.href!}>
                          <item.icon className="mr-2 h-4 w-4" />
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))} */}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </Sheet>
  );
}
