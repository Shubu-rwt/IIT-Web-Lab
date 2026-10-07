// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// import logo from "../../assets/images/iit-logo.png";
// import nrlLogo from "../../assets/images/nrl-logo.jpeg";
// import Sidebar from "./Sidebar";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* =====================================================
//           NAVBAR
//       ====================================================== */}
//       <header
//         className="
//           fixed
//           top-0
//           left-0
//           right-0
//           z-50
//           w-full
//           bg-gradient-to-r
//           from-[#0F172A]
//           via-[#1E3A8A]
//           to-[#155E75]
//           shadow-md
//         "
//       >
//         <div
//           className="
//             flex
//             h-[96px]
//             w-full
//             items-center
//             px-4
//             sm:px-6
//             lg:px-8
//           "
//         >
//           {/* =================================================
//               LEFT SIDE
//           ================================================= */}

//           <div className="flex h-full items-center gap-4 sm:gap-5">
//             {/* IIT LOGO */}

//             <div
//               className="
//                 flex
//                 h-[72px]
//                 w-[72px]
//                 shrink-0
//                 items-center
//                 justify-center
//               "
//             >
//               <img
//                 src={logo}
//                 alt="IIT Delhi"
//                 className="
//                   h-[72px]
//                   w-[72px]
//                   object-contain
//                 "
//               />
//             </div>

//             {/* FACULTY INFORMATION */}

//             <div
//               className="
//                 flex
//                 flex-col
//                 justify-center
//                 leading-none
//               "
//             >
//               <h1
//                 className="
//                   mb-1
//                   text-xl
//                   font-bold
//                   text-white
//                   sm:text-2xl
//                   lg:text-[32px]
//                 "
//               >
//                 Deepak Joshi
//               </h1>

//               <p
//                 className="
//                   mb-1
//                   text-xs
//                   font-semibold
//                   text-blue-100
//                   sm:text-sm
//                   lg:text-[15px]
//                 "
//               >
//                 Neuromechanics research lab
//               </p>

//               <p
//                 className="
//                   text-[11px]
//                   text-blue-200
//                   sm:text-xs
//                   lg:text-[13px]
//                 "
//               >
//                 Indian Institute of Technology Delhi
//               </p>
//             </div>
//           </div>

//           {/* =================================================
//               HAMBURGER
//           ================================================= */}

//           <button
//             type="button"
//             onClick={() => setIsOpen(true)}
//             aria-label="Open navigation menu"
//             aria-expanded={isOpen}
//             className="
//               ml-auto
//               flex
//               h-12
//               w-12
//               items-center
//               justify-center
//               rounded-xl
//               border
//               border-white/20
//               bg-white/10
//               text-white
//               shadow-sm
//               backdrop-blur-sm
//               transition
//               duration-200
//               hover:bg-white/20
//               focus:outline-none
//               focus:ring-2
//               focus:ring-white/50
//             "
//           >
//             <Menu size={28} strokeWidth={2} />
//           </button>
//         </div>
//       </header>

//       {/* =====================================================
//           DARK OVERLAY
//       ====================================================== */}

//       <div
//         onClick={() => setIsOpen(false)}
//         className={`
//           fixed
//           inset-0
//           z-[60]
//           bg-black/50
//           transition-opacity
//           duration-300

//           ${
//             isOpen
//               ? "visible opacity-100"
//               : "invisible opacity-0"
//           }
//         `}
//       />

//       {/* =====================================================
//           SIDE DRAWER
//       ====================================================== */}

//       <aside
//         className={`
//           fixed
//           top-0
//           left-0
//           z-[70]
//           h-screen
//           w-[360px]
//           max-w-[88vw]
//           bg-white
//           shadow-2xl
//           transition-transform
//           duration-300
//           ease-out

//           ${
//             isOpen
//               ? "translate-x-0"
//               : "-translate-x-full"
//           }
//         `}
//       >
//         {/* =================================================
//             DRAWER HEADER
//         ================================================= */}

//         <div
//           className="
//             flex
//             min-h-[125px]
//             items-center
//             justify-between
//             border-b
//             border-slate-200
//             px-7
//             py-5
//           "
//         >
//           {/* LOGO + INFORMATION */}

//           <div className="flex items-center gap-4">
//             <div
//               className="
//                 flex
//                 h-[70px]
//                 w-[70px]
//                 shrink-0
//                 items-center
//                 justify-center
//               "
//             >
//               <img
//                 src={nrlLogo}
//                 alt="NRL"
//                 className="
//                   h-[70px]
//                   w-[70px]
//                   object-contain
//                 "
//               />
//             </div>

//             <div>
//               <p
//                 className="
//                   mt-1
//                   text-sm
//                   font-semibold
//                   leading-tight
//                   text-[#1F3F97]
//                 "
//               >
//                 Neuromechanics research lab
//               </p>

//               <p
//                 className="
//                   mt-1
//                   text-xs
//                   leading-tight
//                   text-slate-500
//                 "
//               >
//                 Indian Institute of Technology Delhi
//               </p>
//             </div>
//           </div>

//           {/* CLOSE */}

//           <button
//             type="button"
//             onClick={() => setIsOpen(false)}
//             aria-label="Close navigation menu"
//             className="
//               ml-3
//               flex
//               h-10
//               w-10
//               shrink-0
//               items-center
//               justify-center
//               rounded-lg
//               text-slate-700
//               transition
//               hover:bg-slate-100
//               hover:text-slate-900
//             "
//           >
//             <X size={26} strokeWidth={2} />
//           </button>
//         </div>

//         {/* =================================================
//             SIDEBAR NAVIGATION
//         ================================================= */}

//         <Sidebar
//           onClose={() => setIsOpen(false)}
//         />
//       </aside>
//     </>
//   );
// }


import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";

import Sidebar from "./Sidebar";

import siteImages from "../../data/siteImages";
import { assetPath } from "../../utils/assetPath";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Publications", path: "/publications" },
  { title: "Awards", path: "/awards" },
  { title: "Projects", path: "/projects" },
  { title: "Collaborators", path: "/collaborators" },
  { title: "Students", path: "/students" },
  { title: "Courses", path: "/courses" },
  { title: "Gallery", path: "/gallery" },
  { title: "News", path: "/news" },
  { title: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Light is the default. A saved choice is remembered.
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("nrl-theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("nrl-theme", theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          w-full
          border-b
          border-white/10
          bg-gradient-to-r
          from-[#0F172A]
          via-[#1E3A8A]
          to-[#155E75]
          shadow-md
        "
      >
        <div
          className="
            flex
            h-[68px]
            w-full
            items-center
            px-4
            sm:h-[76px]
            sm:px-6
            lg:h-[84px]
            lg:px-8
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <Link
            to="/"
            aria-label="Deepak Joshi home"
            className="flex h-full items-center gap-3 sm:gap-4"
          >

            {/* =================================================
                IIT LOGO
            ================================================= */}

            <div
              className="
                flex
                h-[48px]
                w-[48px]
                shrink-0
                items-center
                justify-center
                sm:h-[54px]
                sm:w-[54px]
                lg:h-[60px]
                lg:w-[60px]
              "
            >
              <img
                src={assetPath(siteImages.iitLogo)}
                alt="IIT Delhi"
                className="
                  h-full
                  w-full
                  object-contain
                "
              />
            </div>


            {/* =================================================
                FACULTY INFORMATION
            ================================================= */}

            <div
              className="
                flex
                flex-col
                justify-center
                leading-none
              "
            >

              {/* NAME */}

              <h1
                className="
                  mb-0.5
                  text-xl
                  font-bold
                  text-white
                  sm:text-2xl
                  lg:text-[26px]
                "
              >
                Deepak Joshi
              </h1>


              {/* LAB */}

              <p
                className="
                  mb-0.5
                  text-xs
                  font-semibold
                  text-blue-100
                  sm:text-[13px]
                "
              >
                Neuromechanics Research Lab
              </p>


              {/* INSTITUTE */}

              <p
                className="
                  text-[11px]
                  text-blue-200
                "
              >
                Indian Institute of Technology Delhi
              </p>

            </div>

          </Link>


          {/* =================================================
              HAMBURGER
          ================================================= */}

          <div className="ml-auto flex flex-1 items-center justify-end gap-2 xl:gap-4">
            <nav
              aria-label="Main"
              className="hidden flex-1 items-center justify-center gap-5 text-[15px] xl:flex 2xl:gap-8"
            >
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `border-b-2 py-1 font-medium transition-colors duration-200 ${
                      isActive
                        ? "border-[#8FB0F7] text-white"
                        : "border-transparent text-white/85 hover:text-white"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>

            <a
              href="https://www.linkedin.com/company/neuromechanics-research-lab-nrl-iit-delhi/home/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Neuromechanics Research Lab on LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <FiLinkedin size={20} />
            </a>

            <button
              type="button"
              onClick={() =>
                setTheme((t) => (t === "dark" ? "light" : "dark"))
              }
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              {theme === "dark" ? (
                <Sun size={20} strokeWidth={2} />
              ) : (
                <Moon size={20} strokeWidth={2} />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-sm backdrop-blur-sm transition duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 xl:hidden"
            >
              <Menu size={24} strokeWidth={2} />
            </button>
          </div>

        </div>
      </header>


      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed
          inset-0
          z-[60]
          bg-black/50
          transition-opacity
          duration-300

          ${
            isOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      />


      {/* =====================================================
          SIDE DRAWER
      ====================================================== */}

      <aside
        className={`
          fixed
          top-0
          left-0
          z-[70]
          h-screen
          w-[360px]
          max-w-[88vw]
          bg-white
          transition-transform
          duration-300
          ease-out

          ${
            isOpen
              ? "translate-x-0 shadow-2xl"
              : "-translate-x-full"
          }
        `}
      >

        {/* =================================================
            DRAWER HEADER
        ================================================= */}

        <div
          className="
            flex
            min-h-[104px]
            items-center
            justify-between
            border-b
            border-slate-200
            px-7
            py-5
          "
        >

          {/* =================================================
              NRL LOGO + INFORMATION
          ================================================= */}

          <div className="flex min-w-0 items-center gap-4">

            {/* NRL LOGO */}

            <div
              className="
                flex
                h-[60px]
                w-[60px]
                shrink-0
                items-center
                justify-center
              "
            >
              <img
                src={assetPath(siteImages.nrlLogo)}
                alt="Neuromechanics Research Lab"
                className="
                  h-[60px]
                  w-[60px]
                  object-contain
                "
              />
            </div>


            {/* LAB INFORMATION */}

            <div className="min-w-0">

              <p
                className="
                  mt-1
                  text-sm
                  font-semibold
                  leading-tight
                  text-[#1F3F97]
                "
              >
                Neuromechanics Research Lab
              </p>


              <p
                className="
                  mt-1
                  text-xs
                  leading-tight
                  text-slate-500
                "
              >
                Indian Institute of Technology Delhi
              </p>

            </div>

          </div>


          {/* =================================================
              CLOSE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="
              ml-3
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-slate-700
              transition
              hover:bg-slate-100
              hover:text-slate-900
              focus:outline-none
              focus:ring-2
              focus:ring-slate-300
            "
          >
            <X
              size={26}
              strokeWidth={2}
            />
          </button>

        </div>


        {/* =================================================
            SIDEBAR NAVIGATION
        ================================================= */}

        <Sidebar
          onClose={() => setIsOpen(false)}
        />

      </aside>
    </>
  );
}