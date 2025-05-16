import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

type PrivateRouteProps = {
  children: ReactNode;
};

export default function AuthRoute({ children }: PrivateRouteProps) {
  const userSession = localStorage.getItem("UserSession");

  if (userSession) {
    return <Navigate to="/" replace />;
  }
  return children;
}
