// import { useState } from "react";

// import {
//   FiSearch,
//   FiCalendar,
//   FiExternalLink,
//   FiFileText,
//   FiBookOpen,
// } from "react-icons/fi";

// import publicationData from "../data/publications";


// export default function PublicationsPage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeFilter, setActiveFilter] = useState("All");

//   /* =========================================================
//      PUBLICATION COUNTS
//   ========================================================= */

//   const journalCount = publicationData.journals?.length || 0;
//   const conferenceCount = publicationData.conferences?.length || 0;
//   const patentCount = publicationData.patents?.length || 0;
//   const bookChapterCount =
//     publicationData.bookChapters?.length || 0;

//   const totalPublications =
//     journalCount +
//     conferenceCount +
//     patentCount +
//     bookChapterCount;

//   /* =========================================================
//      PUBLICATION STATISTICS
//   ========================================================= */

//   const publicationStats = [
//     {
//       value: totalPublications,
//       label: "Publications",
//       filter: "All",
//     },
//     {
//       value: journalCount,
//       label: "Journals",
//       filter: "Journal",
//     },
//     {
//       value: conferenceCount,
//       label: "Conferences",
//       filter: "Conference",
//     },
//     {
//       value: patentCount,
//       label: "Patents",
//       filter: "Patent",
//     },
//     {
//       value: bookChapterCount,
//       label: "Book Chapters",
//       filter: "Book Chapter",
//     },
//   ];

//   /* =========================================================
//      FILTERS
//   ========================================================= */

//   const filters = [
//     "All",
//     "Journal",
//     "Conference",
//     "Patent",
//     "Book Chapter",
//   ];

//   /* =========================================================
//      MERGE ALL PUBLICATIONS
//   ========================================================= */

//   const allPublications = [
//     ...(publicationData.journals || []),
//     ...(publicationData.conferences || []),
//     ...(publicationData.patents || []),
//     ...(publicationData.bookChapters || []),
//   ];

//   /* =========================================================
//      SEARCH + FILTER
//   ========================================================= */

//   const search = searchTerm.toLowerCase().trim();

//   const filteredPublications = allPublications.filter(
//     (item) => {
//       const matchesSearch =
//         item.title?.toLowerCase().includes(search) ||
//         item.authors?.toLowerCase().includes(search) ||
//         item.inventors?.toLowerCase().includes(search) ||
//         item.journal?.toLowerCase().includes(search) ||
//         item.conference?.toLowerCase().includes(search) ||
//         item.publisher?.toLowerCase().includes(search) ||
//         item.country?.toLowerCase().includes(search) ||
//         item.status?.toLowerCase().includes(search) ||
//         String(item.year).includes(search);

//       const matchesFilter =
//         activeFilter === "All" ||
//         item.type === activeFilter;

//       return matchesSearch && matchesFilter;
//     }
//   );

//   /* =========================================================
//      SORT — LATEST YEAR FIRST
//   ========================================================= */

//   filteredPublications.sort(
//     (a, b) => Number(b.year) - Number(a.year)
//   );

//   /* =========================================================
//      GROUP BY YEAR
//   ========================================================= */

//   const groupedPublications =
//     filteredPublications.reduce((acc, item) => {
//       if (!acc[item.year]) {
//         acc[item.year] = [];
//       }

//       acc[item.year].push(item);

//       return acc;
//     }, {});

//   const years = Object.keys(groupedPublications).sort(
//     (a, b) => Number(b) - Number(a)
//   );

//   /* =========================================================
//      PUBLICATION TYPE COLOR
//   ========================================================= */

//   const getTypeColor = (type) => {
//     switch (type) {
//       case "Conference":
//         return "bg-violet-100 text-violet-700";

//       case "Book Chapter":
//         return "bg-emerald-100 text-emerald-700";

//       default:
//         return "bg-blue-100 text-[#163D88]";
//     }
//   };

//   /* =========================================================
//      PATENT STATUS COLOR
//   ========================================================= */

//   const getPatentStatusColor = (status) => {
//     if (
//       status?.toLowerCase().trim() === "granted"
//     ) {
//       return "bg-emerald-100 text-emerald-700";
//     }

//     return "bg-amber-100 text-amber-700";
//   };

//   /* =========================================================
//      PATENT BADGE TEXT
//   ========================================================= */

//   const getPatentBadgeText = (publication) => {
//     const country = publication.country?.trim();
//     const status = publication.status?.trim();

//     if (country && status) {
//       return `${country} PATENT · ${status}`;
//     }

//     if (country) {
//       return `${country} PATENT`;
//     }

//     if (status) {
//       return `PATENT · ${status}`;
//     }

//     return "PATENT";
//   };

//   /* =========================================================
//      RENDER
//   ========================================================= */

//   return (
//     <main className="min-h-screen bg-[#F8FAFC]">
//       <section className="w-full">

//         {/* =====================================================
//             HERO
//         ===================================================== */}

//         <section className="pb-2">

//           {/* Badge */}

//           <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-1.5">
//             <FiBookOpen className="text-cyan-600" />

//             <span className="text-xs font-semibold uppercase tracking-[2px] text-cyan-700">
//               Publications
//             </span>
//           </div>

//           {/* Heading */}

//           <h1
//             className="
//               mt-4
//               m-0
//               text-[48px]
//               font-bold
//               leading-[1.1]
//               tracking-[-1.5px]
//               text-[#101828]
//               md:text-[54px]
//               lg:text-[58px]
//             "
//           >
//             Research Publications
//           </h1>

//           {/* Description */}

//           <p
//             className="
//               mt-4
//               max-w-[1000px]
//               text-[15px]
//               leading-7
//               text-[#315B87]
//               md:text-[16px]
//             "
//           >
//             Browse peer-reviewed journal articles, conference
//             papers, patents and book chapters published by{" "}
//             <strong className="font-bold text-[#101828]">
//               Prof. Deepak Joshi.
//             </strong>
//           </p>

//           {/* ===================================================
//               STATISTICS
//           =================================================== */}

//           <div
//             className="
//               mt-8
//               flex
//               w-fit
//               flex-wrap
//               items-center
//             "
//           >
//             {publicationStats.map((stat, index) => {
//               const isActive =
//                 activeFilter === stat.filter;

//               return (
//                 <button
//                   key={stat.filter}
//                   type="button"
//                   onClick={() =>
//                     setActiveFilter(stat.filter)
//                   }
//                   className={`
//                     group
//                     relative
//                     flex
//                     items-baseline
//                     gap-2
//                     border-0
//                     bg-transparent
//                     p-0
//                     px-6
//                     py-1
//                     font-inherit
//                     outline-none
//                     transition-all
//                     duration-200
//                     first:pl-0
//                     last:pr-0

//                     ${
//                       index !==
//                       publicationStats.length - 1
//                         ? "after:absolute after:right-0 after:top-1/2 after:h-8 after:w-px after:-translate-y-1/2 after:bg-slate-300"
//                         : ""
//                     }
//                   `}
//                 >
//                   {/* Number */}

//                   <span
//                     className={`
//                       text-[24px]
//                       font-bold
//                       leading-none
//                       md:text-[26px]
//                       ${
//                         isActive
//                           ? "text-[#193F73]"
//                           : "text-[#193F73]"
//                       }
//                     `}
//                   >
//                     {stat.value}
//                   </span>

//                   {/* Label */}

//                   <span
//                     className="
//                       text-[17px]
//                       font-normal
//                       leading-none
//                       text-[#475467]
//                       transition-colors
//                       duration-200
//                       group-hover:text-[#193F73]
//                       md:text-[19px]
//                     "
//                   >
//                     {stat.label}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </section>

//         {/* =====================================================
//             SEARCH + FILTER
//         ===================================================== */}

//         <section
//           className="
//             mt-8
//             mb-8
//             rounded-2xl
//             border
//             border-slate-200
//             bg-white
//             p-5
//             shadow-sm
//           "
//         >
//           <div
//             className="
//               flex
//               flex-col
//               gap-5
//               lg:flex-row
//               lg:items-center
//               lg:justify-between
//             "
//           >

//             {/* ================= SEARCH ================= */}

//             <div className="relative w-full lg:w-[420px]">

//               <FiSearch
//                 className="
//                   absolute
//                   left-5
//                   top-1/2
//                   -translate-y-1/2
//                   text-lg
//                   text-slate-400
//                 "
//               />

//               <input
//                 type="text"
//                 placeholder="Search by title, author, journal..."
//                 value={searchTerm}
//                 onChange={(e) =>
//                   setSearchTerm(e.target.value)
//                 }
//                 className="
//                   w-full
//                   rounded-xl
//                   border
//                   border-slate-300
//                   bg-white
//                   py-3
//                   pl-12
//                   pr-4
//                   text-[15px]
//                   outline-none
//                   transition-all
//                   duration-300
//                   placeholder:text-slate-400
//                   focus:border-[#163D88]
//                   focus:ring-4
//                   focus:ring-blue-100
//                 "
//               />
//             </div>

//             {/* ================= FILTERS ================= */}

//             <div className="flex flex-wrap gap-2">

//               {filters.map((filter) => {
//                 const active =
//                   activeFilter === filter;

//                 return (
//                   <button
//                     key={filter}
//                     type="button"
//                     onClick={() =>
//                       setActiveFilter(filter)
//                     }
//                     className={`
//                       rounded-xl
//                       px-4
//                       py-2.5
//                       text-sm
//                       font-medium
//                       transition-all
//                       duration-300

//                       ${
//                         active
//                           ? "bg-[#163D88] text-white shadow-md"
//                           : "border border-slate-300 bg-white text-slate-600 hover:border-[#163D88] hover:text-[#163D88]"
//                       }
//                     `}
//                   >
//                     {filter}
//                   </button>
//                 );
//               })}

//             </div>
//           </div>
//         </section>

//         {/* =====================================================
//             EMPTY STATE
//         ===================================================== */}

//         {years.length === 0 ? (
//           <div
//             className="
//               rounded-3xl
//               border
//               border-dashed
//               border-slate-300
//               bg-white
//               py-20
//               text-center
//             "
//           >
//             <h3 className="text-2xl font-bold text-slate-800">
//               No Publications Found
//             </h3>

//             <p className="mt-3 text-slate-500">
//               Try another keyword or filter.
//             </p>
//           </div>
//         ) : (

//           /* ===================================================
//              PUBLICATION TIMELINE
//           =================================================== */

//           <div className="space-y-12">

//             {years.map((year) => (

//               <section
//                 key={year}
//                 className="mb-14"
//               >

//                 {/* ================= YEAR HEADER ================= */}

//                 <div
//                   className="
//                     sticky
//                     top-[88px]
//                     z-20
//                     bg-[#F8FAFC]
//                     py-3
//                   "
//                 >
//                   <div className="flex items-center gap-5">

//                     {/* Year */}

//                     <div
//                       className="
//                         flex
//                         h-16
//                         w-16
//                         items-center
//                         justify-center
//                         rounded-2xl
//                         bg-[#163D88]
//                         text-white
//                         shadow-md
//                       "
//                     >
//                       <span className="text-xl font-bold">
//                         {year}
//                       </span>
//                     </div>

//                     {/* Divider */}

//                     <div className="flex-1 border-t border-slate-300" />

//                     {/* Count */}

//                     <span
//                       className="
//                         rounded-full
//                         border
//                         border-slate-300
//                         bg-white
//                         px-4
//                         py-2
//                         text-sm
//                         font-medium
//                         text-slate-600
//                       "
//                     >
//                       {groupedPublications[year].length}{" "}
//                       Publication
//                       {groupedPublications[year].length >
//                       1
//                         ? "s"
//                         : ""}
//                     </span>

//                   </div>
//                 </div>

//                 {/* ================= PUBLICATIONS ================= */}

//                 <div
//                   className="
//                     mt-4
//                     overflow-hidden
//                     rounded-3xl
//                     border
//                     border-slate-200
//                     bg-white
//                   "
//                 >

//                   {groupedPublications[year].map(
//                     (publication) => {

//                       /* ================= PUBLICATION URL ================= */

//                       const hasPublicationUrl =
//                         typeof publication.publicationUrl ===
//                           "string" &&
//                         publication.publicationUrl.trim() !==
//                           "";

//                       const publicationUrl =
//                         hasPublicationUrl
//                           ? publication.publicationUrl.trim()
//                           : null;

//                       /* ================= PDF URL ================= */

//                       const hasPdf =
//                         typeof publication.pdf ===
//                           "string" &&
//                         publication.pdf.trim() !== "";

//                       const pdfUrl = hasPdf
//                         ? publication.pdf.trim()
//                         : null;

//                       /* ================= VENUE ================= */

//                       const venue =
//                         publication.journal ||
//                         publication.conference ||
//                         publication.publisher ||
//                         "";

//                       return (

//                         <article
//                           key={`${publication.type}-${publication.id}`}
//                           className="
//                             group
//                             relative
//                             border-b
//                             border-slate-200
//                             py-6
//                             transition-all
//                             duration-300
//                             last:border-b-0
//                           "
//                         >

//                           {/* Hover Indicator */}

//                           <span
//                             className="
//                               absolute
//                               left-0
//                               top-5
//                               h-[70%]
//                               w-1
//                               scale-y-0
//                               rounded-full
//                               bg-[#163D88]
//                               transition-transform
//                               duration-300
//                               group-hover:scale-y-100
//                             "
//                           />

//                           <div className="pl-5 pr-5">

//                             {/* ================= TOP INFO ================= */}

//                             <div className="flex flex-wrap items-center gap-3">

//                               {/* =================================================
//                                   PATENT BADGE
//                               ================================================= */}

//                               {publication.type === "Patent" ? (

//                                 <span
//                                   className={`
//                                     inline-flex
//                                     items-center
//                                     rounded-full
//                                     px-3
//                                     py-1.5
//                                     text-[11px]
//                                     font-semibold
//                                     uppercase
//                                     tracking-[1px]
//                                     ${getPatentStatusColor(
//                                       publication.status
//                                     )}
//                                   `}
//                                 >
//                                   {getPatentBadgeText(
//                                     publication
//                                   )}
//                                 </span>

//                               ) : (

//                                 /* =================================================
//                                    OTHER PUBLICATION TYPES
//                                 ================================================= */

//                                 <span
//                                   className={`
//                                     rounded-full
//                                     px-3
//                                     py-1
//                                     text-[11px]
//                                     font-semibold
//                                     uppercase
//                                     tracking-[2px]
//                                     ${getTypeColor(
//                                       publication.type
//                                     )}
//                                   `}
//                                 >
//                                   {publication.type}
//                                 </span>
//                               )}

//                               {/* ================= YEAR ================= */}

//                               <span
//                                 className="
//                                   flex
//                                   items-center
//                                   gap-1
//                                   text-sm
//                                   text-slate-500
//                                 "
//                               >
//                                 <FiCalendar size={14} />

//                                 {publication.year}
//                               </span>

//                             </div>

//                             {/* ================= TITLE ================= */}

//                             <h3
//                               className="
//                                 mt-4
//                                 text-[22px]
//                                 font-bold
//                                 leading-snug
//                                 text-slate-900
//                               "
//                             >
//                               {hasPublicationUrl ? (

//                                 <a
//                                   href={publicationUrl}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="
//                                     transition-colors
//                                     duration-300
//                                     hover:text-[#163D88]
//                                     hover:underline
//                                     underline-offset-4
//                                   "
//                                 >
//                                   {publication.title}
//                                 </a>

//                               ) : (

//                                 <span>
//                                   {publication.title}
//                                 </span>

//                               )}
//                             </h3>

//                             {/* ================= AUTHORS ================= */}

//                             {(publication.authors ||
//                               publication.inventors) && (

//                               <p
//                                 className="
//                                   mt-3
//                                   text-[15px]
//                                   leading-7
//                                   text-slate-600
//                                 "
//                               >
//                                 {publication.authors ||
//                                   publication.inventors}
//                               </p>

//                             )}

//                             {/* ================= VENUE ================= */}

//                             {venue && (

//                               <p
//                                 className="
//                                   mt-3
//                                   italic
//                                   text-[15px]
//                                   text-slate-500
//                                 "
//                               >
//                                 {venue}

//                                 {publication.volume &&
//                                   ` • Vol. ${publication.volume}`}

//                                 {publication.issue &&
//                                   ` (${publication.issue})`}

//                                 {publication.pages &&
//                                   ` • pp. ${publication.pages}`}
//                               </p>

//                             )}

//                             {/* =================================================
//                                 PATENT NUMBER
                                
//                                 Country is intentionally NOT displayed here.
//                                 Country already appears in the badge.
//                             ================================================= */}

//                             {publication.type === "Patent" &&
//                               publication.patentNumber && (

//                                 <div
//                                   className="
//                                     mt-4
//                                     flex
//                                     flex-wrap
//                                     items-center
//                                     gap-6
//                                     text-sm
//                                   "
//                                 >

//                                   <span>
//                                     <strong className="font-semibold text-slate-800">
//                                       Patent:
//                                     </strong>{" "}

//                                     <span className="text-slate-600">
//                                       {publication.patentNumber}
//                                     </span>
//                                   </span>

//                                 </div>

//                             )}

//                             {/* ================= LINKS ================= */}

//                             {(hasPublicationUrl ||
//                               hasPdf) && (

//                               <div
//                                 className="
//                                   mt-5
//                                   flex
//                                   flex-wrap
//                                   items-center
//                                   gap-5
//                                 "
//                               >

//                                 {/* ================= PUBLICATION ================= */}

//                                 {hasPublicationUrl && (

//                                   <a
//                                     href={publicationUrl}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="
//                                       inline-flex
//                                       items-center
//                                       gap-2
//                                       text-sm
//                                       font-medium
//                                       text-[#163D88]
//                                       transition-colors
//                                       duration-200
//                                       hover:underline
//                                     "
//                                   >
//                                     <FiExternalLink
//                                       size={15}
//                                     />

//                                     View Publication
//                                   </a>

//                                 )}

//                                 {/* ================= PDF ================= */}

//                                 {hasPdf && (

//                                   <a
//                                     href={pdfUrl}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="
//                                       inline-flex
//                                       items-center
//                                       gap-2
//                                       text-sm
//                                       font-medium
//                                       text-[#163D88]
//                                       transition-colors
//                                       duration-200
//                                       hover:underline
//                                     "
//                                   >
//                                     <FiFileText
//                                       size={15}
//                                     />

//                                     PDF
//                                   </a>

//                                 )}

//                               </div>

//                             )}

//                           </div>

//                         </article>

//                       );
//                     }
//                   )}

//                 </div>

//               </section>

//             ))}

//           </div>

//         )}

//       </section>
//     </main>
//   );
// }



import { useState } from "react";

import {
  FiSearch,
  FiCalendar,
  FiExternalLink,
  FiFileText,
  FiBookOpen,
} from "react-icons/fi";

import publicationData from "../data/publications";

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  /* =========================================================
     PUBLICATION COUNTS
  ========================================================= */

  const journalCount = publicationData.journals?.length || 0;
  const conferenceCount = publicationData.conferences?.length || 0;
  const patentCount = publicationData.patents?.length || 0;
  const bookChapterCount =
    publicationData.bookChapters?.length || 0;

  const totalPublications =
    journalCount +
    conferenceCount +
    patentCount +
    bookChapterCount;

  /* =========================================================
     PUBLICATION STATISTICS
  ========================================================= */

  const publicationStats = [
    {
      value: totalPublications,
      label: "Publications",
      filter: "All",
    },
    {
      value: journalCount,
      label: "Journals",
      filter: "Journal",
    },
    {
      value: conferenceCount,
      label: "Conferences",
      filter: "Conference",
    },
    {
      value: patentCount,
      label: "Patents",
      filter: "Patent",
    },
    {
      value: bookChapterCount,
      label: "Book Chapters",
      filter: "Book Chapter",
    },
  ];

  /* =========================================================
     FILTERS
  ========================================================= */

  const filters = [
    "All",
    "Journal",
    "Conference",
    "Patent",
    "Book Chapter",
  ];

  /* =========================================================
     MERGE ALL PUBLICATIONS
  ========================================================= */

  const allPublications = [
    ...(publicationData.journals || []),
    ...(publicationData.conferences || []),
    ...(publicationData.patents || []),
    ...(publicationData.bookChapters || []),
  ];

  /* =========================================================
     SEARCH + FILTER
  ========================================================= */

  const search = searchTerm.toLowerCase().trim();

  const filteredPublications = allPublications.filter(
    (item) => {
      const matchesSearch =
        item.title?.toLowerCase().includes(search) ||
        item.authors?.toLowerCase().includes(search) ||
        item.inventors?.toLowerCase().includes(search) ||
        item.journal?.toLowerCase().includes(search) ||
        item.conference?.toLowerCase().includes(search) ||
        item.publisher?.toLowerCase().includes(search) ||
        item.country?.toLowerCase().includes(search) ||
        item.status?.toLowerCase().includes(search) ||
        String(item.year).includes(search);

      const matchesFilter =
        activeFilter === "All" ||
        item.type === activeFilter;

      return matchesSearch && matchesFilter;
    }
  );

  /* =========================================================
     SORT — LATEST YEAR FIRST
  ========================================================= */

  filteredPublications.sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  /* =========================================================
     GROUP BY YEAR
  ========================================================= */

  const groupedPublications =
    filteredPublications.reduce((acc, item) => {
      if (!acc[item.year]) {
        acc[item.year] = [];
      }

      acc[item.year].push(item);

      return acc;
    }, {});

  const years = Object.keys(groupedPublications).sort(
    (a, b) => Number(b) - Number(a)
  );

  /* =========================================================
     PUBLICATION TYPE COLOR
  ========================================================= */

  const getTypeColor = (type) => {
    switch (type) {
      case "Conference":
        return "bg-violet-100 text-violet-700";

      case "Book Chapter":
        return "bg-emerald-100 text-emerald-700";

      default:
        return "bg-blue-100 text-[#163D88]";
    }
  };

  /* =========================================================
     PATENT STATUS COLOR
  ========================================================= */

  const getPatentStatusColor = (status) => {
    if (
      status?.toLowerCase().trim() === "granted"
    ) {
      return "bg-emerald-100 text-emerald-700";
    }

    return "bg-amber-100 text-amber-700";
  };

  /* =========================================================
     PATENT BADGE TEXT
  ========================================================= */

  const getPatentBadgeText = (publication) => {
    const country = publication.country?.trim();
    const status = publication.status?.trim();

    if (country && status) {
      return `${country} PATENT · ${status}`;
    }

    if (country) {
      return `${country} PATENT`;
    }

    if (status) {
      return `PATENT · ${status}`;
    }

    return "PATENT";
  };

  /* =========================================================
     HIGHLIGHT DEEPAK JOSHI
  ========================================================= */

  const highlightDeepakJoshi = (text) => {
    if (!text) return null;

    /*
      Matches:
      Deepak Joshi
      deepak joshi
      DEEPAK JOSHI

      The original text/capitalization is preserved.
    */
    const parts = text.split(/(Deepak Joshi)/gi);

    return parts.map((part, index) => {
      const isDeepakJoshi =
        part.toLowerCase() === "deepak joshi";

      if (isDeepakJoshi) {
        return (
          <span
            key={index}
            className="
              font-bold
              text-[#1F3F97]
            "
          >
            {part}
          </span>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <main className="bg-[#F8FAFC]">
      <section className="w-full">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="pb-2">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-1.5">
            <FiBookOpen className="text-cyan-600" />

            <span className="text-xs font-semibold uppercase tracking-[2px] text-cyan-700">
              Publications
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              mt-4
              m-0
              text-3xl sm:text-4xl
              font-bold
              leading-[1.1]
              tracking-[-1.5px]
              text-[#101828]
              
              
            "
          >
            Research Publications
          </h1>

          {/* Description */}

          <p
            className="
              mt-4
              max-w-[1000px]
              text-sm
              leading-7
              text-[#315B87]
              md:text-base
            "
          >
            Browse peer-reviewed journal articles, conference
            papers, patents and book chapters published by{" "}
            <strong className="font-bold text-[#101828]">
              Prof. Deepak Joshi.
            </strong>
          </p>

          {/* ===================================================
              STATISTICS
          =================================================== */}

          <div
            className="
              mt-8
              flex
              w-fit
              flex-wrap
              items-center
            "
          >
            {publicationStats.map((stat, index) => {
              const isActive =
                activeFilter === stat.filter;

              return (
                <button
                  key={stat.filter}
                  type="button"
                  onClick={() =>
                    setActiveFilter(stat.filter)
                  }
                  className={`
                    group
                    relative
                    flex
                    items-baseline
                    gap-2
                    border-0
                    bg-transparent
                    p-0
                    px-6
                    py-1
                    font-inherit
                    outline-none
                    transition-all
                    duration-200
                    first:pl-0
                    last:pr-0

                    ${
                      index !==
                      publicationStats.length - 1
                        ? "after:absolute after:right-0 after:top-1/2 after:h-8 after:w-px after:-translate-y-1/2 after:bg-slate-300"
                        : ""
                    }
                  `}
                >
                  {/* Number */}

                  <span
                    className={`
                      text-xl
                      font-bold
                      leading-none
                      md:text-2xl
                      ${
                        isActive
                          ? "text-[#193F73]"
                          : "text-[#193F73]"
                      }
                    `}
                  >
                    {stat.value}
                  </span>

                  {/* Label */}

                  <span
                    className="
                      text-base
                      font-normal
                      leading-none
                      text-[#475467]
                      transition-colors
                      duration-200
                      group-hover:text-[#193F73]
                      md:text-lg
                    "
                  >
                    {stat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            SEARCH + FILTER
        ===================================================== */}

        <section
          className="
            mt-8
            mb-8
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            {/* ================= SEARCH ================= */}

            <div className="relative w-full lg:w-[420px]">
              <FiSearch
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-lg
                  text-slate-400
                "
              />

              <input
                type="text"
                placeholder="Search by title, author, journal..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-300
                  bg-white
                  py-3
                  pl-12
                  pr-4
                  text-sm
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-slate-400
                  focus:border-[#163D88]
                  focus:ring-4
                  focus:ring-blue-100
                "
              />
            </div>

            {/* ================= FILTERS ================= */}

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const active =
                  activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() =>
                      setActiveFilter(filter)
                    }
                    className={`
                      rounded-xl
                      px-4
                      py-2.5
                      text-sm
                      font-medium
                      transition-all
                      duration-300

                      ${
                        active
                          ? "bg-[#163D88] text-white shadow-md"
                          : "border border-slate-300 bg-white text-slate-600 hover:border-[#163D88] hover:text-[#163D88]"
                      }
                    `}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            EMPTY STATE
        ===================================================== */}

        {years.length === 0 ? (
          <div
            className="
              rounded-3xl
              border
              border-dashed
              border-slate-300
              bg-white
              py-20
              text-center
            "
          >
            <h3 className="text-xl font-bold text-slate-800">
              No Publications Found
            </h3>

            <p className="mt-3 text-slate-500">
              Try another keyword or filter.
            </p>
          </div>
        ) : (

          /* ===================================================
             PUBLICATION TIMELINE
          =================================================== */

          <div className="space-y-12">

            {years.map((year) => (

              <section
                key={year}
                className="mb-14"
              >

                {/* ================= YEAR HEADER ================= */}

                <div
                  className="
                    sticky
                    top-[88px]
                    z-20
                    bg-[#F8FAFC]
                    py-3
                  "
                >
                  <div className="flex items-center gap-5">

                    {/* Year */}

                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#163D88]
                        text-white
                        shadow-md
                      "
                    >
                      <span className="text-xl font-bold">
                        {year}
                      </span>
                    </div>

                    {/* Divider */}

                    <div className="flex-1 border-t border-slate-300" />

                    {/* Count */}

                    <span
                      className="
                        rounded-full
                        border
                        border-slate-300
                        bg-white
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-slate-600
                      "
                    >
                      {groupedPublications[year].length}{" "}
                      Publication
                      {groupedPublications[year].length >
                      1
                        ? "s"
                        : ""}
                    </span>
                  </div>
                </div>

                {/* ================= PUBLICATIONS ================= */}

                <div
                  className="
                    mt-4
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                  "
                >
                  {groupedPublications[year].map(
                    (publication) => {

                      /* ================= PUBLICATION URL ================= */

                      const hasPublicationUrl =
                        typeof publication.publicationUrl ===
                          "string" &&
                        publication.publicationUrl.trim() !==
                          "";

                      const publicationUrl =
                        hasPublicationUrl
                          ? publication.publicationUrl.trim()
                          : null;

                      /* ================= PDF URL ================= */

                      const hasPdf =
                        typeof publication.pdf ===
                          "string" &&
                        publication.pdf.trim() !== "";

                      const pdfUrl = hasPdf
                        ? publication.pdf.trim()
                        : null;

                      /* ================= VENUE ================= */

                      const venue =
                        publication.journal ||
                        publication.conference ||
                        publication.publisher ||
                        "";

                      return (
                        <article
                          key={`${publication.type}-${publication.id}`}
                          className="
                            group
                            relative
                            border-b
                            border-slate-200
                            py-6
                            transition-all
                            duration-300
                            last:border-b-0
                          "
                        >

                          {/* Hover Indicator */}

                          <span
                            className="
                              absolute
                              left-0
                              top-5
                              h-[70%]
                              w-1
                              scale-y-0
                              rounded-full
                              bg-[#163D88]
                              transition-transform
                              duration-300
                              group-hover:scale-y-100
                            "
                          />

                          <div className="pl-5 pr-5">

                            {/* ================= TOP INFO ================= */}

                            <div className="flex flex-wrap items-center gap-3">

                              {/* PATENT BADGE */}

                              {publication.type === "Patent" ? (

                                <span
                                  className={`
                                    inline-flex
                                    items-center
                                    rounded-full
                                    px-3
                                    py-1.5
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[1px]
                                    ${getPatentStatusColor(
                                      publication.status
                                    )}
                                  `}
                                >
                                  {getPatentBadgeText(
                                    publication
                                  )}
                                </span>

                              ) : (

                                /* OTHER PUBLICATION TYPES */

                                <span
                                  className={`
                                    rounded-full
                                    px-3
                                    py-1
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[2px]
                                    ${getTypeColor(
                                      publication.type
                                    )}
                                  `}
                                >
                                  {publication.type}
                                </span>
                              )}

                              {/* YEAR */}

                              <span
                                className="
                                  flex
                                  items-center
                                  gap-1
                                  text-sm
                                  text-slate-500
                                "
                              >
                                <FiCalendar size={14} />

                                {publication.year}
                              </span>
                            </div>

                            {/* ================= TITLE ================= */}

                            <h3
                              className="
                                mt-4
                                text-xl
                                font-bold
                                leading-snug
                                text-slate-900
                              "
                            >
                              {hasPublicationUrl ? (

                                <a
                                  href={publicationUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="
                                    transition-colors
                                    duration-300
                                    hover:text-[#163D88]
                                    hover:underline
                                    underline-offset-4
                                  "
                                >
                                  {publication.title}
                                </a>

                              ) : (

                                <span>
                                  {publication.title}
                                </span>

                              )}
                            </h3>

                            {/* ================= AUTHORS ================= */}

                            {(publication.authors ||
                              publication.inventors) && (

                              <p
                                className="
                                  mt-3
                                  text-sm
                                  leading-7
                                  text-slate-600
                                "
                              >
                                {highlightDeepakJoshi(
                                  publication.authors ||
                                    publication.inventors
                                )}
                              </p>

                            )}

                            {/* ================= VENUE ================= */}

                            {venue && (
                              <p
                                className="
                                  mt-3
                                  italic
                                  text-sm
                                  text-slate-500
                                "
                              >
                                {venue}

                                {publication.volume &&
                                  ` • Vol. ${publication.volume}`}

                                {publication.issue &&
                                  ` (${publication.issue})`}

                                {publication.pages &&
                                  ` • pp. ${publication.pages}`}
                              </p>
                            )}

                            {/* =================================================
                                PATENT NUMBER

                                Country is intentionally NOT displayed here.
                                Country already appears in the badge.
                            ================================================= */}

                            {publication.type === "Patent" &&
                              publication.patentNumber && (

                                <div
                                  className="
                                    mt-4
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-6
                                    text-sm
                                  "
                                >
                                  <span>
                                    <strong className="font-semibold text-slate-800">
                                      Patent:
                                    </strong>{" "}

                                    <span className="text-slate-600">
                                      {publication.patentNumber}
                                    </span>
                                  </span>
                                </div>

                              )}

                            {/* ================= LINKS ================= */}

                            {(hasPublicationUrl ||
                              hasPdf) && (

                              <div
                                className="
                                  mt-5
                                  flex
                                  flex-wrap
                                  items-center
                                  gap-5
                                "
                              >

                                {/* PUBLICATION */}

                                {hasPublicationUrl && (
                                  <a
                                    href={publicationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                      inline-flex
                                      items-center
                                      gap-2
                                      text-sm
                                      font-medium
                                      text-[#163D88]
                                      transition-colors
                                      duration-200
                                      hover:underline
                                    "
                                  >
                                    <FiExternalLink
                                      size={15}
                                    />

                                    View Publication
                                  </a>
                                )}

                                {/* PDF */}

                                {hasPdf && (
                                  <a
                                    href={pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                      inline-flex
                                      items-center
                                      gap-2
                                      text-sm
                                      font-medium
                                      text-[#163D88]
                                      transition-colors
                                      duration-200
                                      hover:underline
                                    "
                                  >
                                    <FiFileText
                                      size={15}
                                    />

                                    PDF
                                  </a>
                                )}

                              </div>
                            )}

                          </div>
                        </article>
                      );
                    }
                  )}
                </div>

              </section>
            ))}

          </div>
        )}

      </section>
    </main>
  );
}