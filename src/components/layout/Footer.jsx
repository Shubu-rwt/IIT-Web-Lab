import { Link } from "react-router-dom";

import logo from "../../assets/images/iit-logo.png";

export default function Footer() {
  return (
    <footer
      className="
        w-full
        border-t
        border-white/10
        bg-gradient-to-r
        from-[#0F172A]
        via-[#1E3A8A]
        to-[#155E75]
        text-white
      "
    >
      {/* =====================================================
          FOOTER CONTENT
      ====================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          py-8
          sm:px-6
          lg:px-8
        "
      >
        {/* TOP */}

        <div
          className="
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* LOGO + LAB INFORMATION */}

          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="IIT Delhi"
              className="
                h-12
                w-12
                shrink-0
                object-contain
              "
            />

            <div>
              <h2
                className="
                  text-lg
                  font-bold
                  leading-tight
                "
              >
                Neuromechanics research lab
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  text-blue-100
                "
              >
                Indian Institute of Technology Delhi
              </p>
            </div>
          </div>

          {/* LINKS */}

          <nav
            className="
              flex
              flex-wrap
              gap-x-8
              gap-y-4
              text-sm
            "
          >
            <Link
              to="/"
              className="
                transition
                hover:text-cyan-200
              "
            >
              Research
            </Link>

            <Link
              to="/publications"
              className="
                transition
                hover:text-cyan-200
              "
            >
              Publications
            </Link>

            <Link
              to="/projects"
              className="
                transition
                hover:text-cyan-200
              "
            >
              Projects
            </Link>

            <Link
              to="/students"
              className="
                transition
                hover:text-cyan-200
              "
            >
              Students
            </Link>

            <Link
              to="/gallery"
              className="
                transition
                hover:text-cyan-200
              "
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="
                transition
                hover:text-cyan-200
              "
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* DIVIDER */}

        <div className="my-7 h-px bg-white/20" />

        {/* BOTTOM */}

        <div
          className="
            flex
            flex-col
            gap-4
            text-sm
            text-blue-100
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Deepak Joshi Laboratory
            {" • "}
            IIT Delhi
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              self-start
              rounded-full
              bg-white/10
              text-lg
              transition
              hover:bg-white/20
              sm:self-auto
            "
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}