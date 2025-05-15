import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] bg-linear-to-r  w-full flex items-center justify-center flex-col gap-3 text-center">
      <h1 className="font-semibold text-3xl md:text-5xl">
        LLM Neural AI <br />
        <p>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-300 dark:to-orange-200">
            Purpose-Built
          </span>{" "}
          for Coding
        </p>
      </h1>
      <p className="text-sm md:text-base text-gray-600 md:w-2/3">
        Neural AI is a smart chatbot that simulates human-like conversations
        using advanced natural language processing.{" "}
        <span className=" hidden md:inline">
          Built with modern technologies, it offers a secure and modular
          foundation for AI-driven applications.
        </span>
      </p>

      <div className="flex items-center justify-center gap-4">
        <NavLink
          to={"/signup"}
          style={{ borderRadius: `10px` }}
          className="bg-gradient-to-br from-purple-500 to-blue-500 px-3 py-2 text-white flex items-center gap-1 text-sm md:text-base"
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </NavLink>
        <NavLink
          to={"/about"}
          className="px-3 py-2 text-sm md:text-base"
          style={{ borderRadius: `10px` }}
        >
          About Us
        </NavLink>
      </div>
    </div>
  );
}
