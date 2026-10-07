const prototypes = [
  {
    title: "Force Myography",
    category: "Wearable Sensing",
    image: "/assets/prototypes/fmg.jpg",
  },
  {
    title: "Prosthetic Leg",
    category: "Assistive Technology",
    image: "/assets/prototypes/prosthetic-leg.jpg",
  },
  {
    title: "Smart Shoe",
    category: "Gait Analysis",
    image: "/assets/prototypes/shoe.jpg",
  },
  {
    title: "Smart Insoles",
    category: "Healthcare IoT",
    image: "/assets/prototypes/insole.jpg",
  },
];

export default function Prototypes() {
  return (
    <section
      id="prototypes"
      className="bg-[#F8FAFC] py-14"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="text-sm font-semibold uppercase tracking-[4px] text-cyan-600">
          Innovation
        </p>

        <h2 className="mt-2 text-4xl font-bold text-slate-900">
          Developed Prototypes
        </h2>

        <p className="mt-3 max-w-2xl text-slate-500">
          Biomedical devices and assistive technologies developed at the
          Neuromechanics Research Group.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {prototypes.map((item) => (

            <div
              key={item.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Image */}

              <div className="flex h-52 items-center justify-center bg-slate-50 p-4">

                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain"
                />

              </div>

              {/* Content */}

              <div className="p-5">

                <p className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-600">
                  {item.category}
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}