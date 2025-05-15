import { Navigate } from "react-router-dom";

export default function ChatPage() {
  const userSession = localStorage.getItem("UserSession");

  if (!userSession) {
    return <Navigate to="/login" replace />;
  }

  return <div>ChatPage</div>;
}
