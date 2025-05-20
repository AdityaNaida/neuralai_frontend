import NewPrompt from "@/components/chat/NewPrompt";
import { Navigate } from "react-router-dom";

export default function ChatPage() {
  const userSession = localStorage.getItem("UserSession");

  if (!userSession) {
    return <Navigate to="/login" replace />;
  }

  // const path = useLocation();

  // const childId = path.split("/").pop()

  return (
    <div>
      <NewPrompt />
    </div>
  );
}
