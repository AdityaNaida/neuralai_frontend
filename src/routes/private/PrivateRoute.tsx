import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";
// import { getSessionFromLocalStorage } from "@/lib/globalMethod";
import DashboardLayout from "@/layouts/root/DashboardLayout";

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const userSession = localStorage.getItem("UserSession");

  if (!userSession) {
    return <Navigate to="/login" replace />;
  }

  // useEffect(() => {
  //   async function fetchSession() {
  //     const session = await getSessionFromLocalStorage();

  //     if (session) {
  //       console.log("User session:", session);
  //     } else {
  //       console.log("No valid session found.");
  //     }
  //   }

  //   fetchSession();
  // }, []);

  return <DashboardLayout>{children}</DashboardLayout>;
};

export default PrivateRoute;
