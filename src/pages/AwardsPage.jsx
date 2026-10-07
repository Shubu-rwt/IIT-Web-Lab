import { useState } from "react";
import { FiAward, FiUser} from "react-icons/fi";

import awards from "../data/awards";
import { assetPath } from "../utils/assetPath";

export default function AwardsPage() {
  const [hoveredCertificate, setHoveredCertificate] = useState(null);

  // ============================================================
  // GROUP AWARDS BY YEAR
  // ============================================================

  const groupedAwards = awards.reduce((acc, award) => {
    if (!acc[award.year]) {
      acc[award.year] = [];
    }

    acc[award.year].push(award);

    return acc;
  }, {});

  // ============================================================
  // SORT YEARS - LATEST FIRST
  // ============================================================

  const years = Object.keys(groupedAwards).sort(
    (a, b) => Number(b) - Number(a)
  );

  // ============================================================
  // PAGE
  // ============================================================

  return (
    <>
      <main className="bg-[#F8FAFC]">
        <section className="w-full">

          {/* ======================================================
              PAGE HEADER
          ====================================================== */}

          <div className="mb-10">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                bg-cyan-50
                px-4
                py-1
                text-xs
                font-semibold
                uppercase
                tracking-[2px]
                text-cyan-700
              "
            >
              Awards
            </span>

            <h1
              className="
                mt-4
                text-3xl sm:text-4xl
                font-bold
                text-slate-900
                
              "
            >
              Awards & Honours
            </h1>

            <p
              className="
                mt-4
                max-w-3xl
                leading-7
                text-slate-600
              "
            >
              Recognition received by students under{" "}
              <span className="font-semibold text-slate-900">
                Prof. Deepak Joshi
              </span>{" "}
              for outstanding research contributions, innovation
              and excellence in biomedical engineering.
            </p>
          </div>

          {/* ======================================================
              YEAR SECTIONS
          ====================================================== */}

          {years.map((year) => (
            <section
              key={year}
              className="mb-12"
            >

              {/* ==================================================
                  YEAR HEADER
              ================================================== */}

              <div className="mb-5 flex items-center gap-5">
                <h2
                  className="
                    text-2xl sm:text-3xl
                    font-bold
                    text-[#163D88]
                  "
                >
                  {year}
                </h2>

                <div className="h-px flex-1 bg-slate-300" />

                <span className="text-sm text-slate-500">
                  {groupedAwards[year].length}{" "}
                  {groupedAwards[year].length > 1
                    ? "Awards"
                    : "Award"}
                </span>
              </div>

              {/* ==================================================
                  AWARDS CONTAINER
              ================================================== */}

              <div
                className="
                  overflow-visible
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                "
              >

                {groupedAwards[year].map((award) => (
                  <article
                    key={award.id}
                    className="
                      relative
                      overflow-visible
                      border-b
                      border-slate-200
                      px-6
                      py-8
                      last:border-b-0
                      sm:px-8
                      lg:px-10
                    "
                  >

                    {/* ==================================================
                        AWARD CONTENT
                    ================================================== */}

                    <div
                      className={`
                        grid
                        items-start
                        gap-8
                        ${
                          award.certificate
                            ? "lg:grid-cols-[minmax(0,1fr)_170px]"
                            : "grid-cols-1"
                        }
                      `}
                    >

                      {/* ==================================================
                          LEFT SIDE
                      ================================================== */}

                      <div className="min-w-0">

                        {/* Award Type + Year */}

                        <div
                          className="
                            mb-4
                            flex
                            flex-wrap
                            items-center
                            gap-4
                          "
                        >
                          <span
                            className="
                              inline-flex
                              items-center
                              gap-2
                              rounded-full
                              bg-amber-50
                              px-4
                              py-2
                              text-xs
                              font-semibold
                              uppercase
                              tracking-wide
                              text-amber-700
                            "
                          >
                            <FiAward size={14} />

                            {award.prize}
                          </span>

                          <span className="text-sm text-slate-500">
                            {award.year}
                          </span>
                        </div>

                        {/* ==================================================
                            TITLE
                        ================================================== */}

                        <h3
                          className="
                            text-lg
                            font-semibold
                            leading-7
                            text-slate-900
                            
                          "
                        >
                          {award.title}
                        </h3>

                        {/* ==================================================
                            DESCRIPTION
                        ================================================== */}

                        {award.description && (
                          <p
                            className="
                              mt-4
                              max-w-4xl
                              text-sm
                              leading-7
                              text-slate-600
                            "
                          >
                            {award.description}
                          </p>
                        )}

                        {/* ==================================================
                            STUDENT
                        ================================================== */}

                        {award.student && (
                          <div
                            className="
                              mt-5
                              flex
                              items-center
                              gap-2
                            "
                          >
                            <FiUser
                              size={17}
                              className="text-[#163D88]"
                            />

                            <span
                              className="
                                font-medium
                                text-[#163D88]
                              "
                            >
                              {award.student}
                            </span>
                          </div>
                        )}

                      </div>

                      {/* ==================================================
                          CERTIFICATE THUMBNAIL
                      ================================================== */}

                      {award.certificate && (
                        <div
                          className="
                            flex
                            items-start
                            justify-center
                            lg:justify-end
                          "
                        >
                          <a
                            href={assetPath(award.certificate)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() =>
                              setHoveredCertificate(award)
                            }
                            onMouseLeave={() =>
                              setHoveredCertificate(null)
                            }
                            className="
                              block
                              cursor-pointer
                            "
                          >
                            <img
                              src={assetPath(award.certificate)}
                              alt={award.title}
                              className="
                                block
                                h-32
                                w-24
                                rounded-lg
                                border
                                border-slate-200
                                bg-white
                                object-cover
                                shadow-md
                                transition-transform
                                duration-200
                                hover:scale-105
                              "
                            />
                          </a>
                        </div>
                      )}

                    </div>
                  </article>
                ))}

              </div>
            </section>
          ))}

        </section>
      </main>

      {/* ============================================================
          LARGE CERTIFICATE HOVER PREVIEW
          
          This is rendered OUTSIDE the award cards so it cannot
          be clipped by the card, grid, section, or sidebar.
      ============================================================ */}

      {hoveredCertificate?.certificate && (
        <div
          className="
            pointer-events-none
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            p-6
          "
        >
          {/* Dark transparent background */}

          <div
            className="
              absolute
              inset-0
              bg-black/20
            "
          />

          {/* ========================================================
              LARGE IMAGE
          ======================================================== */}

          <div
            className="
              relative
              z-10
              flex
              max-h-[90vh]
              max-w-[90vw]
              items-center
              justify-center
              rounded-2xl
              bg-white
              p-4
              shadow-[0_30px_100px_rgba(0,0,0,0.45)]
            "
          >
            <img
              src={assetPath(hoveredCertificate.certificate)}
              alt={`${hoveredCertificate.title} certificate`}
              className="
                block
                max-h-[82vh]
                max-w-[80vw]
                rounded-lg
                object-contain
              "
            />
          </div>
        </div>
      )}
    </>
  );
}