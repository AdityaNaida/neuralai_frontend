import { NavLink } from "react-router-dom";

export default function Navbar() {
  const session = localStorage.getItem("UserSession");

  return (
    <header className="sticky top-0 left-0 h-16 md:h-20 flex items-center px-3">
      <nav className="max-w-7xl mx-auto flex items-center justify-between flex-nowrap w-full">
        <NavLink
          to={"/"}
          className={`text-xl md:text-2xl font-semibold flex items-center flex-nowrap gap-1`}
        >
          <img
            src="/logo.webp"
            alt="logo image"
            className="h-8 md:h-10 w-8 md:w-10"
            loading="lazy"
            decoding="async"
          />
          Neural AI
        </NavLink>

        <div className="flex items-center">
          {session && session.length > 0 ? (
            <button
              className="text-red-500"
              onClick={() => {
                try {
                  localStorage.removeItem("UserSession");
                  window.location.reload();
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Logout
            </button>
          ) : (
            <NavLink
              to={"/login"}
              style={{ borderRadius: "10px" }}
              className={`border border-gray-300 text-gray-600 px-3 py-1 text-sm md:text-base`}
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}
