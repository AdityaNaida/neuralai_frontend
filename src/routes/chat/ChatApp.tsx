// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";

// export default function ChatApp() {
//   const queryClient = useQueryClient();

//   const navigate = useNavigate();

//   const mutation = useMutation({
//     mutationFn: (text) => {
//       return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chats`, {
//         method: "POST",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ text }),
//       }).then((res) => res.json());
//     },
//     onSuccess: (id) => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries({ queryKey: ["userChats"] });
//       navigate(`/c/${id}`);
//     },
//   });

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const text = (e.target as HTMLFormElement).text.value;
//     if (!text) return;

//     mutation.mutate(text);
//   };

//   return (
//     <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)]">
//       <div className="dashboardPage">
//         <div className="texts">
//           <div className="logo">
//             <img src="/logo.png" alt="" />
//             <h1>LAMA AI</h1>
//           </div>
//           <div className="options">
//             <div className="option">
//               <img src="/chat.png" alt="" />
//               <span>Create a New Chat</span>
//             </div>
//             <div className="option">
//               <img src="/image.png" alt="" />
//               <span>Analyze Images</span>
//             </div>
//             <div className="option">
//               <img src="/code.png" alt="" />
//               <span>Help me with my Code</span>
//             </div>
//           </div>
//         </div>
//         <div className="formContainer">
//           <form onSubmit={handleSubmit}>
//             <input type="text" name="text" placeholder="Ask me anything..." />
//             <button>
//               <img src="/arrow.png" alt="" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ChatApp() {
  return <div>ChatApp</div>;
}
