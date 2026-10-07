import collaborators from "../data/collaborators";
import icollaborations from "../data/icollaborations";

import { HiOutlineUserGroup } from "react-icons/hi2";
import { FiMapPin, FiExternalLink, FiBriefcase } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";

import { assetPath } from "../utils/assetPath";

export default function CollaboratorsPage() {
  return (
    <main>

      {/* =====================================================
          RESEARCH COLLABORATORS
      ===================================================== */}

      <section>
        <div className="w-full">

          {/* ================= HERO ================= */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">

              <HiOutlineUserGroup
                className="h-5 w-5 text-[#0A4DA3]"
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#0A4DA3]
                "
              >
                Collaborators
              </span>

            </div>

            {/* Title */}

            <h1
              className="
                mt-6
                text-3xl sm:text-4xl
                font-bold
                tracking-tight
                text-gray-900
              "
            >
              Research Collaborators
            </h1>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-5xl
                text-xl
                leading-7
                text-gray-600
              "
            >
              Researchers, clinicians and academic partners from
              leading institutions across India and abroad who have
              collaborated on biomedical engineering, rehabilitation
              technologies and healthcare innovation.
            </p>

            {/* Directory Divider */}

            <div
              className="
                mt-12
                mb-12
                flex
                items-center
                gap-4
              "
            >

              <span
                className="
                  whitespace-nowrap
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#0A4DA3]
                "
              >
                Directory
              </span>

              <div className="h-px flex-1 bg-gray-200" />

            </div>

          </div>


          {/* ================= COLLABORATOR GRID ================= */}

          <div
            className="
              grid
              gap-8
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >

            {collaborators.map((person) => (

              <article
                key={person.id}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#0A4DA3]
                  hover:shadow-md
                "
              >

                {/* ================= IMAGE ================= */}

                <div
                  className="
                    flex
                    justify-center
                    border-b
                    border-gray-100
                    bg-gray-50
                    p-6
                  "
                >

                  <img
                    src={assetPath(person.image)}
                    alt={person.name}
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/200x200/E5E7EB/6B7280?text=Photo";
                    }}
                    className="
                      h-24
                      w-24
                      rounded-full
                      border-4
                      border-white
                      object-cover
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:scale-105
                    "
                  />

                </div>


                {/* ================= DETAILS ================= */}

                <div className="space-y-2 p-5 text-center">

                  {/* Name */}

                  <h3
                    className="
                      text-lg
                      font-semibold
                      leading-snug
                      text-gray-900
                    "
                  >
                    {person.name}
                  </h3>

                  {/* Designation */}

                  <p
                    className="
                      text-sm
                      font-medium
                      text-[#0A4DA3]
                    "
                  >
                    {person.designation}
                  </p>

                  {/* Department */}

                  <p className="text-sm text-gray-700">
                    {person.department}
                  </p>

                  {/* Institution */}

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-sm
                      text-gray-600
                    "
                  >

                    <BsBuilding
                      className="h-4 w-4 flex-shrink-0"
                    />

                    <span>
                      {person.institution}
                    </span>

                  </div>

                  {/* Location */}

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-sm
                      text-gray-500
                    "
                  >

                    <FiMapPin
                      className="h-4 w-4 flex-shrink-0"
                    />

                    <span>
                      {person.location}
                    </span>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          INDUSTRY INVOLVEMENT
      ===================================================== */}

      <section>
        <div className="w-full pt-10 sm:pt-12">

          {/* ================= HERO ================= */}

          <div className="max-w-3xl">

            {/* Badge */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-blue-50
                px-4
                py-1
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#0A4DA3]
              "
            >
              <FiBriefcase size={14} />

              Industry Collaboration
            </span>

            {/* Title */}

            <h2
              className="
                mt-5
                text-2xl sm:text-3xl
                font-bold
                tracking-tight
                text-gray-900
              "
            >
              Industry Involvement
            </h2>

            {/* Description */}

            <p
              className="
                mt-4
                leading-7
                text-gray-600
              "
            >
              Collaborations with startups, healthcare companies
              and industry partners to translate research into
              practical biomedical engineering solutions.
            </p>

          </div>


          {/* ================= DIVIDER ================= */}

          <div className="mt-10 h-px bg-gray-200" />


          {/* ================= INDUSTRY CARDS ================= */}

          <div className="mt-10 space-y-6">

            {icollaborations.map((item) => (

              <article
                key={item.id}
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:border-[#0A4DA3]
                  hover:shadow-lg
                "
              >

                {/* ================= HEADER ================= */}

                <div
                  className="
                    flex
                    flex-col
                    gap-4
                    md:flex-row
                    md:items-start
                    md:justify-between
                  "
                >

                  {/* ================= LEFT ================= */}

                  <div className="flex items-start gap-4">

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-50
                      "
                    >

                      <FiBriefcase
                        size={22}
                        className="text-[#0A4DA3]"
                      />

                    </div>


                    {/* Organization Information */}

                    <div>

                      {/* Organization */}

                      <h3
                        className="
                          text-xl
                          font-semibold
                          text-gray-900
                        "
                      >
                        {item.organization}
                      </h3>


                      {/* Role + Year */}

                      <div
                        className="
                          mt-2
                          flex
                          flex-wrap
                          items-center
                          gap-3
                        "
                      >

                        <span
                          className="
                            rounded-full
                            bg-gray-100
                            px-3
                            py-1
                            text-sm
                            font-medium
                            text-gray-700
                          "
                        >
                          {item.role}
                        </span>

                        <span
                          className="
                            text-sm
                            text-gray-500
                          "
                        >
                          {item.year}
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* ================= WEBSITE ================= */}

                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-[#0A4DA3]
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-[#0A4DA3]
                        transition
                        hover:bg-[#0A4DA3]
                        hover:text-white
                      "
                    >

                      Visit Website

                      <FiExternalLink size={16} />

                    </a>
                  )}

                </div>


                {/* ================= DIVIDER ================= */}

                <div className="my-5 h-px bg-gray-100" />


                {/* ================= DESCRIPTION ================= */}

                <p
                  className="
                    leading-7
                    text-gray-600
                  "
                >
                  {item.shortDescription}
                </p>

              </article>

            ))}

          </div>

        </div>
      </section>

    </main>
  );
}