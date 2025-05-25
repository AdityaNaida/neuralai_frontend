import NewPrompt from "@/components/chat/NewPrompt";
import type { Sessiontype, UserData } from "@/components/common/Navbar";
import { getSessionFromLocalStorage } from "@/lib/globalMethod";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const conversation = [
  {
    role: "user",
    message: "Hi, can you help me learn JavaScript?",
  },
  {
    role: "model",
    message:
      "Of course! JavaScript is a great language to start with. What would you like to focus on first?",
  },
  {
    role: "user",
    message: "Let’s start with variables and data types.",
  },
  {
    role: "model",
    message:
      "Sure! In JavaScript, you can declare variables using var, let, or const. Data types include string, number, boolean, object, array, null, and undefined.",
  },
  {
    role: "user",
    message: "What’s the difference between let and const?",
  },
  {
    role: "model",
    message:
      "`let` allows you to reassign the variable later, while `const` means the value can’t be reassigned. However, for objects and arrays declared with `const`, you can still modify their contents.",
  },
];

export default function ChatPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const userSession = localStorage.getItem("UserSession");

  if (!userSession) {
    return <Navigate to="/login" replace />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }, [userSession]);

  // const path = useLocation();

  // const childId = path.split("/").pop()

  return (
    <div className="h-full relative md:px-10">
      <div className="h-[calc(100vh-64px)] gap-4 mx-auto max-w-2xl  flex flex-col md:h-[calc(100vh-120px)] overflow-y-auto scroll-smooth transition-all ease duration-100">
        {conversation.map((e) => (
          <div
            className={`text-sm ${
              e.role === "user"
                ? "place-self-end-safe bg-gray-200 text-right px-3 py-3"
                : "w-fit"
            }`}
            style={{ borderRadius: `10px` }}
          >
            {e.message}
          </div>
        ))}
        <NewPrompt userId={userData?._id as string} />
      </div>
    </div>
  );
}
