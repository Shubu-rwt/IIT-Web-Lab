// import news from "../data/news";

// export default function NewsPage() {
//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-5xl px-6 py-12">

//         {/* Hero */}

//         <div>

//           <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4DA3]">
//             NEWS
//           </span>

//           <h1 className="mt-5 text-4xl font-bold text-gray-900">
//             Latest Updates
//           </h1>

//           <p className="mt-4 text-gray-600">
//             Recent student achievements, conferences,
//             laboratory visits and research activities.
//           </p>

//         </div>

//         <div className="mt-10 border-t border-gray-200" />

//         {/* Timeline */}

//         <div className="mt-8 space-y-8">

//           {news.map((item) => (

//             <div
//               key={item.id}
//               className="flex gap-6 border-b border-gray-100 pb-8"
//             >

//               {/* Date */}

//               <div className="w-24 shrink-0">

//                 <p className="text-sm font-semibold text-[#0A4DA3]">
//                   {item.date}
//                 </p>

//               </div>

//               {/* Dot */}

//               <div className="relative flex w-6 justify-center">

//                 <div className="mt-2 h-3 w-3 rounded-full bg-[#0A4DA3]" />

//               </div>

//               {/* Content */}

//               <div className="flex-1">

//                 <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
//                   {item.category}
//                 </span>

//                 <h3 className="mt-2 text-lg font-medium leading-7 text-gray-900">
//                   {item.title}
//                 </h3>

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }


import news from "../data/news";

export default function NewsPage() {
  // Sort newest first while keeping the original date text
  const sortedNews = [...news].sort((a, b) => {
    const yearA = parseInt(a.date.match(/\d{4}/)?.[0] || "0", 10);
    const yearB = parseInt(b.date.match(/\d{4}/)?.[0] || "0", 10);

    return yearB - yearA;
  });

  /*
    Automatically highlights names at the beginning of the bio.

    Example:
    "Amit Kumar has been appointed..."
    -> Amit Kumar is highlighted

    "Dr. Deepak Joshi was promoted..."
    -> Dr. Deepak Joshi is highlighted

    It also works when you add a new person later,
    as long as the person's name is at the beginning of the bio.
  */
  const highlightName = (bio) => {
    if (!bio) return null;

    const match = bio.match(
      /^(Dr\.\s+)?[A-Z][A-Za-z.'-]*(?:\s+[A-Z][A-Za-z.'-]*)+/
    );

    if (!match) {
      return bio;
    }

    const name = match[0];
    const remainingText = bio.slice(name.length);

    return (
      <>
        <span className="font-bold text-[#064E96]">
          {name}
        </span>
        {remainingText}
      </>
    );
  };

  return (
    <section className="w-full">
      <div className="w-full">

        {/* =====================================================
            PAGE HEADER
        ====================================================== */}
        <div className="mb-10 text-center">

          <div className="mb-3 inline-flex items-center rounded-full bg-[#EEF5FF] px-5 py-1.5">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#064E96]">
              News
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#07152F] ">
            Latest Updates
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#52657D] sm:text-lg">
            Recent student achievements, conferences, laboratory visits
            and research activities.
          </p>
        </div>

        {/* =====================================================
            NEWS LIST
        ====================================================== */}
        <div className="space-y-5">

          {sortedNews.map((item) => (
            <article
              key={item.id}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-[#DCE5EF]
                bg-white
                px-5
                py-5
                shadow-[0_2px_10px_rgba(15,23,42,0.03)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#B8CDE5]
                hover:shadow-[0_8px_25px_rgba(15,23,42,0.07)]
                sm:px-6
                sm:py-6
              "
            >

              {/* =================================================
                  TOP ROW
              ================================================== */}
              <div className="flex flex-wrap items-center gap-3">

                {/* Category */}
                <span
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    bg-[#EEF5FF]
                    px-3.5
                    py-1.5
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#064E96]
                  "
                >
                  {item.category}
                </span>

                {/* Date */}
                <span className="text-sm font-medium text-[#71839A]">
                  {item.date}
                </span>
              </div>

              {/* =================================================
                  TITLE
              ================================================== */}
              <h2
                className="
                  mt-5
                  text-lg sm:text-xl
                  font-semibold
                  leading-tight
                  tracking-[-0.02em]
                  text-[#07152F]
                  transition-colors
                  duration-200
                  group-hover:text-[#064E96]
                  
                "
              >
                {item.title}
              </h2>

              {/* =================================================
                  BIO / DESCRIPTION
              ================================================== */}
              <p
                className="
                  mt-4
                  max-w-4xl
                  text-base
                  leading-7
                  text-[#344B66]
                  sm:text-base
                "
              >
                {highlightName(item.bio)}
              </p>

            </article>
          ))}

        </div>

        {/* =====================================================
            EMPTY STATE
        ====================================================== */}
        {sortedNews.length === 0 && (
          <div className="rounded-2xl border border-[#DCE5EF] bg-white px-6 py-16 text-center">
            <p className="text-lg font-medium text-[#52657D]">
              No news updates available.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}