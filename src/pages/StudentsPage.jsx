import React from "react";

import {
  FiExternalLink,
  FiMail,
  FiArrowLeft,
  FiUsers,
  FiBookOpen,
  FiUserCheck,
  FiFileText,
  FiLinkedin,
} from "react-icons/fi";

import students from "../data/students";
import { assetPath } from "../utils/assetPath";

// ============================================================
// HELPERS
// ============================================================

function getPhoto(student) {
  return assetPath(student?.photo || "/assets/students/default.jpg");
}

function getShortBio(student) {
  if (student?.shortBio) {
    return student.shortBio;
  }

  if (student?.bio) {
    return student.bio.length > 170
      ? `${student.bio.slice(0, 170)}...`
      : student.bio;
  }

  if (student?.detailedBio) {
    return student.detailedBio.length > 170
      ? `${student.detailedBio.slice(0, 170)}...`
      : student.detailedBio;
  }

  return "Research details will be added later.";
}

function hasDetails(student) {
  const details =
    student?.detailedBio || student?.bio;

  if (!details) {
    return false;
  }

  const text = details.trim().toLowerCase();

  return (
    text !== "details will be added later." &&
    text !== "intern."
  );
}

// ============================================================
// STUDENT LINKS
// ============================================================

function getStudentOptions(student) {
  const options = [];

  // EMAIL
  if (
    typeof student?.email === "string" &&
    student.email.trim()
  ) {
    options.push({
      key: "email",
      label: "Email",
      href: `mailto:${student.email}`,
      icon: FiMail,
      external: false,
    });
  }

  // WEBSITE
  if (
    typeof student?.website === "string" &&
    student.website.trim()
  ) {
    options.push({
      key: "website",
      label: student.websiteLabel || "Website",
      href: student.website,
      icon: FiExternalLink,
      external: true,
    });
  }

  // LINKEDIN
  if (
    typeof student?.linkedin === "string" &&
    student.linkedin.trim()
  ) {
    options.push({
      key: "linkedin",
      label: "LinkedIn",
      href: student.linkedin,
      icon: FiLinkedin,
      external: true,
    });
  }

  // GOOGLE SCHOLAR
  if (
    typeof student?.googleScholar === "string" &&
    student.googleScholar.trim()
  ) {
    options.push({
      key: "googleScholar",
      label: "Scholar",
      href: student.googleScholar,
      icon: FiBookOpen,
      external: true,
    });
  }

  // RESEARCH GATE
  if (
    typeof student?.researchGate === "string" &&
    student.researchGate.trim()
  ) {
    options.push({
      key: "researchGate",
      label: "ResearchGate",
      href: student.researchGate,
      icon: FiExternalLink,
      external: true,
    });
  }

  // CV
  if (
    typeof student?.cv === "string" &&
    student.cv.trim()
  ) {
    options.push({
      key: "cv",
      label: "CV",
      href: student.cv,
      icon: FiFileText,
      external: true,
    });
  }

  // PUBLICATIONS
  if (
    typeof student?.publications === "string" &&
    student.publications.trim()
  ) {
    options.push({
      key: "publications",
      label: "Publications",
      href: student.publications,
      icon: FiBookOpen,
      external: true,
    });
  }

  return options;
}

// ============================================================
// STUDENT LINK BUTTONS
// ============================================================

function StudentOptions({ student }) {
  const options = getStudentOptions(student);

  if (!options.length) {
    return null;
  }

  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {options.map((option) => {
        const Icon = option.icon;

        return (
          <a
            key={option.key}
            href={option.href}
            target={
              option.external ? "_blank" : undefined
            }
            rel={
              option.external
                ? "noopener noreferrer"
                : undefined
            }
            title={option.label}
            className="
              inline-flex
              items-center
              gap-1
              rounded-md
              border
              border-gray-200
              bg-white
              px-2
              py-1
              text-xs
              font-medium
              text-gray-600
              transition
              hover:border-[#0A4DA3]
              hover:bg-blue-50
              hover:text-[#0A4DA3]
            "
          >
            <Icon size={10} />
            {option.label}
          </a>
        );
      })}
    </div>
  );
}

// ============================================================
// SECTION HEADING
// ============================================================

function SectionHeading({
  icon: Icon,
  children,
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-blue-50
          text-[#0A4DA3]
        "
      >
        <Icon size={18} />
      </div>

      <h2
        className="
          text-xl sm:text-2xl
          font-bold
          tracking-tight
          text-gray-900
        "
      >
        {children}
      </h2>
    </div>
  );
}

// ============================================================
// FULL STUDENT CARD
// ============================================================

function StudentCard({ student }) {
  const [showDetails, setShowDetails] =
    React.useState(false);

  const canShowDetails = hasDetails(student);

  const detailedBio =
    student?.detailedBio ||
    student?.bio ||
    "Research details will be added later.";

  return (
    <div
      className="
        relative
        h-[248px]
        overflow-hidden
        rounded-xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >
      {/* ====================================================
          INITIAL PROFILE VIEW
      ==================================================== */}

      <div
        className={`
          absolute
          inset-0
          flex
          bg-white
          transition-transform
          duration-500
          ease-in-out
          ${
            showDetails
              ? "-translate-x-full"
              : "translate-x-0"
          }
        `}
      >
        {/* ==================================================
            PHOTO
            NO TAG
            NO GRADIENT
        ================================================== */}

        <div
          className="
            relative
            w-[34%]
            shrink-0
            overflow-hidden
            bg-gray-100
          "
        >
          {student?.photo ? (
            <img
              src={getPhoto(student)}
              alt={student?.name || "Student"}
              className="
                h-full
                w-full
                object-cover
              "
              onError={(event) => {
                event.currentTarget.src =
                  assetPath("/assets/students/default.jpg");
              }}
            />
          ) : (
            <div
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
                bg-gray-100
              "
            >
              <FiUsers
                size={32}
                className="text-gray-400"
              />
            </div>
          )}
        </div>

        {/* ==================================================
            PROFILE CONTENT
        ================================================== */}

        <div
          className="
            flex
            min-w-0
            flex-1
            flex-col
            p-4
          "
        >
          {/* NAME */}

          <h3
            className="
              break-words
              text-base
              font-bold
              leading-5
              text-gray-900
            "
          >
            {student?.name}
          </h3>

          {/* DESIGNATION */}

          {student?.designation && (
            <p
              className="
                mt-1
                text-xs
                font-semibold
                leading-4
                text-[#0A4DA3]
              "
            >
              {student.designation}
            </p>
          )}

          {/* SHORT BIO */}

          <p
            className="
              mt-2
              line-clamp-3
              text-sm
              leading-5
              text-gray-600
            "
          >
            {getShortBio(student)}
          </p>

          {/* ==================================================
              LINKS ONLY ON INITIAL CARD
          ================================================== */}

          <div className="mt-auto">
            <StudentOptions
              student={student}
            />

            {/* VIEW DETAILS */}

            {canShowDetails && (
              <button
                type="button"
                onClick={() =>
                  setShowDetails(true)
                }
                className="
                  mt-2
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-md
                  bg-[#0A4DA3]
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-800
                "
              >
                View Details
                <FiExternalLink size={11} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ====================================================
          DETAILS VIEW
          NO LINKS HERE
      ==================================================== */}

      <div
        className={`
          absolute
          inset-0
          flex
          flex-col
          border-l-4
          border-[#0A4DA3]
          bg-gray-50
          transition-transform
          duration-500
          ease-in-out
          ${
            showDetails
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* DETAILS CONTENT */}

        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            p-4
          "
        >
          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={() =>
              setShowDetails(false)
            }
            className="
              absolute
              right-3
              top-3
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              text-gray-400
              transition
              hover:bg-white
              hover:text-[#0A4DA3]
            "
          >
            ×
          </button>

          {/* NAME */}

          <h3
            className="
              pr-8
              text-base
              font-bold
              leading-5
              text-gray-900
            "
          >
            {student?.name}
          </h3>

          {/* DESIGNATION */}

          {student?.designation && (
            <p
              className="
                mt-1
                text-xs
                font-semibold
                leading-4
                text-[#0A4DA3]
              "
            >
              {student.designation}
            </p>
          )}

          {/* DIVIDER */}

          <div
            className="
              my-2.5
              h-px
              bg-gray-200
            "
          />

          {/* FULL BIO ONLY */}

          <p
            className="
              whitespace-pre-line
              text-sm
              leading-5
              text-gray-600
            "
          >
            {detailedBio}
          </p>
        </div>

        {/* ==================================================
            BACK BUTTON
        ================================================== */}

        <div
          className="
            shrink-0
            border-t
            border-gray-200
            bg-white
            px-4
            py-2
          "
        >
          <button
            type="button"
            onClick={() =>
              setShowDetails(false)
            }
            className="
              inline-flex
              items-center
              gap-1.5
              text-xs
              font-semibold
              text-[#0A4DA3]
              hover:underline
            "
          >
            <FiArrowLeft size={12} />
            Back to Profile
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// INTERN OPTIONS
// ============================================================

function InternOptions({
  student,
  onDetails,
}) {
  const options = getStudentOptions(student);

  const canShowDetails =
    hasDetails(student);

  if (
    !options.length &&
    !canShowDetails
  ) {
    return null;
  }

  return (
    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-[72px]
        z-30
        w-[130px]
        -translate-x-1/2
        rounded-lg
        border
        border-gray-200
        bg-white
        p-2
        opacity-0
        shadow-xl
        transition-all
        duration-200
        group-hover:pointer-events-auto
        group-hover:top-[68px]
        group-hover:opacity-100
      "
    >
      {/* ARROW */}

      <div
        className="
          absolute
          -top-1.5
          left-1/2
          h-3
          w-3
          -translate-x-1/2
          rotate-45
          border-l
          border-t
          border-gray-200
          bg-white
        "
      />

      <div
        className="
          relative
          flex
          flex-wrap
          justify-center
          gap-1
        "
      >
        {options.map((option) => {
          const Icon = option.icon;

          return (
            <a
              key={option.key}
              href={option.href}
              target={
                option.external
                  ? "_blank"
                  : undefined
              }
              rel={
                option.external
                  ? "noopener noreferrer"
                  : undefined
              }
              title={option.label}
              className="
                inline-flex
                items-center
                gap-1
                rounded
                border
                border-gray-200
                bg-white
                px-1.5
                py-1
                text-xs
                font-medium
                text-gray-600
                hover:border-[#0A4DA3]
                hover:bg-blue-50
                hover:text-[#0A4DA3]
              "
            >
              <Icon size={9} />
              {option.label}
            </a>
          );
        })}

        {canShowDetails && (
          <button
            type="button"
            onClick={onDetails}
            className="
              inline-flex
              items-center
              gap-1
              rounded
              bg-[#0A4DA3]
              px-2
              py-1
              text-xs
              font-semibold
              text-white
              hover:bg-blue-800
            "
          >
            <FiExternalLink size={9} />
            Details
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================================
// SUMMER / VISITING INTERN CARD
// ============================================================

function InternCard({ student }) {
  const [showDetails, setShowDetails] =
    React.useState(false);

  const detailedBio =
    student?.detailedBio ||
    student?.bio ||
    "Intern.";

  return (
    <div
      className="
        group
        relative
        flex
        min-h-[150px]
        flex-col
        items-center
        px-2
        pt-1
      "
    >
      {/* PHOTO */}

      <div
        className="
          relative
          h-[82px]
          w-[82px]
          rounded-full
          border-[3px]
          border-white
          bg-gray-100
          shadow-md
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:shadow-lg
        "
      >
        {student?.photo ? (
          <img
            src={getPhoto(student)}
            alt={student?.name || "Intern"}
            className="
              h-full
              w-full
              rounded-full
              object-cover
            "
            onError={(event) => {
              event.currentTarget.src =
                "/students/default.jpg";
            }}
          />
        ) : (
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              rounded-full
              bg-gray-100
            "
          >
            <FiUsers
              size={27}
              className="text-gray-400"
            />
          </div>
        )}

        {/* HOVER OPTIONS */}

        <InternOptions
          student={student}
          onDetails={() =>
            setShowDetails(true)
          }
        />
      </div>

      {/* NAME */}

      <div className="mt-3 text-center">
        <h3
          className="
            text-sm
            font-semibold
            leading-5
            text-gray-900
          "
        >
          {student?.name}
        </h3>

        <p
          className="
            mt-0.5
            text-xs
            text-gray-500
          "
        >
          Intern
        </p>
      </div>

      {/* DETAIL POPUP */}

      {showDetails && (
        <div
          className="
            absolute
            left-1/2
            top-0
            z-50
            w-[220px]
            -translate-x-1/2
            rounded-xl
            border
            border-gray-200
            border-l-4
            border-l-[#0A4DA3]
            bg-white
            p-4
            text-left
            shadow-xl
          "
        >
          {/* CLOSE */}

          <button
            type="button"
            onClick={() =>
              setShowDetails(false)
            }
            className="
              absolute
              right-3
              top-2
              text-lg
              text-gray-400
              hover:text-[#0A4DA3]
            "
          >
            ×
          </button>

          {/* NAME */}

          <h3
            className="
              pr-5
              text-sm
              font-bold
              text-gray-900
            "
          >
            {student?.name}
          </h3>

          <p
            className="
              mt-1
              text-xs
              font-semibold
              text-[#0A4DA3]
            "
          >
            Intern
          </p>

          <div
            className="
              my-3
              h-px
              bg-gray-200
            "
          />

          {/* BIO */}

          <p
            className="
              text-xs
              leading-5
              text-gray-600
            "
          >
            {detailedBio}
          </p>

          {/* NO LINKS IN DETAIL POPUP */}

          <button
            type="button"
            onClick={() =>
              setShowDetails(false)
            }
            className="
              mt-3
              inline-flex
              items-center
              gap-1
              text-xs
              font-semibold
              text-[#0A4DA3]
              hover:underline
            "
          >
            <FiArrowLeft size={11} />
            Back
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================================
// ALUMNI NAME CARD
// ============================================================

function AlumniNameCard({ name }) {
  return (
    <div
      className="
        flex
        min-h-[46px]
        items-center
        rounded-lg
        border
        border-gray-200
        bg-white
        px-4
        py-2.5
        shadow-sm
        transition
        hover:border-[#0A4DA3]
        hover:bg-blue-50/40
      "
    >
      <span
        className="
          mr-2.5
          h-1.5
          w-1.5
          shrink-0
          rounded-full
          bg-[#0A4DA3]
        "
      />

      <span
        className="
          text-xs
          font-medium
          leading-5
          text-gray-700
        "
      >
        {name}
      </span>
    </div>
  );
}

// ============================================================
// LAB ALUMNI
// ============================================================

function AlumniSection() {
  const alumni = Array.isArray(
    students?.labAlumni
  )
    ? students.labAlumni
    : [];

  const [activeCategory, setActiveCategory] =
    React.useState(
      alumni?.[0]?.category || ""
    );

  if (!alumni.length) {
    return null;
  }

  const activeGroup =
    alumni.find(
      (group) =>
        group.category === activeCategory
    ) || alumni[0];

  const members = Array.isArray(
    activeGroup?.members
  )
    ? activeGroup.members
    : Array.isArray(activeGroup?.rows)
    ? activeGroup.rows
    : [];

  const category =
    activeGroup?.category || "";

  // ==========================================================
  // THESE ALUMNI CATEGORIES ARE NAME ONLY
  // ==========================================================

  const namesOnly =
    category === "M.Tech Students" ||
    category === "M.Tech students" ||
    category === "Project Associates" ||
    category === "Interns";

  function getCategoryLabel(value) {
    const labels = {
      "Post Doc. Fellow":
        "Post Doc. Fellows",

      "Post Doc Fellow":
        "Post Doc. Fellows",

      PhD: "Ph.D. Scholars",

      "Ph.D. Scholar":
        "Ph.D. Scholars",

      "M.Tech students":
        "M.Tech Students",

      "M.Tech Students":
        "M.Tech Students",

      "Project Associates":
        "Project Associates",

      Interns: "Interns",
    };

    return labels[value] || value;
  }

  function getFullRowNames(member) {
    if (!member?.fullRow) {
      return [];
    }

    if (
      typeof member?.designation !==
      "string"
    ) {
      return [];
    }

    return member.designation
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean);
  }

  return (
    <section className="mt-14">
      {/* ==================================================
          HEADING
      ================================================== */}

      <SectionHeading icon={FiUsers}>
        Lab Alumni
      </SectionHeading>

      {/* ==================================================
          CATEGORY TABS
      ================================================== */}

      <div
        className="
          mb-5
          flex
          flex-wrap
          gap-2
        "
      >
        {alumni.map((group) => {
          const active =
            group.category ===
            activeCategory;

          return (
            <button
              key={group.category}
              type="button"
              onClick={() =>
                setActiveCategory(
                  group.category
                )
              }
              className={`
                rounded-full
                border
                px-3
                py-1.5
                text-xs
                font-semibold
                transition
                ${
                  active
                    ? "border-[#0A4DA3] bg-[#0A4DA3] text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#0A4DA3] hover:text-[#0A4DA3]"
                }
              `}
            >
              {getCategoryLabel(
                group.category
              )}
            </button>
          );
        })}
      </div>

      {/* ==================================================
          NAME-ONLY ALUMNI
      ================================================== */}

      {namesOnly ? (
        <div
          className="
            grid
            grid-cols-2
            gap-2.5
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6
          "
        >
          {members.flatMap(
            (member, index) => {
              {/* NORMAL ROW */}

              if (!member?.fullRow) {
                return [
                  <AlumniNameCard
                    key={
                      member?.name ||
                      `alumni-${index}`
                    }
                    name={member?.name}
                  />,
                ];
              }

              {/* FULL ROW */}

              return getFullRowNames(
                member
              ).map((name) => (
                <AlumniNameCard
                  key={name}
                  name={name}
                />
              ));
            }
          )}
        </div>
      ) : (
        /* ==================================================
           POST DOC / PHD TABLE
        ================================================== */

        <div
          className="
            overflow-hidden
            rounded-xl
            border
            border-gray-200
            bg-white
            shadow-sm
          "
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-gray-50">
                  <th
                    className="
                      border-b
                      border-gray-200
                      px-4
                      py-3
                      text-left
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-gray-500
                    "
                  >
                    Name
                  </th>

                  <th
                    className="
                      border-b
                      border-gray-200
                      px-4
                      py-3
                      text-left
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-gray-500
                    "
                  >
                    Current Designation
                  </th>
                </tr>
              </thead>

              <tbody>
                {members.map(
                  (member, index) => (
                    <tr
                      key={
                        member?.name ||
                        index
                      }
                      className="
                        transition
                        hover:bg-blue-50/40
                      "
                    >
                      <td
                        className="
                          border-b
                          border-gray-100
                          px-4
                          py-3
                          text-xs
                          font-semibold
                          text-gray-800
                        "
                      >
                        {member?.name ||
                          "—"}
                      </td>

                      <td
                        className="
                          border-b
                          border-gray-100
                          px-4
                          py-3
                          text-xs
                          leading-5
                          text-gray-600
                        "
                        dangerouslySetInnerHTML={{
                          __html:
                            member?.designation ||
                            "—",
                        }}
                      />
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}

// ============================================================
// MAIN STUDENTS PAGE
// ============================================================

export default function StudentsPage() {
  const internationalFellows =
    Array.isArray(
      students?.internationalFellows
    )
      ? students.internationalFellows
      : [];

  const phdScholars =
    Array.isArray(
      students?.phdScholars
    )
      ? students.phdScholars
      : [];

  const projectResearchScientists =
    Array.isArray(
      students?.projectResearchScientists
    )
      ? students.projectResearchScientists
      : [];

  const mastersStudents =
    Array.isArray(
      students?.mastersStudents
    )
      ? students.mastersStudents
      : [];

  const projectAssociates =
    Array.isArray(
      students?.labMembers
        ?.projectAssociates
    )
      ? students.labMembers
          .projectAssociates
      : [];

  const masterThesisInterns =
    Array.isArray(
      students?.labMembers
        ?.masterThesisInterns
    )
      ? students.labMembers
          .masterThesisInterns
      : [];

  const summerVisitingInterns =
    Array.isArray(
      students?.labMembers
        ?.summerVisitingInterns
    )
      ? students.labMembers
          .summerVisitingInterns
      : [];

  // ==========================================================
  // FULL CARD GRID
  // ==========================================================

  const twoCardGrid = `
    grid
    grid-cols-1
    gap-5
    lg:grid-cols-2
  `;

  // ==========================================================
  // INTERN GRID
  // ==========================================================

  const internGrid = `
    grid
    grid-cols-3
    gap-x-2
    gap-y-4
    sm:grid-cols-4
    md:grid-cols-5
    lg:grid-cols-6
    xl:grid-cols-7
  `;

  return (
    <section
      className="w-full"
    >
      {/* ====================================================
          PAGE HEADER
      ==================================================== */}

      <div
        className="
          border-b
          border-gray-200
          pb-6
        "
      >
        <div className="w-full">
          <span
            className="
              inline-flex
              rounded-full
              bg-blue-50
              px-3
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#0A4DA3]
            "
          >
            Students
          </span>

          <h1
            className="
              mt-2
              text-3xl sm:text-4xl
              font-bold
              tracking-tight
              text-gray-900
            "
          >
            Research Students
          </h1>

          <p
            className="
              mt-3
              max-w-3xl
              text-sm
              leading-6
              text-gray-600
            "
          >
            Meet the researchers, scholars,
            fellows, project associates and
            interns contributing to the
            Neuromechanics Research Lab.
          </p>
        </div>
      </div>

      {/* ====================================================
          MAIN CONTENT
      ==================================================== */}

      <main className="w-full pt-8 sm:pt-10">
        {/* ==================================================
            INTERNATIONAL FELLOWS
        ================================================== */}

        {internationalFellows.length > 0 && (
          <section>
            <SectionHeading icon={FiUserCheck}>
              International Fellows
            </SectionHeading>

            <div className={twoCardGrid}>
              {internationalFellows.map(
                (student) => (
                  <StudentCard
                    key={student.id}
                    student={student}
                  />
                )
              )}
            </div>
          </section>
        )}

        {/* ==================================================
            PHD SCHOLARS
        ================================================== */}

        {phdScholars.length > 0 && (
          <section className="mt-16 sm:mt-20">
            <SectionHeading icon={FiBookOpen}>
              PhD Scholars
            </SectionHeading>

            <div className={twoCardGrid}>
              {phdScholars.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                />
              ))}
            </div>
          </section>
        )}

        {/* ==================================================
            PROJECT RESEARCH SCIENTISTS
        ================================================== */}

        {projectResearchScientists.length >
          0 && (
          <section className="mt-16 sm:mt-20">
            <SectionHeading icon={FiUserCheck}>
              Project Research Scientists
            </SectionHeading>

            <div className={twoCardGrid}>
              {projectResearchScientists.map(
                (student) => (
                  <StudentCard
                    key={student.id}
                    student={student}
                  />
                )
              )}
            </div>
          </section>
        )}

        {/* ==================================================
            MASTERS STUDENTS
        ================================================== */}

        {mastersStudents.length > 0 && (
          <section className="mt-16 sm:mt-20">
            <SectionHeading icon={FiBookOpen}>
              Masters Students
            </SectionHeading>

            <div className={twoCardGrid}>
              {mastersStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                />
              ))}
            </div>
          </section>
        )}

        {/* ==================================================
            LAB MEMBERS
        ================================================== */}

        {(projectAssociates.length > 0 ||
          masterThesisInterns.length > 0 ||
          summerVisitingInterns.length >
            0) && (
          <section className="mt-16 sm:mt-20">
            <SectionHeading icon={FiUsers}>
              Lab Members
            </SectionHeading>

            {/* =================================================
                PROJECT ASSOCIATES
            ================================================= */}

            {projectAssociates.length > 0 && (
              <div className="mb-10">
                <h3
                  className="
                    mb-5
                    text-lg
                    font-bold
                    text-gray-900
                  "
                >
                  Project Associates
                </h3>

                <div className={twoCardGrid}>
                  {projectAssociates.map(
                    (student) => (
                      <StudentCard
                        key={student.id}
                        student={student}
                      />
                    )
                  )}
                </div>
              </div>
            )}

            {/* =================================================
                MASTER THESIS INTERNS
            ================================================= */}

            {masterThesisInterns.length > 0 && (
              <div className="mb-10">
                <h3
                  className="
                    mb-5
                    text-lg
                    font-bold
                    text-gray-900
                  "
                >
                  Master Thesis Interns
                </h3>

                <div className={twoCardGrid}>
                  {masterThesisInterns.map(
                    (student) => (
                      <StudentCard
                        key={student.id}
                        student={student}
                      />
                    )
                  )}
                </div>
              </div>
            )}

            {/* =================================================
                SUMMER / VISITING INTERNS
            ================================================= */}

            {summerVisitingInterns.length >
              0 && (
              <div>
                <h3
                  className="
                    mb-4
                    text-lg
                    font-bold
                    text-gray-900
                  "
                >
                  Summer / Visiting Interns
                </h3>

                <div className={internGrid}>
                  {summerVisitingInterns.map(
                    (student) => (
                      <InternCard
                        key={student.id}
                        student={student}
                      />
                    )
                  )}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ==================================================
            LAB ALUMNI
        ================================================== */}

        <AlumniSection />
      </main>
    </section>
  );
}