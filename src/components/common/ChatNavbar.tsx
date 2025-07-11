import type { UserData } from "./Navbar";
import { NavLink } from "react-router-dom";

//ui components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { toast } from "react-toastify";

//types
type Props = {
  session: string | null;
  userData: UserData | null;
};

export default function ChatNavbar({ session, userData }: Props) {
  return (
    <nav className="sticky top-0 left-0 h-16 md:h-20 flex items-center justify-between px-3">
      <div className="flex items-center gap-2 font-medium">
        <SidebarTrigger className="cursor-pointer md:hidden" />
        Neural{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          2.0 Pro
        </span>
      </div>
      <div className="flex items-center">
        {session && session.length > 0 ? (
          <>
            <DropdownMenu>
              {userData ? (
                <DropdownMenuTrigger className="flex items-center gap-1.5 md:gap-2 cursor-pointer">
                  <Avatar className="h-7 w-7 md:h-8 md:w-8">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                      {userData.name.split("").shift()}
                    </AvatarFallback>
                  </Avatar>

                  <p className="text-sm">{userData.name.split(" ").shift()}</p>
                </DropdownMenuTrigger>
              ) : (
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
              )}

              <DropdownMenuContent className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0 rounded-md">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <NavLink to={"/app"}>New Chat</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    try {
                      localStorage.removeItem("UserSession");

                      toast.success(`Logged out`, {
                        autoClose: 600,
                        position: "bottom-right",
                      });

                      setTimeout(() => {
                        window.location.reload();
                      }, 1000);
                    } catch (error) {
                      console.log(error);
                      toast.error(`Something went wrong.`, {
                        autoClose: 600,
                        position: "bottom-right",
                      });
                    }
                  }}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <NavLink
            to={"/login"}
            style={{ borderRadius: "10px" }}
            className={`border border-gray-300 text-gray-600 px-3 py-1 text-sm md:text-base`}
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}
