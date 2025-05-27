import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className=" py-20 md:min-h-[calc(100vh-80px)] overflow-x-hidden h-auto  w-full flex items-center justify-center flex-col gap-3 text-center">
      <h1 className="font-semibold text-3xl md:text-5xl">
        LLM Neural AI <br />
        <p>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 ">
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

      <div className="flex items-center justify-center gap-4 mt-4">
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
          style={{ borderRadius: `10px` }}
          className={`border px-3 py-2 border-gray-300 text-sm md:text-base`}
        >
          About Us
        </NavLink>
      </div>

      <div className="relative w-full mt-4 px-3">
        <div className="h-4/5 w-1/2 bottom-10 left-0 bg-linear-to-r/increasing from-blue-200 to-purple-600 blur-2xl absolute"></div>
        <div className="h-4/5 w-1/2 bottom-10 right-0 bg-linear-to-r/increasing  from-yellow-500 to-pink-400 blur-2xl absolute"></div>
        <div
          className="my-10 p-1 bg-white  border border-purple-100 relative mx-auto max-w-96 md:max-w-4xl"
          style={{ borderRadius: `10px` }}
        >
          <div className="p-1.5 relative ">
            <div
              className="flex items-center gap-1 absolute top-1/2"
              style={{ transform: `translate(-10%, -50%)` }}
            >
              <div className="h-2 md:h-3 w-2 md:w-3 bg-red-500 rounded-full"></div>
              <div className="h-2 md:h-3 w-2 md:w-3 bg-yellow-500 rounded-full"></div>
              <div className="h-2 md:h-3 w-2 md:w-3 bg-green-500 rounded-full"></div>
            </div>

            <p className="text-center font-semibold text-sm md:text-base">
              Neural AI
            </p>
          </div>
          <img
            src="/neural_dashboard.webp"
            alt="dashboard"
            className="h-full w-full object-center object-cover "
            style={{ borderRadius: `0px 0px 10px 10px` }}
          />
        </div>
      </div>
    </div>
  );
}
