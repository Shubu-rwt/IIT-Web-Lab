import { useEffect, useMemo, useState } from "react";
import gallery from "../data/gallery";

export default function GalleryPage() {
  /* -----------------------------
      STATE
  ------------------------------ */

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  /* -----------------------------
      CATEGORY
  ------------------------------ */

  const categories = [
    "All",
    "Lab",
    "Conference",
    "Students",
    "Research",
  ];

  const filteredGallery = useMemo(() => {
    if (activeCategory === "All") return gallery;

    return gallery.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  /* -----------------------------
      LIGHTBOX
  ------------------------------ */

  const openGallery = (event) => {
    setSelectedEvent(event);
    setCurrentImage(0);
  };

  const closeGallery = () => {
    setSelectedEvent(null);
    setCurrentImage(0);
  };

  const nextImage = () => {
    if (!selectedEvent) return;

    setCurrentImage((prev) =>
      prev === selectedEvent.images.length - 1
        ? 0
        : prev + 1
    );
  };

  const previousImage = () => {
    if (!selectedEvent) return;

    setCurrentImage((prev) =>
      prev === 0
        ? selectedEvent.images.length - 1
        : prev - 1
    );
  };

  /* -----------------------------
      KEYBOARD
  ------------------------------ */

  useEffect(() => {
    if (!selectedEvent) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeGallery();

      if (e.key === "ArrowRight") nextImage();

      if (e.key === "ArrowLeft") previousImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [selectedEvent]);

  /* -----------------------------
      FEATURED CARD
  ------------------------------ */

  const featured = filteredGallery[0];
  const remaining = filteredGallery.slice(1);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Hero */}

        <div className="max-w-3xl">

          <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4DA3]">

            Gallery

          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">

            From the Lab & Beyond

          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">

            Snapshots from research,
            conferences,
            laboratory activities,
            student achievements
            and collaborative events.

          </p>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-gray-200" />

        {/* Filters */}

        <div className="mb-10 flex flex-wrap gap-3">

          {categories.map((category) => (

            <button
              key={category}
              type="button"
              onClick={() =>
                setActiveCategory(category)
              }
              className={`rounded-full border px-5 py-2 text-sm font-medium transition

                ${
                  activeCategory === category
                    ? "bg-[#0A4DA3] text-white border-[#0A4DA3]"
                    : "border-gray-300 text-gray-700 hover:border-[#0A4DA3] hover:text-[#0A4DA3]"
                }

              `}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Gallery starts below */}
                {/* Featured Layout */}

        {featured && (

          <div className="grid gap-6 lg:grid-cols-3">

            {/* Featured Card */}

            <button
              type="button"
              onClick={() => openGallery(featured)}
              className="group relative overflow-hidden rounded-3xl lg:col-span-2"
            >

              <img
                src={featured.cover || featured.images[0]}
                alt={featured.title}
                className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">

                <span className="rounded-full bg-white/95 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#0A4DA3]">

                  {featured.category}

                </span>

                <h2 className="mt-5 text-4xl font-bold text-white">

                  {featured.title}

                </h2>

                <p className="mt-3 text-gray-200">

                  {featured.date}

                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur">

                  📷 {featured.images.length} Photos

                </div>

              </div>

            </button>

            {/* Right Column */}

            <div className="flex flex-col gap-6">

              {remaining.slice(0, 2).map((event) => (

                <button
                  key={event.id}
                  type="button"
                  onClick={() => openGallery(event)}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white text-left transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="overflow-hidden">

                    <img
                      src={event.cover || event.images[0]}
                      alt={event.title}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                  </div>

                  <div className="p-6">

                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0A4DA3]">

                      {event.category}

                    </span>

                    <h3 className="mt-3 text-xl font-semibold text-gray-900">

                      {event.title}

                    </h3>

                    <p className="mt-2 text-sm text-gray-500">

                      {event.date}

                    </p>

                    <p className="mt-4 text-sm font-medium text-gray-700">

                      {event.images.length} Photos

                    </p>

                  </div>

                </button>

              ))}

            </div>

          </div>

        )}

        {/* Remaining Gallery */}

        {remaining.length > 2 && (

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {remaining.slice(2).map((event) => (

              <button
                key={event.id}
                type="button"
                onClick={() => openGallery(event)}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white text-left transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="overflow-hidden">

                  <img
                    src={event.cover || event.images[0]}
                    alt={event.title}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="p-5">

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0A4DA3]">

                      {event.category}

                    </span>

                    <span className="text-xs text-gray-500">

                      {event.images.length} Photos

                    </span>

                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-gray-900">

                    {event.title}

                  </h3>

                  <p className="mt-2 text-sm text-gray-500">

                    {event.date}

                  </p>

                </div>

              </button>

            ))}

          </div>

        )}

        {/* Lightbox Starts Below */}
                {selectedEvent && (
          <div
            onClick={closeGallery}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-[90vh] w-full max-w-7xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              {/* Header */}

              <div className="flex items-center justify-between border-b border-gray-200 px-8 py-5">

                <div>

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4DA3]">

                    {selectedEvent.category}

                  </span>

                  <h2 className="mt-2 text-3xl font-bold text-gray-900">

                    {selectedEvent.title}

                  </h2>

                  <p className="mt-1 text-sm text-gray-500">

                    {selectedEvent.date}

                  </p>

                </div>

                <button
                  type="button"
                  onClick={closeGallery}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-2xl transition hover:bg-gray-200"
                >
                  ×
                </button>

              </div>

              {/* Image */}

              <div className="relative flex flex-1 items-center justify-center bg-gray-100">

                <img
                  src={selectedEvent.images[currentImage]}
                  alt={selectedEvent.title}
                  className="max-h-full max-w-full object-contain p-8"
                />

                {/* Previous */}

                {selectedEvent.images.length > 1 && (
                  <button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-2xl shadow-lg transition hover:scale-110"
                  >
                    ←
                  </button>
                )}

                {/* Next */}

                {selectedEvent.images.length > 1 && (
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-2xl shadow-lg transition hover:scale-110"
                  >
                    →
                  </button>
                )}

              </div>

              {/* Footer */}

              <div className="flex items-center justify-between border-t border-gray-200 px-8 py-5">

                <div>

                  <p className="text-sm text-gray-500">

                    Image{" "}
                    <span className="font-semibold text-gray-900">

                      {currentImage + 1}

                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-gray-900">

                      {selectedEvent.images.length}

                    </span>

                  </p>

                </div>

                {/* Thumbnails */}

                <div className="flex gap-3 overflow-x-auto">

                  {selectedEvent.images.map((image, index) => (

                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      className={`overflow-hidden rounded-xl border-2 transition

                      ${
                        currentImage === index
                          ? "border-[#0A4DA3]"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }

                      `}
                    >

                      <img
                        src={image}
                        alt=""
                        className="h-16 w-24 object-cover"
                      />

                    </button>

                  ))}

                </div>

              </div>

            </div>

          </div>
        )}
                {/* Empty State */}

        {filteredGallery.length === 0 && (
          <div className="rounded-3xl border border-dashed border-gray-300 py-24 text-center">

            <h3 className="text-2xl font-semibold text-gray-800">
              No gallery items found
            </h3>

            <p className="mt-3 text-gray-500">
              There are no events available in this category.
            </p>

            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="mt-8 rounded-full bg-[#0A4DA3] px-6 py-3 text-white transition hover:bg-[#083b7c]"
            >
              View All
            </button>

          </div>
        )}

      </div>

    </section>

  );

}