import { HiOutlineBriefcase } from "react-icons/hi2";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";

import projects from "../data/projects";

export default function ProjectsPage() {
  // ================================
  // Separate projects by category
  // ================================

  const asPI = projects.filter(
    (project) => project.category === "As PI"
  );

  const asCoPI = projects.filter(
    (project) => project.category === "As Co-PI"
  );

  // ================================
  // Reusable project section
  // ================================

  const renderCategory = (title, categoryProjects) => {
    const ongoing = categoryProjects.filter(
      (project) => project.status === "Ongoing"
    );

    const completed = categoryProjects.filter(
      (project) => project.status === "Completed"
    );

    return (
      <section className="mb-14">

        {/* Category Heading */}

        <h2
          className="
            mb-8
            border-b
            border-gray-300
            pb-3
            text-xl sm:text-2xl
            font-bold
            uppercase
            tracking-wide
            text-[#0A4DA3]
          "
        >
          {title}
        </h2>

        {/* ================= ONGOING ================= */}

        {ongoing.length > 0 && (
          <section className="mb-10">

            {/* Status Heading */}

            <div className="mb-4 flex items-center gap-3">
              <div className="h-6 w-1 rounded bg-[#0A4DA3]" />

              <h2 className="text-lg sm:text-xl font-bold text-[#0A4DA3]">
                Ongoing ({ongoing.length})
              </h2>
            </div>

            {/* Project List */}

            <div>
              {ongoing.map((project) => (
                <article
                  key={project.id}
                  className="
                    border-b
                    border-gray-200
                    py-5
                    last:border-b-0
                  "
                >
                  {/* Title */}

                  <h3
                    className="
                      text-lg
                      font-semibold
                      leading-snug
                      text-gray-900
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Metadata */}

                  <div
                    className="
                      mt-2
                      flex
                      flex-wrap
                      items-center
                      gap-x-6
                      gap-y-2
                      text-sm
                      text-gray-600
                    "
                  >

                    {/* Funding Agency */}

                    <div className="flex items-center gap-2">
                      <HiOutlineBuildingOffice2
                        className="h-4 w-4 text-[#0A4DA3]"
                      />

                      <span>
                        {project.fundingAgency}
                      </span>
                    </div>

                    {/* Budget */}

                    <div className="flex items-center gap-2">
                      <HiOutlineCurrencyRupee
                        className="h-4 w-4 text-[#0A4DA3]"
                      />

                      <span>
                        {project.budget}
                      </span>
                    </div>

                    {/* Collaborator */}

                    {project.collaborator && (
                      <div className="flex items-center gap-2">
                        <FiUsers
                          className="h-4 w-4 text-[#0A4DA3]"
                        />

                        <span>
                          {project.collaborator}
                        </span>
                      </div>
                    )}

                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ================= COMPLETED ================= */}

        {completed.length > 0 && (
          <section className="mb-10">

            {/* Status Heading */}

            <div className="mb-4 flex items-center gap-3">
              <div className="h-6 w-1 rounded bg-[#0A4DA3]" />

              <h2 className="text-lg sm:text-xl font-bold text-[#0A4DA3]">
                Completed ({completed.length})
              </h2>
            </div>

            {/* Project List */}

            <div>
              {completed.map((project) => (
                <article
                  key={project.id}
                  className="
                    border-b
                    border-gray-200
                    py-5
                    last:border-b-0
                  "
                >
                  {/* Title */}

                  <h3
                    className="
                      text-lg
                      font-semibold
                      leading-snug
                      text-gray-900
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Metadata */}

                  <div
                    className="
                      mt-2
                      flex
                      flex-wrap
                      items-center
                      gap-x-6
                      gap-y-2
                      text-sm
                      text-gray-600
                    "
                  >

                    {/* Funding Agency */}

                    <div className="flex items-center gap-2">
                      <HiOutlineBuildingOffice2
                        className="h-4 w-4 text-[#0A4DA3]"
                      />

                      <span>
                        {project.fundingAgency}
                      </span>
                    </div>

                    {/* Budget */}

                    <div className="flex items-center gap-2">
                      <HiOutlineCurrencyRupee
                        className="h-4 w-4 text-[#0A4DA3]"
                      />

                      <span>
                        {project.budget}
                      </span>
                    </div>

                    {/* Collaborator */}

                    {project.collaborator && (
                      <div className="flex items-center gap-2">
                        <FiUsers
                          className="h-4 w-4 text-[#0A4DA3]"
                        />

                        <span>
                          {project.collaborator}
                        </span>
                      </div>
                    )}

                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

      </section>
    );
  };

  // ================================
  // PAGE
  // ================================

  return (
    <section>
      <div className="w-full">

        {/* ================= HERO ================= */}

        <div className="mb-14">

          {/* Badge */}

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
            <HiOutlineBriefcase
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
              Projects
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              mt-6
              text-3xl sm:text-4xl
              font-bold
              tracking-tight
              text-gray-900
            "
          >
            Research Projects
          </h1>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-4xl
              text
              leading-7
              text-gray-600
            "
          >
            Browse funded research projects, collaborative initiatives,
            biomedical innovations, rehabilitation technologies and healthcare
            research undertaken by{" "}
            <span className="font-semibold text-gray-900">
              Prof. Deepak Joshi
            </span>.
          </p>
        </div>

        {/* ================= AS PI ================= */}

        {renderCategory(
          "As Principal Investigator (As PI)",
          asPI
        )}

        {/* ================= AS CO-PI ================= */}

        {renderCategory(
          "As Co-Principal Investigator (As Co-PI)",
          asCoPI
        )}

      </div>
    </section>
  );
}