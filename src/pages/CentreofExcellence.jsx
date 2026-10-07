import {
  HiOutlineAcademicCap,
  HiOutlineBeaker,
  HiOutlineBuildingOffice2,
  HiOutlineGlobeAlt,
  HiOutlineCpuChip,
  HiOutlineHeart,
} from "react-icons/hi2";

const researchAreas = [
  "Neuro Engineering",
  "Rehabilitation Robotics",
  "Prosthetics & Biomechanics",
  "Biomedical AI",
  "Wearable Healthcare",
  "Medical Devices",
];

const stats = [
  { value: "90+", label: "Publications" },
  { value: "10+", label: "Research Projects" },
  { value: "5+", label: "Patents" },
  { value: "₹40+", label: "Crores Funding" },
  // { value: "30+", label: "Researchers" },
  // { value: "15+", label: "Global Collaborations" },
];

const facilities = [
  "Motion Analysis Laboratory",
  "EEG & Neuro Engineering Lab",
  "Rehabilitation Robotics Lab",
  "Biomedical Signal Processing",
  "Wearable Sensors",
  "Medical Device Prototyping",
];

const collaborators = [
  "AIIMS Delhi",
  "Hiroshima University",
  "University of Zurich",
  "ICMR",
  "DST",
  "DBT",
  "AIIA",
  "LYBL Pvt. Ltd.",
];

export default function CentreOfExcellence() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
            <HiOutlineAcademicCap className="h-5 w-5 text-[#0A4DA3]" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4DA3]">
              Centre of Excellence
            </span>
          </div>

          <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900 ">
            Driving Innovation in Biomedical Engineering &
            <span className="text-[#0A4DA3]">
              {" "}
              Neurotechnology
            </span>
          </h2>

          <p className="mt-6 text-lg leading-7 text-gray-600">
            The Centre of Excellence brings together researchers,
            clinicians, industry leaders and students to develop
            next-generation healthcare technologies through
            interdisciplinary research, innovation and clinical
            translation.
          </p>
        </div>

        {/* Research Areas */}

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-gray-200 p-6 transition hover:border-[#0A4DA3] hover:shadow-lg"
            >
              <HiOutlineCpuChip className="mb-4 h-8 w-8 text-[#0A4DA3]" />

              <h3 className="text-lg font-semibold text-gray-900">
                {item}
              </h3>
            </div>
          ))}
        </div>

        {/* Statistics */}

        <div className="mt-24 grid grid-cols-2 gap-6 border-y border-gray-200 py-14 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <h3 className="text-xl font-bold text-[#0A4DA3]">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom */}

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          {/* Facilities */}

          <div>
            <div className="mb-6 flex items-center gap-3">
              <HiOutlineBeaker className="h-6 w-6 text-[#0A4DA3]" />

              <h3 className="text-xl font-semibold">
                Research Infrastructure
              </h3>
            </div>

            <div className="space-y-4">
              {facilities.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Collaborators */}

          <div>
            <div className="mb-6 flex items-center gap-3">
              <HiOutlineGlobeAlt className="h-6 w-6 text-[#0A4DA3]" />

              <h3 className="text-xl font-semibold">
                Clinical & Industry Partners
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {collaborators.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-200 p-5 text-center transition hover:border-[#0A4DA3]"
                >
                  <HiOutlineBuildingOffice2 className="mx-auto mb-3 h-7 w-7 text-[#0A4DA3]" />

                  <p className="font-medium text-gray-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}

        <div className="mt-24 rounded-3xl bg-[#0A4DA3] p-12 text-white">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-3 flex items-center gap-3">
                <HiOutlineHeart className="h-6 w-6" />

                <span className="uppercase tracking-[0.25em] text-blue-200 text-sm">
                  Innovation & Impact
                </span>
              </div>

              <h3 className="text-xl font-bold">
                Advancing Healthcare Through Research &
                Innovation
              </h3>

              <p className="mt-5 text-blue-100 leading-7">
                From wearable healthcare devices and rehabilitation
                robotics to AI-powered biomedical systems, the Centre
                transforms research into technologies that improve
                diagnosis, rehabilitation and patient care while
                fostering global collaborations with academia,
                hospitals and industry.
              </p>
            </div>

            <a
              href="/research"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-[#0A4DA3] transition hover:bg-blue-50"
            >
              Explore the Centre
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}