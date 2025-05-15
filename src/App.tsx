// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/home/Homepage";
import ChatPage from "./routes/chat/ChatPage";
import NotFound from "./routes/notfound/NotFound";
import Navbar from "./components/common/Navbar";
import Login from "./routes/auth/Login";
import Signup from "./routes/auth/Signup";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./routes/private/PrivateRoute";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="px-3">
        <Routes>
          <Route index path="/" element={<Homepage />} />

          <Route
            path="/c/:slug"
            element={
              <PrivateRoute>
                <ChatPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </main>
    </>
  );
}
