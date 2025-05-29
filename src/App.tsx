import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./routes/home/Homepage";
import ChatPage from "./routes/chat/ChatPage";
import NotFound from "./routes/notfound/NotFound";
import Navbar from "./components/common/Navbar";
import Login from "./routes/auth/Login";
import Signup from "./routes/auth/Signup";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./routes/private/PrivateRoute";
import AuthRoute from "./routes/private/AuthRoute";
import ChatApp from "./routes/chat/ChatApp";
import AboutUs from "./routes/home/AboutUs";

export default function App() {
  const location = useLocation();

  const shouldHideNavbar =
    location.pathname.startsWith("/c/") || location.pathname === "/app";

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <main>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />

          <Route
            path="/c/:slug"
            element={
              <PrivateRoute>
                <ChatPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/app"
            element={
              <PrivateRoute>
                <ChatApp />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <Signup />
              </AuthRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </main>
    </>
  );
}
