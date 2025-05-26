// import NewPrompt from "@/components/chat/NewPrompt";
// import MarkdownRenderer from "@/components/common/MarkdownRender";
// // import type { Sessiontype, UserData } from "@/components/common/Navbar";
// // import { getSessionFromLocalStorage } from "@/lib/globalMethod";
// import { ImageKitProvider, Image } from "@imagekit/react";
// import { useQuery } from "@tanstack/react-query";
// // import { useEffect, useState } from "react";
// import Markdown from "react-markdown";
// import { Navigate, useLocation } from "react-router-dom";

// //type
// export type HistoryType = {
//   role: "user" | "model";
//   parts: [{ text: string }];
//   img: string | null;
// };

// export default function ChatPage() {
//   // const [userData, setUserData] = useState<UserData | null>(null);
//   const userSession = localStorage.getItem("UserSession");
//   const path = useLocation().pathname;
//   const chatId = path.split("/").pop();
//   const { isPending, error, data } = useQuery({
//     queryKey: ["chats", chatId],
//     queryFn: async () => {
//       const res = await fetch(
//         `${import.meta.env.VITE_BACKEND_URL}/api/chat/get/${chatId}`
//       );

//       if (!res.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       return res.json();
//     },

//     enabled: !!chatId,
//   });

//   if (!userSession) {
//     return <Navigate to="/login" replace />;
//   }

//   return (
//     <div className="h-full relative md:px-10">
//       <div className="h-[calc(100vh-64px)] gap-4 mx-auto max-w-2xl  flex flex-col md:h-[calc(100vh-120px)] overflow-y-auto scroll-smooth transition-all ease duration-100">
//         {isPending ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             viewBox="0 0 24 24"
//             className="animate-spin text-gray-500"
//           >
//             <path
//               fill="currentColor"
//               d="M12 2.25c-5.384 0-9.75 4.366-9.75 9.75s4.366 9.75 9.75 9.75v-2.437A7.312 7.312 0 1 1 19.313 12h2.437c0-5.384-4.366-9.75-9.75-9.75"
//             ></path>
//           </svg>
//         ) : error ? (
//           "something went wrong"
//         ) : (
//           data?.history.map((e: HistoryType, i: number) => (
//             <div key={i}>
//               {e.img && (
//                 <div className="place-self-end-safe max-w-60 md:max-w-96 mb-3">
//                   <ImageKitProvider
//                     urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
//                   >
//                     <Image
//                       src={e.img}
//                       width={600}
//                       height={400}
//                       transformation={[{ radius: 100 }]}
//                       loading="lazy"
//                       lqip={{ active: true, quality: 20 }}
//                     />
//                   </ImageKitProvider>
//                 </div>
//               )}
//               <div
//                 className={`text-sm ${
//                   e.role === "user"
//                     ? "place-self-end-safe bg-gray-200 text-right px-3 py-3"
//                     : "w-fit"
//                 }`}
//                 style={{ borderRadius: `10px` }}
//               >
//                 <MarkdownRenderer content={e.parts[0].text} />
//               </div>
//             </div>
//           ))
//         )}
//         {data && <NewPrompt data={data} />}
//       </div>
//     </div>
//   );
// }

import NewPrompt from "@/components/chat/NewPrompt";
import MarkdownRenderer from "@/components/common/MarkdownRender";
// import type { Sessiontype, UserData } from "@/components/common/Navbar";
// import { getSessionFromLocalStorage } from "@/lib/globalMethod";
import { ImageKitProvider, Image } from "@imagekit/react";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useLocation } from "react-router-dom";

//type
export type HistoryType = {
  role: "user" | "model";
  parts: [{ text: string }];
  img: string | null;
};

export default function ChatPage() {
  // const [userData, setUserData] = useState<UserData | null>(null);
  const userSession = localStorage.getItem("UserSession");
  const path = useLocation().pathname;
  const chatId = path.split("/").pop();
  const { isPending, error, data } = useQuery({
    queryKey: ["chats", chatId],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/chat/get/${chatId}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    },

    enabled: !!chatId,
  });

  if (!userSession) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="h-full relative md:px-10">
      <div className="h-[calc(100vh-100px)] gap-4 mx-auto max-w-2xl flex flex-col md:h-[calc(100vh-120px)] overflow-y-auto overflow-x-hidden scroll-smooth transition-all ease duration-100">
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
            <div key={i} className="w-full min-w-0">
              {e.img && (
                <div className="place-self-end-safe max-w-60 md:max-w-96 mb-3">
                  <ImageKitProvider
                    urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
                  >
                    <Image
                      src={e.img}
                      width={600}
                      height={400}
                      transformation={[{ radius: 100 }]}
                      loading="lazy"
                      lqip={{ active: true, quality: 20 }}
                    />
                  </ImageKitProvider>
                </div>
              )}
              <div
                className={`text-sm  min-w-0 ${
                  e.role === "user"
                    ? "place-self-end-safe w-fit max-w-2/3 bg-gray-200 px-3 py-3"
                    : "w-fit max-w-full"
                }`}
                style={{ borderRadius: `10px` }}
              >
                <div className="w-full min-w-0 overflow-hidden">
                  <MarkdownRenderer content={e.parts[0].text} />
                </div>
              </div>
            </div>
          ))
        )}
        {data && <NewPrompt data={data} />}
      </div>
    </div>
  );
}
