import { Navigate } from "react-router-dom";
import { useEffect, type ReactNode } from "react";
import { getSessionFromLocalStorage } from "@/lib/globalMethod";

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const userSession = localStorage.getItem("UserSession");

  if (!userSession) {
    return <Navigate to="/login" replace />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function fetchSession() {
      const session = await getSessionFromLocalStorage();

      if (session) {
        console.log("User session:", session);
      } else {
        console.log("No valid session found.");
      }
    }

    fetchSession();
  }, []);

  return children;
};

export default PrivateRoute;
