import { NavLink } from "react-router-dom";

export default function Navbar() {
  // Common classes for all links
  const baseLinkClasses = "px-3 py-2 rounded-md transition-colors duration-300";

  // Classes specific to the active link
  const activeLinkClasses = "text-indigo-600 font-semibold";

  // Classes specific to normal (inactive) links
  const normalLinkClasses = "font-medium text-slate-700 hover:text-indigo-600";

  return (
    // 1. Made the header sticky, semi-transparent, and added backdrop-blur
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-slate-900/10">
      <div className="container flex items-center justify-between p-4 mx-auto max-w-7xl">
        {/* Logo with new icon */}
        <NavLink to="/" className="flex items-center gap-2">
          <svg
            className="h-7 w-7 text-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.004 9.004 0 013 12c0-1.615.42-3.119 1.158-4.418"
            />
          </svg>
          <span className="text-xl font-black text-slate-900 select-none">
            REST<span className="text-indigo-600">Explorer</span>
          </span>
        </NavLink>

        {/* Navigation Links */}
        <nav className="flex items-center gap-x-2">
          {/* 2. Updated link classes for better styling and hover states */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : normalLinkClasses}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/countries"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : normalLinkClasses}`
            }
          >
            Countries
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : normalLinkClasses}`
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
