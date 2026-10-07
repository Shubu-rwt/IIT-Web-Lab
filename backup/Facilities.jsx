const facilities = [
  {
    title: "Wireless EEG",
    subtitle: "64 Channel • Brain Products",
    description: "Brain activity monitoring",
    image: "/assets/facilities/eeg.jpg",
  },
  {
    title: "Wireless EMG",
    subtitle: "12 Channel • Delsys",
    description: "Muscle activity analysis",
    image: "/assets/facilities/emg.jpg",
  },
  {
    title: "Digital Goniometer",
    subtitle: "Biometrics",
    description: "Joint motion analysis",
    image: "/assets/facilities/goniometer.jpg",
  },
  {
    title: "FES System",
    subtitle: "8 Channel • RehaStim2",
    description: "Rehabilitation stimulation",
    image: "/assets/facilities/fes.jpg",
  },
];

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="bg-white py-16"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <p className="uppercase tracking-[4px] text-cyan-600 text-sm font-semibold">
          Laboratory
        </p>

        <h2 className="mt-2 text-4xl font-bold text-slate-900">
          Available Facilities
        </h2>

        <p className="mt-3 max-w-2xl text-slate-500">
          Advanced biomedical instrumentation supporting neuroscience,
          rehabilitation engineering and wearable healthcare research.
        </p>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-5 mt-10">

          {facilities.map((facility) => (

            <div
              key={facility.title}
              className="
                flex
                items-center
                gap-5
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                transition
                hover:shadow-lg
                hover:border-[#21409A]
              "
            >

              {/* Image */}

              <img
                src={facility.image}
                alt={facility.title}
                className="w-32 h-28 rounded-xl object-cover flex-shrink-0"
              />

              {/* Content */}

              <div>

                <p className="text-xs uppercase tracking-[2px] text-cyan-600 font-semibold">
                  {facility.subtitle}
                </p>

                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  {facility.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {facility.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}