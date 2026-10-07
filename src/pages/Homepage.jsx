// import { useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// import hexagon from "../assets/images/hexagon.svg";

// import { assetPath } from "../utils/assetPath";

// import siteImages from "../data/siteImages";
// import facilities from "../data/facilities";
// import prototypes from "../data/prototypes";

// /* =========================================================
//    RESEARCH AREAS
// ========================================================= */

// const interests = [
//   "Intelligent Prosthetics",
//   "Neuromotor Disorders",
//   "Stroke Rehabilitation",
//   "Biomedical Imaging",
//   "Machine Learning",
//   "Wearable Healthcare",
// ];

// /* =========================================================
//    WORKING OPPORTUNITIES
// ========================================================= */

// const opportunities = [
//   {
//     id: 1,
//     title: "Research Positions",
//     description:
//       "Openings for JRF, SRF and Ph.D. scholars in Neuromechanics. Candidates from Electrical, Electronics, Mechanical and Computer Science are encouraged to apply.",
//     tags: ["JRF", "SRF", "Ph.D."],
//   },

//   {
//     id: 2,
//     title: "Student Opportunities",
//     description:
//       "B.Tech., M.Tech. thesis projects and summer internships are available for students interested in biomedical engineering and AI.",
//     tags: ["B.Tech", "M.Tech", "Internship"],
//   },

//   {
//     id: 3,
//     title: "Special Programs",
//     description:
//       "International collaborations, funded research projects and clinical volunteer studies are actively ongoing in the laboratory.",
//     tags: ["Research", "Volunteer"],
//   },
// ];

// /* =========================================================
//    HOMEPAGE
// ========================================================= */

// export default function Homepage() {
//   const facilitiesRef = useRef(null);
//   const prototypesRef = useRef(null);

//   /* =======================================================
//      FACILITIES SCROLL
//   ======================================================= */

//   const scrollFacilities = (direction) => {
//     if (!facilitiesRef.current) return;

//     facilitiesRef.current.scrollBy({
//       left: direction === "left" ? -420 : 420,
//       behavior: "smooth",
//     });
//   };

//   /* =======================================================
//      PROTOTYPES SCROLL
//   ======================================================= */

//   const scrollPrototypes = (direction) => {
//     if (!prototypesRef.current) return;

//     prototypesRef.current.scrollBy({
//       left: direction === "left" ? -420 : 420,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <main className="min-h-screen bg-[#F8FAFC]">

//       {/* =====================================================
//           HERO SECTION
//       ===================================================== */}

//       <section className="mb-6 w-full sm:mb-8">

//         <div
//           className="
//             relative
//             mx-auto
//             max-w-7xl
//             overflow-hidden
//             rounded-[28px]
//             border
//             border-slate-200
//             bg-white
//             shadow-sm
//           "
//         >

//           {/* Background Pattern */}

//           <img
//             src={hexagon}
//             alt=""
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//               h-full
//               w-full
//               object-cover
//               opacity-[0.04]
//             "
//           />

//           {/* HERO CONTENT */}

//           <div
//             className="
//               relative
//               grid
//               items-center
//               gap-10
//               px-6
//               py-8
//               sm:px-8
//               lg:grid-cols-[1.15fr_0.85fr]
//               lg:px-12
//               lg:py-10
//             "
//           >

//             {/* =================================================
//                 LEFT SIDE
//             ================================================= */}

//             <div>

//               {/* PROFESSOR IMAGE */}

//               <div className="flex items-center gap-3">

//                 <img
//                   src={assetPath(siteImages.professorImage)}
//                   alt="Professor"
//                   className="
//                     h-14
//                     w-14
//                     rounded-full
//                     border-4
//                     border-white
//                     object-cover
//                     shadow-md
//                   "
//                 />

//                 <div>

//                   <p
//                     className="
//                       text-[11px]
//                       font-semibold
//                       uppercase
//                       tracking-[3px]
//                       text-cyan-600
//                     "
//                   >
//                     Professor
//                   </p>

//                   <p className="mt-1 text-sm text-slate-500">
//                     Neuromechanics research lab
//                   </p>

//                 </div>

//               </div>


//               {/* NAME */}

//               <h1
//                 className="
//                   mt-5
//                   text-4xl
//                   font-bold
//                   leading-tight
//                   text-slate-900
//                   sm:text-5xl
//                   lg:text-6xl
//                 "
//               >
//                 Deepak Joshi
//               </h1>


//               {/* INSTITUTE */}

//               <p className="mt-2 text-sm text-slate-500 sm:text-base">
//                 Indian Institute of Technology Delhi • New Delhi
//               </p>


//               {/* INTRODUCTION */}

//               <p
//                 className="
//                   mt-7
//                   max-w-3xl
//                   text-base
//                   leading-8
//                   text-slate-600
//                 "
//               >
//                 Welcome to the{" "}
//                 <strong className="font-semibold text-slate-900">
//                   Neuromechanics Research Group
//                 </strong>{" "}
//                 at the Centre for Biomedical Engineering, IIT Delhi.
//               </p>


//               <p
//                 className="
//                   mt-6
//                   max-w-3xl
//                   text-base
//                   leading-8
//                   text-slate-600
//                 "
//               >
//                 Our interdisciplinary research combines biomechanics,
//                 neuroscience, rehabilitation engineering, wearable sensing,
//                 biomedical imaging, and artificial intelligence to develop
//                 next-generation healthcare technologies for neurological
//                 rehabilitation and assistive systems.
//               </p>


//               {/* BUTTONS */}

//               <div className="mt-7 flex flex-wrap gap-3">

//                 <Link
//                   to="/projects"
//                   className="
//                     inline-flex
//                     items-center
//                     gap-2
//                     rounded-full
//                     bg-[#21409A]
//                     px-6
//                     py-3
//                     text-sm
//                     font-semibold
//                     text-white
//                     transition
//                     hover:bg-[#19327b]
//                   "
//                 >
//                   Explore Research
//                   <ArrowUpRight size={16} />
//                 </Link>


//                 <Link
//                   to="/publications"
//                   className="
//                     rounded-full
//                     border
//                     border-slate-300
//                     bg-white
//                     px-6
//                     py-3
//                     text-sm
//                     font-semibold
//                     text-slate-900
//                     transition
//                     hover:border-[#21409A]
//                     hover:text-[#21409A]
//                   "
//                 >
//                   Publications
//                 </Link>


//                 <Link
//                   to="/contact"
//                   className="
//                     rounded-full
//                     border
//                     border-slate-300
//                     bg-white
//                     px-6
//                     py-3
//                     text-sm
//                     font-semibold
//                     text-slate-900
//                     transition
//                     hover:border-[#21409A]
//                     hover:text-[#21409A]
//                   "
//                 >
//                   Contact
//                 </Link>

//               </div>


//               {/* RESEARCH AREAS */}

//               <div className="mt-8">

//                 <p
//                   className="
//                     text-xs
//                     font-semibold
//                     uppercase
//                     tracking-[4px]
//                     text-cyan-600
//                   "
//                 >
//                   Research Areas
//                 </p>


//                 <div className="mt-4 flex flex-wrap gap-2">

//                   {interests.map((interest) => (
//                     <span
//                       key={interest}
//                       className="
//                         rounded-full
//                         border
//                         border-slate-300
//                         bg-white
//                         px-3
//                         py-1.5
//                         text-xs
//                         font-medium
//                         text-slate-600
//                       "
//                     >
//                       {interest}
//                     </span>
//                   ))}

//                 </div>

//               </div>

//             </div>


//             {/* =================================================
//                 HERO IMAGE
//             ================================================= */}

//             <div className="flex justify-center lg:justify-end">

//               <img
//                 src={assetPath(siteImages.heroImage)}
//                 alt="Deepak Joshi"
//                 className="
//                   w-full
//                   max-w-[420px]
//                   rounded-[28px]
//                   object-cover
//                   shadow-xl
//                   lg:h-[510px]
//                 "
//               />

//             </div>

//           </div>


//           {/* =================================================
//               STATISTICS
//           ================================================= */}

//           <div
//             className="
//               grid
//               border-t
//               border-slate-200
//               sm:grid-cols-2
//               lg:grid-cols-4
//             "
//           >

//             <div
//               className="
//                 border-b
//                 border-slate-200
//                 p-5
//                 text-center
//                 sm:border-r
//                 lg:border-b-0
//               "
//             >

//               <p className="text-xl font-bold text-[#21409A]">
//                 100+
//               </p>

//               <p className="mt-1 text-xs text-slate-500">
//                 Publications
//               </p>

//             </div>


//             <div
//               className="
//                 border-b
//                 border-slate-200
//                 p-5
//                 text-center
//                 lg:border-b-0
//                 lg:border-r
//               "
//             >

//               <p className="text-xl font-bold text-[#21409A]">
//                 20+
//               </p>

//               <p className="mt-1 text-xs text-slate-500">
//                 Years of Research
//               </p>

//             </div>


//             <div
//               className="
//                 border-b
//                 border-slate-200
//                 p-5
//                 text-center
//                 sm:border-r
//                 lg:border-b-0
//               "
//             >

//               <p className="text-xl font-bold text-[#21409A]">
//                 12+
//               </p>

//               <p className="mt-1 text-xs text-slate-500">
//                 Funded Projects
//               </p>

//             </div>


//             <div className="p-5 text-center">

//               <p className="text-xl font-bold text-[#21409A]">
//                 AI + Healthcare
//               </p>

//               <p className="mt-1 text-xs text-slate-500">
//                 Research Focus
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           WORKING OPPORTUNITIES
//       ===================================================== */}

//       <section
//         id="opportunities"
//         className="bg-[#F8FAFC] py-16"
//       >

//         <div className="w-full">

//           <p
//             className="
//               text-sm
//               font-semibold
//               uppercase
//               tracking-[4px]
//               text-cyan-600
//             "
//           >
//             Join Our Lab
//           </p>


//           <h2
//             className="
//               mt-3
//               text-3xl
//               font-bold
//               text-slate-900
//               sm:text-4xl
//             "
//           >
//             Working Opportunities
//           </h2>


//           <p
//             className="
//               mt-4
//               max-w-3xl
//               leading-7
//               text-slate-500
//             "
//           >
//             Join our multidisciplinary research group working on
//             biomechanics, rehabilitation engineering, machine learning,
//             wearable healthcare and biomedical technologies.
//           </p>


//           {/* OPPORTUNITY CARDS */}

//           <div
//             className="
//               mt-10
//               grid
//               gap-6
//               md:grid-cols-2
//               lg:grid-cols-3
//             "
//           >

//             {opportunities.map((item) => (

//               <div
//                 key={item.id}
//                 className="
//                   rounded-3xl
//                   border
//                   border-slate-200
//                   bg-white
//                   p-6
//                   transition
//                   duration-300
//                   hover:-translate-y-1
//                   hover:shadow-xl
//                 "
//               >

//                 <div
//                   className="
//                     mb-5
//                     flex
//                     h-10
//                     w-10
//                     items-center
//                     justify-center
//                     rounded-xl
//                     bg-[#21409A]/10
//                   "
//                 >

//                   <div
//                     className="
//                       h-4
//                       w-4
//                       rounded-full
//                       bg-[#21409A]
//                     "
//                   />

//                 </div>


//                 <h3
//                   className="
//                     text-xl
//                     font-bold
//                     text-slate-900
//                   "
//                 >
//                   {item.title}
//                 </h3>


//                 <p
//                   className="
//                     mt-4
//                     text-sm
//                     leading-7
//                     text-slate-600
//                   "
//                 >
//                   {item.description}
//                 </p>


//                 <div className="mt-5 flex flex-wrap gap-2">

//                   {item.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="
//                         rounded-full
//                         bg-slate-100
//                         px-3
//                         py-1
//                         text-xs
//                         font-medium
//                         text-slate-600
//                       "
//                     >
//                       {tag}
//                     </span>
//                   ))}

//                 </div>

//               </div>

//             ))}

//           </div>


//           {/* CONTACT */}

//           <div className="mt-12 text-center">

//             <Link
//               to="/contact"
//               className="
//                 inline-flex
//                 rounded-full
//                 bg-[#21409A]
//                 px-8
//                 py-3
//                 font-semibold
//                 text-white
//                 transition
//                 hover:bg-[#19327b]
//               "
//             >
//               Contact
//             </Link>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           FACILITIES
//       ===================================================== */}

//       <section
//         id="facilities"
//         className="bg-white py-16"
//       >

//         <div className="w-full">

//           {/* FACILITIES HEADER */}

//           <div className="flex items-end justify-between gap-5">

//             <div>

//               <p
//                 className="
//                   text-sm
//                   font-semibold
//                   uppercase
//                   tracking-[4px]
//                   text-cyan-600
//                 "
//               >
//                 Laboratory
//               </p>


//               <h2
//                 className="
//                   mt-2
//                   text-3xl
//                   font-bold
//                   text-slate-900
//                   sm:text-4xl
//                 "
//               >
//                 Available Facilities
//               </h2>


//               <p
//                 className="
//                   mt-3
//                   max-w-2xl
//                   leading-7
//                   text-slate-500
//                 "
//               >
//                 Advanced biomedical instrumentation supporting neuroscience,
//                 rehabilitation engineering and wearable healthcare research.
//               </p>

//             </div>


//             {/* FACILITIES ARROWS */}

//             <div className="hidden shrink-0 gap-2 sm:flex">

//               <button
//                 type="button"
//                 onClick={() => scrollFacilities("left")}
//                 aria-label="Previous facilities"
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-slate-200
//                   bg-white
//                   text-slate-600
//                   shadow-sm
//                   transition
//                   hover:border-[#21409A]
//                   hover:bg-[#21409A]
//                   hover:text-white
//                 "
//               >
//                 <ChevronLeft size={19} />
//               </button>


//               <button
//                 type="button"
//                 onClick={() => scrollFacilities("right")}
//                 aria-label="Next facilities"
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-slate-200
//                   bg-white
//                   text-slate-600
//                   shadow-sm
//                   transition
//                   hover:border-[#21409A]
//                   hover:bg-[#21409A]
//                   hover:text-white
//                 "
//               >
//                 <ChevronRight size={19} />
//               </button>

//             </div>

//           </div>


//           {/* FACILITIES CARDS */}

//           <div
//             ref={facilitiesRef}
//             className="
//               mt-10
//               flex
//               gap-5
//               overflow-x-auto
//               scroll-smooth
//               pb-5
//               snap-x
//               snap-mandatory
//               [scrollbar-width:none]
//               [&::-webkit-scrollbar]:hidden
//             "
//           >

//             {facilities.map((facility) => (

//               <article
//                 key={facility.id}
//                 className="
//                   group
//                   w-[310px]
//                   shrink-0
//                   snap-start
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-slate-200
//                   bg-white
//                   p-4
//                   shadow-sm
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:border-[#21409A]
//                   hover:shadow-lg
//                   sm:w-[360px]
//                 "
//               >

//                 {/* IMAGE */}

//                 <div
//                   className="
//                     flex
//                     h-[210px]
//                     w-full
//                     items-center
//                     justify-center
//                     overflow-hidden
//                     rounded-xl
//                     bg-slate-50
//                   "
//                 >

//                   <img
//                     src={assetPath(facility.image)}
//                     alt={facility.title}
//                     className="
//                       h-full
//                       w-full
//                       object-contain
//                       transition-transform
//                       duration-500
//                       group-hover:scale-105
//                     "
//                   />

//                 </div>


//                 {/* CONTENT */}

//                 <div className="px-1 pb-1 pt-5">

//                   {facility.subtitle && (
//                     <p
//                       className="
//                         text-xs
//                         font-semibold
//                         uppercase
//                         tracking-[2px]
//                         text-cyan-600
//                       "
//                     >
//                       {facility.subtitle}
//                     </p>
//                   )}


//                   <h3
//                     className="
//                       mt-1
//                       text-xl
//                       font-bold
//                       text-slate-900
//                     "
//                   >
//                     {facility.title}
//                   </h3>


//                   {facility.description && (
//                     <p
//                       className="
//                         mt-2
//                         text-sm
//                         leading-6
//                         text-slate-600
//                       "
//                     >
//                       {facility.description}
//                     </p>
//                   )}

//                 </div>

//               </article>

//             ))}

//           </div>


//           <p className="mt-1 text-center text-xs text-slate-400 sm:hidden">
//             Swipe horizontally to explore
//           </p>

//         </div>

//       </section>


//       {/* =====================================================
//           PROTOTYPES
//       ===================================================== */}

//       <section
//         id="prototypes"
//         className="bg-[#F8FAFC] py-16"
//       >

//         <div className="w-full">

//           {/* PROTOTYPES HEADER */}

//           <div className="flex items-end justify-between gap-5">

//             <div>

//               <p
//                 className="
//                   text-sm
//                   font-semibold
//                   uppercase
//                   tracking-[4px]
//                   text-cyan-600
//                 "
//               >
//                 Innovation
//               </p>


//               <h2
//                 className="
//                   mt-2
//                   text-3xl
//                   font-bold
//                   text-slate-900
//                   sm:text-4xl
//                 "
//               >
//                 Developed Prototypes
//               </h2>


//               <p
//                 className="
//                   mt-3
//                   max-w-2xl
//                   leading-7
//                   text-slate-500
//                 "
//               >
//                 Biomedical devices and assistive technologies developed at
//                 the Neuromechanics Research Group.
//               </p>

//             </div>


//             {/* PROTOTYPE ARROWS */}

//             <div className="hidden shrink-0 gap-2 sm:flex">

//               <button
//                 type="button"
//                 onClick={() => scrollPrototypes("left")}
//                 aria-label="Previous prototypes"
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-slate-200
//                   bg-white
//                   text-slate-600
//                   shadow-sm
//                   transition
//                   hover:border-[#21409A]
//                   hover:bg-[#21409A]
//                   hover:text-white
//                 "
//               >
//                 <ChevronLeft size={19} />
//               </button>


//               <button
//                 type="button"
//                 onClick={() => scrollPrototypes("right")}
//                 aria-label="Next prototypes"
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-slate-200
//                   bg-white
//                   text-slate-600
//                   shadow-sm
//                   transition
//                   hover:border-[#21409A]
//                   hover:bg-[#21409A]
//                   hover:text-white
//                 "
//               >
//                 <ChevronRight size={19} />
//               </button>

//             </div>

//           </div>


//           {/* PROTOTYPES CARDS */}

//           <div
//             ref={prototypesRef}
//             className="
//               mt-10
//               flex
//               gap-5
//               overflow-x-auto
//               scroll-smooth
//               pb-5
//               snap-x
//               snap-mandatory
//               [scrollbar-width:none]
//               [&::-webkit-scrollbar]:hidden
//             "
//           >

//             {prototypes.map((item) => (

//               <article
//                 key={item.id}
//                 className="
//                   group
//                   w-[280px]
//                   shrink-0
//                   snap-start
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-slate-200
//                   bg-white
//                   shadow-sm
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:border-[#21409A]
//                   hover:shadow-xl
//                   sm:w-[320px]
//                   lg:w-[350px]
//                 "
//               >

//                 {/* IMAGE */}

//                 <div
//                   className="
//                     flex
//                     h-56
//                     items-center
//                     justify-center
//                     overflow-hidden
//                     bg-slate-50
//                     p-4
//                   "
//                 >

//                   <img
//                     src={assetPath(item.image)}
//                     alt={item.title}
//                     className="
//                       max-h-full
//                       max-w-full
//                       object-contain
//                       transition-transform
//                       duration-500
//                       group-hover:scale-105
//                     "
//                   />

//                 </div>


//                 {/* CONTENT */}

//                 <div className="p-5">

//                   {item.category && (
//                     <p
//                       className="
//                         text-[11px]
//                         font-semibold
//                         uppercase
//                         tracking-[2px]
//                         text-cyan-600
//                       "
//                     >
//                       {item.category}
//                     </p>
//                   )}


//                   <h3
//                     className="
//                       mt-2
//                       text-xl
//                       font-bold
//                       text-slate-900
//                     "
//                   >
//                     {item.title}
//                   </h3>


//                   {item.description && (
//                     <p
//                       className="
//                         mt-2
//                         text-sm
//                         leading-6
//                         text-slate-600
//                       "
//                     >
//                       {item.description}
//                     </p>
//                   )}

//                 </div>

//               </article>

//             ))}

//           </div>


//           <p className="mt-1 text-center text-xs text-slate-400 sm:hidden">
//             Swipe horizontally to explore
//           </p>

//         </div>

//       </section>

//     </main>
//   );
// }


import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FiCalendar, FiExternalLink } from "react-icons/fi";

import hexagon from "../assets/images/hexagon.svg";

import gallery from "../data/gallery";
import { assetPath } from "../utils/assetPath";

import siteImages from "../data/siteImages";
import facilities from "../data/facilities";
import prototypes from "../data/prototypes";
import experience from "../data/experience";
import news from "../data/news";
import publicationData from "../data/publications";

/* =========================================================
   RESEARCH AREAS
========================================================= */

const interests = [
  "Biomedical Instrumentation",
  "Medical Signal and Image Processing",
  "Neuromechanics and Neuroprosthetics",
  "Assistive Devices and Rehabilitation Engineering",
  "Human-Computer Interface",
];

/* =========================================================
   WORKING OPPORTUNITIES
========================================================= */

const opportunities = [
  {
    id: 1,
    title: "Research Positions",
    description:
      "Openings for JRF, SRF and Ph.D. scholars in Neuromechanics. Candidates from Electrical, Electronics, Mechanical and Computer Science are encouraged to apply.",
    tags: ["JRF", "SRF", "Ph.D."],
  },

  {
    id: 2,
    title: "Student Opportunities",
    description:
      "B.Tech., M.Tech. thesis projects and summer internships are available for students interested in biomedical engineering and AI.",
    tags: ["B.Tech", "M.Tech", "Internship"],
  },

  {
    id: 3,
    title: "Special Programs",
    description:
      "International collaborations, funded research projects and clinical volunteer studies are actively ongoing in the laboratory.",
    tags: ["Research", "Volunteer"],
  },
];

/* =========================================================
   HOMEPAGE
========================================================= */

/* Latest items shown on the home page (same ordering as the News and Publications pages) */
const yearOf = (text) =>
  parseInt(String(text).match(/\d{4}/)?.[0] || "0", 10);

const latestNews = [...news]
  .sort((a, b) => yearOf(b.date) - yearOf(a.date))
  .slice(0, 3);

const latestPublications = [
  ...(publicationData.journals || []),
  ...(publicationData.conferences || []),
  ...(publicationData.patents || []),
  ...(publicationData.bookChapters || []),
]
  .sort((a, b) => Number(b.year) - Number(a.year))
  .slice(0, 3);

/* Small helpers for the home-page list rows */
const highlightName = (text) => {
  if (!text) return null;

  return text.split(/(Deepak Joshi)/gi).map((part, index) =>
    part.toLowerCase() === "deepak joshi" ? (
      <span key={index} className="font-bold text-[#1F3F97]">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  );
};

const venueOf = (p) => {
  const venue = p.journal || p.conference || p.publisher || "";
  if (!venue) return "";

  return (
    venue +
    (p.volume ? ` • Vol. ${p.volume}` : "") +
    (p.issue ? ` (${p.issue})` : "") +
    (p.pages ? ` • pp. ${p.pages}` : "")
  );
};

const urlOf = (p) =>
  typeof p.publicationUrl === "string" && p.publicationUrl.trim() !== ""
    ? p.publicationUrl.trim()
    : null;

/* Picks random photos from the gallery (one per event, so they look varied) */
const pickRandomPhotos = (count) => {
  const pool = gallery
    .map((event) => {
      const photos = [
        ...new Set([event.cover, ...(event.images || [])].filter(Boolean)),
      ];

      if (photos.length === 0) return null;

      return {
        src: photos[Math.floor(Math.random() * photos.length)],
        title: event.title,
        category: event.category,
        date: event.date,
      };
    })
    .filter(Boolean);

  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, count);
};

export default function Homepage() {
  const facilitiesRef = useRef(null);
  const prototypesRef = useRef(null);
  const [labPhotos] = useState(() => pickRandomPhotos(3));

  /* =======================================================
     FACILITIES SCROLL
  ======================================================= */

  const scrollFacilities = (direction) => {
    if (!facilitiesRef.current) return;

    facilitiesRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  /* =======================================================
     PROTOTYPES SCROLL
  ======================================================= */

  const scrollPrototypes = (direction) => {
    if (!prototypesRef.current) return;

    prototypesRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-[#F8FAFC]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="nrl-hero w-full">

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[28px]
            border
            border-slate-200
            bg-white
            shadow-sm
          "
        >

          {/* Background Pattern */}

          <img
            src={hexagon}
            alt=""
            className="
              pointer-events-none
              absolute
              inset-0
              h-full
              w-full
              object-cover
              opacity-[0.04]
            "
          />

          {/* HERO CONTENT */}

          <div
            className="
              relative
              grid
              items-center
              gap-10
              px-6
              py-8
              sm:px-8
              lg:grid-cols-[1.15fr_0.85fr]
              lg:px-12
              lg:py-10
            "
          >

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div>

              {/* PROFESSOR IMAGE */}

              <div className="flex items-center gap-3">

                <img
                  src={assetPath(siteImages.professorImage)}
                  alt="Professor"
                  className="
                    h-14
                    w-14
                    rounded-full
                    border-4
                    border-white
                    object-cover
                    shadow-md
                  "
                />

                <div>

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[3px]
                      text-cyan-600
                    "
                  >
                    Professor
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Neuromechanics research lab
                  </p>

                </div>

              </div>


              {/* NAME */}

              <h1
                className="
                  mt-5
                  text-4xl sm:text-5xl
                  font-bold
                  leading-tight
                  text-slate-900
                  
                  
                "
              >
                Deepak Joshi
              </h1>


              {/* INSTITUTE */}

              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Indian Institute of Technology Delhi • New Delhi
              </p>


              {/* INTRODUCTION */}

              <p
                className="
                  mt-7
                  max-w-3xl
                  text-base
                  leading-7
                  text-slate-600
                "
              >
                Welcome to the{" "}
                <strong className="font-semibold text-slate-900">
                  Neuromechanics Research Group
                </strong>{" "}
                at the Centre for Biomedical Engineering, IIT Delhi.
              </p>


              <p
                className="
                  mt-6
                  max-w-3xl
                  text-base
                  leading-7
                  text-slate-600
                "
              >
                Our interdisciplinary research combines biomechanics,
                neuroscience, rehabilitation engineering, wearable sensing,
                biomedical imaging, and artificial intelligence to develop
                next-generation healthcare technologies for neurological
                rehabilitation and assistive systems.
              </p>


              {/* BUTTONS */}

              <div className="mt-7 flex flex-wrap gap-3">

                <Link
                  to="/projects"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#21409A]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#19327b]
                  "
                >
                  Explore Research
                  <ArrowUpRight size={16} />
                </Link>


                <Link
                  to="/publications"
                  className="
                    rounded-full
                    border
                    border-slate-300
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-slate-900
                    transition
                    hover:border-[#21409A]
                    hover:text-[#21409A]
                  "
                >
                  Publications
                </Link>


                <Link
                  to="/contact"
                  className="
                    rounded-full
                    border
                    border-slate-300
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-slate-900
                    transition
                    hover:border-[#21409A]
                    hover:text-[#21409A]
                  "
                >
                  Contact
                </Link>

              </div>


              {/* RESEARCH AREAS */}

              <div className="mt-8">

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[4px]
                    text-cyan-600
                  "
                >
                  Research Areas
                </p>


                <div className="mt-4 flex flex-wrap gap-2">

                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="
                        rounded-full
                        border
                        border-slate-300
                        bg-white
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-slate-600
                      "
                    >
                      {interest}
                    </span>
                  ))}

                </div>

              </div>

            </div>


            {/* =================================================
                HERO IMAGE
            ================================================= */}

            <div className="flex justify-center lg:justify-end">

              <img
                src={assetPath(siteImages.heroImage)}
                alt="Deepak Joshi"
                className="
                  w-full
                  max-w-[420px]
                  rounded-[28px]
                  object-cover
                  shadow-xl
                  lg:h-[510px]
                "
              />

            </div>

          </div>


          {/* =================================================
              STATISTICS
          ================================================= */}

          <div
            className="
              grid
              border-t
              border-slate-200
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            <div
              className="
                border-b
                border-slate-200
                p-5
                text-center
                sm:border-r
                lg:border-b-0
              "
            >

              <p className="text-xl font-bold text-[#21409A]">
                100+
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Publications
              </p>

            </div>


            <div
              className="
                border-b
                border-slate-200
                p-5
                text-center
                lg:border-b-0
                lg:border-r
              "
            >

              <p className="text-xl font-bold text-[#21409A]">
                20+
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Years of Research
              </p>

            </div>


            <div
              className="
                border-b
                border-slate-200
                p-5
                text-center
                sm:border-r
                lg:border-b-0
              "
            >

              <p className="text-xl font-bold text-[#21409A]">
                12+
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Funded Projects
              </p>

            </div>


            <div className="p-5 text-center">

              <p className="text-xl font-bold text-[#21409A]">
                AI + Healthcare
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Research Focus
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WORKING OPPORTUNITIES
      ===================================================== */}

      {/* =====================================================
          EXPERIENCE
      ====================================================== */}

      <section id="experience" className="py-8 sm:py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[4px] text-cyan-600">
              Career
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Experience
            </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-500">
            Research and teaching positions held at leading institutions in India, the United States, the United Kingdom and Singapore.
          </p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
          {experience.map((item) => (
            <article
              key={item.id}
              className={`nrl-row grid gap-1 border-b border-l-4 border-b-slate-200 px-6 py-5 last:border-b-0 sm:grid-cols-[210px_1fr] sm:gap-8 sm:px-8 ${
                item.current
                  ? "border-l-[#21409A] bg-blue-50"
                  : "border-l-transparent"
              }`}
            >
              <p className="text-sm font-bold text-[#163D88]">
                {item.period}
                {item.current && (
                  <span className="ml-2 rounded-full bg-[#0A4DA3] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Now
                  </span>
                )}
              </p>

              <div>
                <h3 className="font-bold leading-snug text-slate-900">
                  {item.role}
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  {item.organization}
                  <span className="text-slate-400"> · </span>
                  {item.department}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          THE LAB  (random photos from the gallery)
      ====================================================== */}

      <section id="lab" className="py-8 sm:py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[4px] text-cyan-600">
              Our Lab
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              The Lab
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-500">
              A glimpse of life at the Neuromechanics Research Lab, from
              research and visits to celebrations with the team.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-[#21409A]"
          >
            View gallery
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {labPhotos.map((photo) => (
            <Link key={photo.src} to="/gallery" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <img
                  src={assetPath(photo.src)}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-xl"
                />

                <img
                  src={assetPath(photo.src)}
                  alt={photo.title}
                  loading="lazy"
                  className="relative h-full w-full object-contain"
                />
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[2px] text-[#163D88]">{photo.category}</span>
                <span className="text-xs text-slate-500">{photo.date}</span>
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-900">
                {photo.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="opportunities"
        className="py-8 sm:py-10"
      >

        <div className="w-full">

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[4px]
              text-cyan-600
            "
          >
            Join Our Lab
          </p>


          <h2
            className="
              mt-3
              text-2xl sm:text-3xl
              font-bold
              text-slate-900
              
            "
          >
            Working Opportunities
          </h2>


          <p
            className="
              mt-4
              max-w-3xl
              leading-7
              text-slate-500
            "
          >
            Join our multidisciplinary research group working on
            biomechanics, rehabilitation engineering, machine learning,
            wearable healthcare and biomedical technologies.
          </p>


          {/* OPPORTUNITY CARDS */}

          <div
            className="
              mt-10
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {opportunities.map((item) => (

              <div
                key={item.id}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#21409A]/10
                  "
                >

                  <div
                    className="
                      h-4
                      w-4
                      rounded-full
                      bg-[#21409A]
                    "
                  />

                </div>


                <h3
                  className="
                    text-lg
                    font-bold
                    text-slate-900
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-slate-600
                  "
                >
                  {item.description}
                </p>


                <div className="mt-5 flex flex-wrap gap-2">

                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        bg-slate-100
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-slate-600
                      "
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            ))}

          </div>


          {/* CONTACT */}

          <div className="mt-12 text-center">

            <Link
              to="/contact"
              className="
                inline-flex
                rounded-full
                bg-[#21409A]
                px-8
                py-3
                font-semibold
                text-white
                transition
                hover:bg-[#19327b]
              "
            >
              Contact
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <section
        id="facilities"
        className="py-8 sm:py-10"
      >

        <div className="w-full">

          {/* FACILITIES HEADER */}

          <div className="flex items-end justify-between gap-5">

            <div>

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[4px]
                  text-cyan-600
                "
              >
                Laboratory
              </p>


              <h2
                className="
                  mt-2
                  text-2xl sm:text-3xl
                  font-bold
                  text-slate-900
                  
                "
              >
                Available Facilities
              </h2>


              <p
                className="
                  mt-3
                  max-w-2xl
                  leading-7
                  text-slate-500
                "
              >
                Advanced biomedical instrumentation supporting neuroscience,
                rehabilitation engineering and wearable healthcare research.
              </p>

            </div>


            {/* FACILITIES ARROWS */}

            <div className="hidden shrink-0 gap-2 sm:flex">

              <button
                type="button"
                onClick={() => scrollFacilities("left")}
                aria-label="Previous facilities"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-600
                  shadow-sm
                  transition
                  hover:border-[#21409A]
                  hover:bg-[#21409A]
                  hover:text-white
                "
              >
                <ChevronLeft size={19} />
              </button>


              <button
                type="button"
                onClick={() => scrollFacilities("right")}
                aria-label="Next facilities"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-600
                  shadow-sm
                  transition
                  hover:border-[#21409A]
                  hover:bg-[#21409A]
                  hover:text-white
                "
              >
                <ChevronRight size={19} />
              </button>

            </div>

          </div>


          {/* FACILITIES CARDS */}

          <div
            ref={facilitiesRef}
            className="
              mt-10
              flex
              gap-5
              overflow-x-auto
              scroll-smooth
              pb-5
              snap-x
              snap-mandatory
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >

            {facilities.map((facility) => (

              <article
                key={facility.id}
                className="
                  group
                  w-[310px]
                  shrink-0
                  snap-start
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#21409A]
                  hover:shadow-lg
                  sm:w-[360px]
                "
              >

                {/* IMAGE */}

                <div
                  className="
                    flex
                    h-[210px]
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    bg-slate-50
                  "
                >

                  <img
                    src={assetPath(facility.image)}
                    alt={facility.title}
                    className="
                      h-full
                      w-full
                      object-contain
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                </div>


                {/* CONTENT */}

                <div className="px-1 pb-1 pt-5">

                  {facility.subtitle && (
                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[2px]
                        text-cyan-600
                      "
                    >
                      {facility.subtitle}
                    </p>
                  )}


                  <h3
                    className="
                      mt-1
                      text-lg
                      font-bold
                      text-slate-900
                    "
                  >
                    {facility.title}
                  </h3>


                  {facility.description && (
                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-slate-600
                      "
                    >
                      {facility.description}
                    </p>
                  )}

                </div>

              </article>

            ))}

          </div>


          <p className="mt-1 text-center text-xs text-slate-400 sm:hidden">
            Swipe horizontally to explore
          </p>

        </div>

      </section>


      {/* =====================================================
          PROTOTYPES
      ===================================================== */}

      <section
        id="prototypes"
        className="py-8 sm:py-10"
      >

        <div className="w-full">

          {/* PROTOTYPES HEADER */}

          <div className="flex items-end justify-between gap-5">

            <div>

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[4px]
                  text-cyan-600
                "
              >
                Innovation
              </p>


              <h2
                className="
                  mt-2
                  text-2xl sm:text-3xl
                  font-bold
                  text-slate-900
                  
                "
              >
                Developed Prototypes
              </h2>


              <p
                className="
                  mt-3
                  max-w-2xl
                  leading-7
                  text-slate-500
                "
              >
                Biomedical devices and assistive technologies developed at
                the Neuromechanics Research Group.
              </p>

            </div>


            {/* PROTOTYPE ARROWS */}

            <div className="hidden shrink-0 gap-2 sm:flex">

              <button
                type="button"
                onClick={() => scrollPrototypes("left")}
                aria-label="Previous prototypes"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-600
                  shadow-sm
                  transition
                  hover:border-[#21409A]
                  hover:bg-[#21409A]
                  hover:text-white
                "
              >
                <ChevronLeft size={19} />
              </button>


              <button
                type="button"
                onClick={() => scrollPrototypes("right")}
                aria-label="Next prototypes"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-600
                  shadow-sm
                  transition
                  hover:border-[#21409A]
                  hover:bg-[#21409A]
                  hover:text-white
                "
              >
                <ChevronRight size={19} />
              </button>

            </div>

          </div>


          {/* PROTOTYPES CARDS */}

          <div
            ref={prototypesRef}
            className="
              mt-10
              flex
              gap-5
              overflow-x-auto
              scroll-smooth
              pb-5
              snap-x
              snap-mandatory
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >

            {prototypes.map((item) => (

              <article
                key={item.id}
                className="
                  group
                  w-[280px]
                  shrink-0
                  snap-start
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#21409A]
                  hover:shadow-xl
                  sm:w-[320px]
                  lg:w-[350px]
                "
              >

                {/* IMAGE */}

                <div
                  className="
                    flex
                    h-56
                    items-center
                    justify-center
                    overflow-hidden
                    bg-slate-50
                    p-4
                  "
                >

                  <img
                    src={assetPath(item.image)}
                    alt={item.title}
                    className="
                      max-h-full
                      max-w-full
                      object-contain
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                </div>


                {/* CONTENT */}

                <div className="p-5">

                  {item.category && (
                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[2px]
                        text-cyan-600
                      "
                    >
                      {item.category}
                    </p>
                  )}


                  <h3
                    className="
                      mt-2
                      text-lg
                      font-bold
                      text-slate-900
                    "
                  >
                    {item.title}
                  </h3>


                  {item.description && (
                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-slate-600
                      "
                    >
                      {item.description}
                    </p>
                  )}

                </div>

              </article>

            ))}

          </div>


          <p className="mt-1 text-center text-xs text-slate-400 sm:hidden">
            Swipe horizontally to explore
          </p>

        </div>

      </section>

      {/* =====================================================
          LATEST UPDATES
      ====================================================== */}

      <section className="py-8 sm:py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[4px] text-cyan-600">
              News
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Latest Updates
            </h2>
          </div>
          <Link
            to="/news"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-[#21409A]"
          >
            View all
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
          {latestNews.map((item) => (
            <article key={item.id} className="nrl-row border-b border-slate-200 px-6 py-6 last:border-b-0 sm:px-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[2px] text-[#163D88]">{item.category}</span>

                <span className="flex items-center gap-1 text-sm text-slate-500">
                  <FiCalendar size={14} />
                  {item.date}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900">{item.title}</h3>

              <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-600">
                {highlightName(item.bio)}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          LATEST PUBLICATIONS
      ====================================================== */}

      <section className="py-8 sm:py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[4px] text-cyan-600">
              Publications
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Latest Publications
            </h2>
          </div>
          <Link
            to="/publications"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-[#21409A]"
          >
            View all
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
          {latestPublications.map((item) => {
            const url = urlOf(item);
            const venue = venueOf(item);

            return (
              <article key={`${item.type}-${item.id}`} className="nrl-row border-b border-slate-200 px-6 py-6 last:border-b-0 sm:px-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[2px] text-[#163D88]">{item.type}</span>

                  <span className="flex items-center gap-1 text-sm text-slate-500">
                    <FiCalendar size={14} />
                    {item.year}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900">
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 transition-colors hover:text-[#163D88] hover:underline"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>

                {(item.authors || item.inventors) && (
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {highlightName(item.authors || item.inventors)}
                  </p>
                )}

                {venue && (
                  <p className="mt-3 text-sm italic text-slate-500">{venue}</p>
                )}

                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#163D88] hover:underline"
                  >
                    <FiExternalLink size={15} />
                    View Publication
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </section>

    </main>
  );
}