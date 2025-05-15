import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 left-0 h-16 md:h-20 flex items-center px-3">
      <nav className="max-w-7xl mx-auto  w-full">
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
      </nav>
    </header>
  );
}
