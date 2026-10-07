import { FiAward, FiUser } from "react-icons/fi";
import awards from "../data/awards";

export default function AwardsPage() {
  // Group awards by year
  const groupedAwards = awards.reduce((acc, award) => {
    if (!acc[award.year]) {
      acc[award.year] = [];
    }

    acc[award.year].push(award);

    return acc;
  }, {});

  // Latest year first
  const years = Object.keys(groupedAwards).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {/* ================= HEADER ================= */}

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
            awards
          </span>

          <h1
            className="
              mt-4
              text-4xl
              font-bold
              text-slate-900
              lg:text-5xl
            "
          >
            Awards & Honours
          </h1>

          <p
            className="
              mt-4
              max-w-3xl
              text-slate-600
              leading-7
            "
          >
            Recognition received by students under{" "}
            <span className="font-semibold text-slate-900">
              Prof. Deepak Joshi
            </span>{" "}
            for outstanding research contributions, innovation and excellence
            in biomedical engineering.
          </p>
        </div>

        {/* ================= YEAR SECTIONS ================= */}

        {years.map((year) => (
          <section key={year} className="mb-10">

            {/* Year Header */}

            <div className="mb-5 flex items-center gap-5">
              <h2 className="text-4xl font-bold text-[#163D88]">
                {year}
              </h2>

              <div className="h-px flex-1 bg-slate-300" />

              <span className="text-sm text-slate-500">
                {groupedAwards[year].length}{" "}
                {groupedAwards[year].length > 1 ? "Awards" : "Award"}
              </span>
            </div>

            {/* ================= AWARDS LIST ================= */}

            <div className="overflow-visible rounded-2xl border border-slate-200 bg-white">

              {groupedAwards[year].map((award) => (
                <article
                  key={award.id}
                  className="
                    relative
                    border-b
                    border-slate-200
                    px-8
                    py-8
                    last:border-b-0
                    lg:px-10
                  "
                >
                  <div
                    className={`
                      grid
                      gap-8
                      ${
                        award.certificate
                          ? "lg:grid-cols-[minmax(0,1fr)_120px]"
                          : "grid-cols-1"
                      }
                    `}
                  >

                    {/* ================= LEFT CONTENT ================= */}

                    <div className="min-w-0">

                      {/* Prize + Year */}

                      <div className="mb-4 flex items-center gap-4">
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-amber-50
                            px-3
                            py-1
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

                      {/* Title */}

                      <h3 className="text-2xl font-semibold text-slate-900">
                        {award.title}
                      </h3>

                      {/* Description */}

                      <p
                        className="
                          mt-4
                          text-[15px]
                          leading-8
                          text-slate-600
                        "
                      >
                        {award.description}
                      </p>

                      {/* Student */}

                      <div className="mt-5 flex items-center gap-2">
                        <FiUser className="text-[#163D88]" />

                        <span className="font-medium text-[#163D88]">
                          {award.student}
                        </span>
                      </div>
                    </div>

                    {/* ================= CERTIFICATE ================= */}

                    {award.certificate && (
                      <div className="relative z-20 flex justify-end">
                        <div className="group relative">

                          {/* Small Certificate */}

                          <a
                            href={award.certificate}
                            target="_blank"
                            rel="noreferrer"
                            className="block"
                          >
                            <img
                              src={award.certificate}
                              alt={award.title}
                              className="
                                h-32
                                w-24
                                cursor-pointer
                                rounded-lg
                                border
                                border-slate-200
                                object-cover
                                shadow-sm
                                transition
                                duration-200
                                hover:shadow-md
                              "
                            />
                          </a>

                          {/* ================= LARGE HOVER PREVIEW ================= */}

                          <div
                            className="
                              pointer-events-none
                              absolute
                              right-full
                              top-1/2
                              z-[100]
                              mr-6
                              -translate-y-1/2
                              scale-95
                              opacity-0
                              transition-all
                              duration-300
                              ease-out
                              group-hover:pointer-events-auto
                              group-hover:scale-100
                              group-hover:opacity-100
                            "
                          >
                            <div
                              className="
                                overflow-hidden
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-3
                                shadow-2xl
                              "
                            >
                              <img
                                src={award.certificate}
                                alt={`${award.title} preview`}
                                className="
                                  max-h-[85vh]
                                  max-w-[70vw]
                                  w-auto
                                  rounded-xl
                                  object-contain
                                "
                              />
                            </div>
                          </div>

                        </div>
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
  );
}