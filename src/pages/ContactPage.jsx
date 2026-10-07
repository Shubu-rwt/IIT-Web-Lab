import contact from "../data/contact";
import {
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlinePhone,
} from "react-icons/hi2";

export default function ContactPage() {
  return (
    <section>
      <div className="w-full">

        {/* Hero */}

        <div className="mb-6">

          <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5">

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4DA3]">
              CONTACT
            </span>

          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Get in Touch
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
            For research collaborations, student supervision,
            consultancy and academic inquiries.
          </p>

          <div className="mt-5 h-px bg-gray-200"></div>

        </div>

        {/* Content */}

        <div className="grid gap-8 lg:grid-cols-[1fr_440px]">

                      {/* Left Column */}
          <div className="space-y-5">

            {/* Office */}
            <section className="border-b border-gray-200 pb-5">

              <div className="mb-2 flex items-center gap-2">
                <HiOutlineMapPin className="h-4 w-4 text-[#0A4DA3]" />
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0A4DA3]">
                  Office
                </h2>
              </div>

              <div className="space-y-1 text-sm leading-6 text-gray-700">

                <h3 className="text-lg font-semibold text-gray-900">
                  {contact.office.name}
                </h3>

                <p>{contact.office.designation}</p>

                <p>{contact.office.department}</p>

                <p>{contact.office.room}</p>

                <p>{contact.office.institute}</p>

                <p>{contact.office.address}</p>

              </div>

            </section>

            {/* Email */}
            <section className="border-b border-gray-200 pb-5">

              <div className="mb-2 flex items-center gap-2">
                <HiOutlineEnvelope className="h-4 w-4 text-[#0A4DA3]" />
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0A4DA3]">
                  Email
                </h2>
              </div>

              <div className="space-y-1">

                {contact.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-sm text-gray-700 transition hover:text-[#0A4DA3]"
                  >
                    {email}
                  </a>
                ))}

              </div>

            </section>

            {/* Phone */}
            <section>

              <div className="mb-2 flex items-center gap-2">
                <HiOutlinePhone className="h-4 w-4 text-[#0A4DA3]" />
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0A4DA3]">
                  Phone
                </h2>
              </div>

              <a
                href={`tel:${contact.phone}`}
                className="text-sm text-gray-700 transition hover:text-[#0A4DA3]"
              >
                {contact.phone}
              </a>

            </section>

          </div>
                    {/* Right Column */}
          <div className="lg:sticky lg:top-24 h-fit">

            <div className="mb-3 flex items-center gap-2">

              <HiOutlineMapPin className="h-4 w-4 text-[#0A4DA3]" />

              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0A4DA3]">
                Office Location
              </h2>

            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200">

              <iframe
                title={contact.map.title}
                src={contact.map.embed}
                className="h-[320px] w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

            <p className="mt-3 text-sm text-gray-500">
              Indian Institute of Technology Delhi,
              Hauz Khas, New Delhi – 110016
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}