export function AboutUs() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:px-6 lg:px-8">
        <div className="grid w-full gap-4 md:w-1/2">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/About-1.jpg"
              alt="Team at work"
              className="h-80 w-full object-cover"
            />
          </div>
          <div className="flex gap-4">
            <div className="h-32 flex-1 overflow-hidden rounded-3xl">
              <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/About2.jpg"
                alt="Creative discussion"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 rounded-3xl bg-amber-400/10 p-4 text-xs text-gray-700">
              <p className="font-semibold text-amber-600">
                10+ Years Experience
              </p>
              <p className="mt-2">
                Helping brands launch, grow and transform in the digital space.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
            About agency
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
            We Deliver Digital Experiences That Drive Results
          </h2>
          <p className="mt-4 text-sm text-gray-600 md:text-base">
            Our team brings together strategists, designers and growth
            specialists who blend creativity with data to build campaigns that
            perform. We partner with you end-to-end: from discovery to launch
            and beyond.
          </p>

          <div className="mt-6 grid gap-4 text-sm text-gray-700 sm:grid-cols-2">
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">
                Human-centered design
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Every touchpoint is crafted with your users in mind.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">
                Data-driven growth
              </p>
              <p className="mt-1 text-xs text-gray-500">
                We iterate, test and optimize for measurable outcomes.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-gray-900 px-6 py-3 text-xs font-semibold text-white shadow-lg transition hover:bg-gray-800">
              Discover More
            </button>
            <div className="flex items-center gap-3 text-xs text-gray-600">
              <div className="h-10 w-10 rounded-full bg-amber-400/40" />
              <div>
                <p className="font-semibold text-gray-900">
                  24/7 Project Support
                </p>
                <p>Dedicated account managers</p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            Have a new project? Let&apos;s talk and build something impactful
            together.
          </p>
        </div>
      </div>
    </section>
  );
}