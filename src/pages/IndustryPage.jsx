import { FiExternalLink, FiBriefcase } from "react-icons/fi";
import icollaborations from "../data/icollaborations";

export default function IndustryPage() {
  return (
    <section>
      <div className="w-full">

        {/* Hero */}

        <div className="max-w-3xl">

          <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4DA3]">
            Industry Collaboration
          </span>

          <h1 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Industry Involvement
          </h1>

          <p className="mt-4 text-gray-600 leading-7">
            Collaborations with startups, healthcare companies and
            industry partners to translate research into practical
            biomedical engineering solutions.
          </p>

        </div>

        <div className="mt-10 h-px bg-gray-200"></div>

        {/* Cards */}

        <div className="mt-10 space-y-6">

          {icollaborations.map((item) => (

            <div
              key={item.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#0A4DA3] hover:shadow-lg"
            >

              {/* Header */}

              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">

                    <FiBriefcase
                      size={22}
                      className="text-[#0A4DA3]"
                    />

                  </div>

                  <div>

                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                      {item.organization}
                    </h2>

                    <div className="mt-2 flex flex-wrap items-center gap-3">

                      <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                        {item.role}
                      </span>

                      <span className="text-sm text-gray-500">
                        {item.year}
                      </span>

                    </div>

                  </div>

                </div>

                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0A4DA3] px-4 py-2 text-sm font-medium text-[#0A4DA3] transition hover:bg-[#0A4DA3] hover:text-white"
                >
                  Visit Website
                  <FiExternalLink size={16} />
                </a>

              </div>

              {/* Divider */}

              <div className="my-5 h-px bg-gray-100"></div>

              {/* Description */}

              <p className="leading-7 text-gray-600">
                {item.shortDescription}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}