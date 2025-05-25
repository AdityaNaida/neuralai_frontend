// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Sessiontype, UserData } from "@/components/common/Navbar";
import { getSessionFromLocalStorage } from "@/lib/globalMethod";

export default function ChatApp() {
  const [userInput, setUserInput] = useState<string>("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const session = localStorage.getItem("UserSession");

  // const queryClient = useQueryClient();

  // const navigate = useNavigate();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userInput) return;
    try {
      const apiBody = {
        userId: userData?._id,
        text: userInput,
      };

      const data = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/chat/create`,
        {
          method: "POST",
          // credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiBody),
        }
      );

      const res = await data.json();

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full relative md:px-10">
      <div className="h-[calc(100vh-64px)] gap-4 mx-auto max-w-2xl  flex items-center justify-center flex-col md:h-[calc(100vh-120px)] overflow-y-auto scroll-smooth transition-all ease duration-100">
        {userData && (
          <p className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Welcome,{userData.name.split(" ").shift()}
          </p>
        )}
        <p className="text-sm">How can I help you today?</p>

        <div className="grid grid-cols-3 gap-4">
          <div className=""></div>
        </div>
      </div>

      {/* <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>LAMA AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="" />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="" />
            <span>Help me with my Code</span>
          </div>
        </div>
      </div> */}

      {/* <NewPrompt userId={userData?._id as string} /> */}
      <form
        // action=""
        onSubmit={handleSubmit}
        className="w-1/2 absolute bottom-2 bg-gray-200 left-1/2 p-4 flex items-center justify-between gap-2"
        style={{ transform: `translate(-50%,0%)`, borderRadius: `10px` }}
      >
        <input
          type="text"
          placeholder="Ask me anything..."
          className="text-sm w-4/5 outline-none"
          required
          name="text"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />

        <div className="flex items-center gap-2">
          {/* <UploadImage
            setImage={setImage}
            setUploadProgress={setUploadProgress}
          /> */}
          <button type="submit">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 text-gray-600"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
