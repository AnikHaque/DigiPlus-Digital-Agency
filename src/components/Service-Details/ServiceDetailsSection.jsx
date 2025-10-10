import { ServiceDetailsFAQSection } from "./ServiceDetailsFaq";
import { ServiceDetailsInput } from "./ServiceDetailsInput";
import { ServiceDetailsProcess } from "./ServiceDetailsProccess";

export function ServiceDetailsSection() {
  const serviceList = [
    "Web Development",
    "UI/UX Design",
    "Mobile Application",
    "Cloud Service",
    "Cyber Security",
    "App Agency",
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 space-y-10">
        {/* same grid for row1 + row2, 3 columns on lg */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* ROW 1 - LEFT: SERVICE LIST (col 1) */}
          <div className="rounded-3xl bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              Service List
            </h3>
            <div className="space-y-2 text-sm">
              {serviceList.map((item, idx) => {
                const active = idx === 0;
                return (
                  <button
                    key={item}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[13px] ${
                      active
                        ? "bg-yellow-400 font-semibold text-gray-900"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{item}</span>
                    <span className="text-xs">›</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ROW 1 - RIGHT: BIG IMAGE (col 2+3) */}
          <div className="lg:col-span-2 overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(15,23,42,0.10)]">
            <img
              src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project3.jpg"
              alt="Team"
              className="h-[320px] w-full object-cover md:h-[360px]"
            />
          </div>

          {/* ROW 2 - LEFT: HELP CARD + FORM (col 1) */}
          <div className="space-y-6">
            {/* help card */}
            <div className="overflow-hidden rounded-3xl bg-gray-900 text-white shadow-[0_20px_40px_rgba(15,23,42,0.18)]">
              <div className="h-40 w-full overflow-hidden">
                <img
                  src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/service9.jpg"
                  alt="Help"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-6 py-6 text-center space-y-3">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-gray-900">
                  💬
                </div>
                <div className="text-xs space-y-1">
                  <p className="font-semibold">Need help? Talk to expert</p>
                  <p className="text-gray-300">
                    Contact with us for any advice
                  </p>
                </div>
              </div>
            </div>

            {/* form */}
            <div className="rounded-3xl bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                More Services
              </h3>
              <div className="space-y-3 text-xs">
                <ServiceDetailsInput placeholder="Your Name" />
                <ServiceDetailsInput placeholder="Email Address" />
                <ServiceDetailsInput placeholder="Enter Subject" />
                <ServiceDetailsInput placeholder="Enter Phone" />
                <textarea
                  className="h-24 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-xs outline-none focus:border-yellow-400"
                  placeholder="Write a Message"
                />
                <button className="mt-1 w-full rounded-full bg-yellow-400 py-2 text-[11px] font-semibold tracking-[0.18em] text-gray-900">
                  SEND A MESSAGE
                </button>
              </div>
            </div>
          </div>

          {/* ROW 2 - RIGHT: TEXT + 2 IMAGES (col 2+3) */}
          <div className="lg:col-span-2 space-y-8">
            {/* text */}
            <div className="space-y-5 text-sm leading-relaxed text-gray-600 md:text-[15px]">
              <p className="text-xs text-gray-500">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s.
              </p>

              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-gray-900">
                  Digital Marketing
                </h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet.
                </p>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth.
                </p>
              </div>
            </div>

            {/* two images */}
            <div className="grid gap-5 md:grid-cols-2">
              <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/page-title1-672x448.jpg"
                alt="Sub 1"
                className="h-[220px] w-full rounded-2xl object-cover"
              />
              <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project4-1024x683.jpg"
                alt="Sub 2"
                className="h-[220px] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* নিচে full-width অংশ */}
        <ServiceDetailsProcess />
        <ServiceDetailsFAQSection />
      </div>
    </section>
  );
}
