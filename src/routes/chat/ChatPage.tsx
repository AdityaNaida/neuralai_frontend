import NewPrompt from "@/components/chat/NewPrompt";
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
  const userSession = localStorage.getItem("UserSession");

  if (!userSession) {
    return <Navigate to="/login" replace />;
  }

  // const path = useLocation();

  // const childId = path.split("/").pop()

  return (
    <div className="h-full   relative">
      <div className="h-[calc(100vh-64px)] gap-4  flex flex-col md:h-[calc(100vh-120px)] overflow-y-auto scroll-smooth transition-all ease duration-100">
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
        <NewPrompt />
      </div>
    </div>
  );
}
