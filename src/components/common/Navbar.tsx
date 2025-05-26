//react router
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

//alerts
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getSessionFromLocalStorage } from "@/lib/globalMethod";

//types
export type UserData = {
  _id: string;
  name: string;
  email: string;
  password: string;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
  chats: string[];
};
export type Sessiontype = {
  exp: number;
  expires: Date;
  iat: number;
  user: {
    _id: string;
    email: string;
  };
};

export default function Navbar() {
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
    <header className="sticky bg-white z-20 top-0 left-0 h-16 md:h-20 flex items-center px-3">
      <nav className="max-w-7xl mx-auto flex items-center justify-between flex-nowrap w-full">
        <NavLink
          to={"/"}
          className={`text-xl md:text-2xl font-semibold flex items-center flex-nowrap gap-1`}
        >
          <img
            src="/logo.webp"
            alt="logo image"
            className="h-8 md:h-10 w-8 md:w-10"
            loading="lazy"
            decoding="async"
          />
          Neural AI
        </NavLink>

        <div className="flex items-center relative z-50 bg-white">
          {session && session.length > 0 ? (
            <>
              <DropdownMenu>
                {userData ? (
                  <DropdownMenuTrigger className="flex items-center gap-1.5 bg-white md:gap-2 cursor-pointer z-50">
                    <Avatar className="h-7 w-7 md:h-8 md:w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                        {userData.name.split("").shift()}
                      </AvatarFallback>
                    </Avatar>

                    <p className="text-sm">
                      {userData.name.split(" ").shift()}
                    </p>
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

                <DropdownMenuContent className="ring-0 bg-white relative z-50 hello  border-0 focus-visible:ring-offset-0 focus-visible:ring-0 rounded-md">
                  <DropdownMenuLabel className="bg-white">
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
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
    </header>
  );
}
