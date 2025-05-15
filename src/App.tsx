// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/home/Homepage";
import ChatPage from "./routes/home/ChatPage";
import NotFound from "./routes/notfound/NotFound";
import Navbar from "./components/common/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="px-3">
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/c/:slug" element={<ChatPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
