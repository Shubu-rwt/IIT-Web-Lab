import collaborators from "../data/collaborators";
import icollaborations from "../data/icollaborations";

import {
  HiOutlineUserGroup,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

import {
  FiMapPin,
  FiExternalLink,
  FiBriefcase,
} from "react-icons/fi";

import { BsBuilding } from "react-icons/bs";

export default function CollaboratorsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">

        {/* =====================================================
            PAGE HERO
        ===================================================== */}

        <section>

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

          {/* Heading */}

          <h1
            className="
              mt-6
              text-5xl
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
              leading-9
              text-gray-600
            "
          >
            Researchers, clinicians and academic partners from
            leading institutions across India and abroad who have
            collaborated on biomedical engineering, rehabilitation
            technologies and healthcare innovation.
          </p>

        </section>


        {/* =====================================================
            RESEARCH COLLABORATORS
        ===================================================== */}

        <section className="mt-12">

          {/* Section Header */}

          <div className="mb-8 flex items-center gap-4">

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
              Academic & Research Collaborators
            </span>

            <div className="h-px flex-1 bg-gray-200" />

          </div>


          {/* Collaborator Grid */}

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
                    src={person.image}
                    alt={person.name}
                    onError={(e) => {
                      e.currentTarget.src =
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

                  {person.designation && (
                    <p
                      className="
                        text-sm
                        font-medium
                        text-[#0A4DA3]
                      "
                    >
                      {person.designation}
                    </p>
                  )}


                  {/* Department */}

                  {person.department && (
                    <p className="text-sm text-gray-700">
                      {person.department}
                    </p>
                  )}


                  {/* Institution */}

                  {person.institution && (
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
                  )}


                  {/* Location */}

                  {person.location && (
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
                  )}

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            INDUSTRY COLLABORATION
        ===================================================== */}

        <section className="mt-20">

          {/* Section Header */}

          <div className="mb-8 flex items-center gap-4">

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
              Industry Collaboration
            </span>

            <div className="h-px flex-1 bg-gray-200" />

          </div>


          {/* Industry Intro */}

          <div className="max-w-4xl">

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-blue-50
                px-4
                py-2
              "
            >

              <FiBriefcase
                className="h-4 w-4 text-[#0A4DA3]"
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#0A4DA3]
                "
              >
                Industry Partnerships
              </span>

            </div>


            <h2
              className="
                mt-5
                text-3xl
                font-bold
                tracking-tight
                text-gray-900
              "
            >
              Industry Involvement
            </h2>


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


          {/* Industry Cards */}

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

                  {/* Left */}

                  <div className="flex items-start gap-4">

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-50
                      "
                    >

                      <HiOutlineBuildingOffice2
                        size={23}
                        className="text-[#0A4DA3]"
                      />

                    </div>


                    {/* Organization */}

                    <div>

                      <h2
                        className="
                          text-2xl
                          font-semibold
                          text-gray-900
                        "
                      >
                        {item.organization}
                      </h2>


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

                        {item.role && (
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
                        )}

                        {item.year && (
                          <span
                            className="
                              text-sm
                              text-gray-500
                            "
                          >
                            {item.year}
                          </span>
                        )}

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
                        self-start
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

                      <FiExternalLink
                        size={16}
                      />

                    </a>
                  )}

                </div>


                {/* ================= DIVIDER ================= */}

                <div className="my-5 h-px bg-gray-100" />


                {/* ================= DESCRIPTION ================= */}

                {item.shortDescription && (
                  <p
                    className="
                      leading-7
                      text-gray-600
                    "
                  >
                    {item.shortDescription}
                  </p>
                )}

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            BOTTOM SPACE
        ===================================================== */}

        <div className="h-10" />

      </div>

    </main>
  );
}