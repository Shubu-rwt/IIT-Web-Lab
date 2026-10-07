import { NavLink } from "react-router-dom";

import sidebarData from "../../data/sidebarData";

export default function Sidebar({ onClose = () => {} }) {
  return (
    <div
      className="
        flex
        h-[calc(100vh-104px)]
        flex-col
        bg-white
      "
    >
      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <div
        className="
          flex-1
          overflow-y-auto
          px-5
          py-6
        "
      >
        <nav className="space-y-1">
          {sidebarData.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className="block"
            >
              {({ isActive }) => (
                <div
                  className={`
                    group
                    flex
                    min-h-[46px]
                    cursor-pointer
                    items-center
                    gap-3
                    rounded-full
                    px-5
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? `
                          bg-slate-100
                          text-slate-900
                          shadow-sm
                        `
                        : `
                          text-slate-500
                          hover:bg-slate-50
                          hover:text-[#1F3F97]
                        `
                    }
                  `}
                >
                  {/* ACTIVE DOT */}

                  <span
                    className={`
                      h-2.5
                      w-2.5
                      shrink-0
                      rounded-full
                      transition-all
                      duration-200

                      ${
                        isActive
                          ? "bg-cyan-500"
                          : "bg-transparent group-hover:bg-[#1F3F97]"
                      }
                    `}
                  />

                  {/* TITLE */}

                  <span
                    className="
                      text-[15px]
                      font-medium
                    "
                  >
                    {item.title}
                  </span>
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}