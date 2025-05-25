import NewPrompt from "@/components/chat/NewPrompt";
import type { Sessiontype, UserData } from "@/components/common/Navbar";
import { getSessionFromLocalStorage } from "@/lib/globalMethod";
import { ImageKitProvider, Image } from "@imagekit/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Navigate, useLocation } from "react-router-dom";

//type
type HistoryType = {
  role: "user" | "model";
  parts: [{ text: string }];
  img: string | null;
};

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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = useLocation().pathname;
  const chatId = path.split("/").pop();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isPending, error, data } = useQuery({
    queryKey: ["chats", chatId],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chat/get/${chatId}`).then(
        (res) => res.json()
      ),
    enabled: !!chatId,
  });
  console.log(data);

  return (
    <div className="h-full relative md:px-10">
      <div className="h-[calc(100vh-64px)] gap-4 mx-auto max-w-2xl  flex flex-col md:h-[calc(100vh-120px)] overflow-y-auto scroll-smooth transition-all ease duration-100">
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
          "something went wrong"
        ) : (
          data?.history.map((e: HistoryType, i: number) => (
            <div key={i}>
              {e.img && (
                <div className="place-self-end-safe max-w-96">
                  <ImageKitProvider
                    urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
                  >
                    <Image
                      src={e.img}
                      height="300"
                      width="400"
                      transformation={[
                        { height: 300, width: 400, radius: 100 },
                      ]}
                      loading="lazy"
                      lqip={{ active: true, quality: 20 }}
                    />
                  </ImageKitProvider>
                </div>
              )}
              <div
                className={`text-sm ${
                  e.role === "user"
                    ? "place-self-end-safe bg-gray-200 text-right px-3 py-3"
                    : "w-fit"
                }`}
                style={{ borderRadius: `10px` }}
              >
                <Markdown>{e.parts[0].text}</Markdown>
              </div>
            </div>
          ))
        )}
        <NewPrompt userId={userData?._id as string} />
      </div>
    </div>
  );
}
