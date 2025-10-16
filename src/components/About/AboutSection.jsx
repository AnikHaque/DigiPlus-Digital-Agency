export function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:px-6 lg:px-8">
        {/* LEFT images */}
        <div className="flex w-full gap-4 md:w-1/2">
          <div className="flex-1 space-y-4">
            <div className="h-64 overflow-hidden rounded-3xl md:h-96">
              <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/About-1.jpg"
                alt="Team"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-40 overflow-hidden rounded-3xl md:h-80">
              <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/About2.jpg"
                alt="Meeting"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="relative flex-1">
            <div className="h-80 overflow-hidden rounded-3xl md:h-80">
              <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/About2.jpg"
                alt="Discussion"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-80 overflow-hidden rounded-3xl md:h-80">
              <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/About2.jpg"
                alt="Discussion"
                className="h-full w-full object-cover"
              />
            </div>
           
          </div>
        </div>

        {/* RIGHT text */}
        <div className="w-full md:w-1/2 mt-15">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
              About Our Company
            </span>
            <span className="h-[2px] w-10 bg-yellow-500"></span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
            We Deliver Innovative Ideas To Elevate Your Digital Agency.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
            Nullam nec ligula a elit, dictum sagittis id quis dui. Sed in tempus
            leo. Maecenas ut mattis vitae luctus libero ullamcorper. Aenean
            eleifend pellentesque sem vitae congue. Vivamus aliquam quam at
            magna blandit dignissim eget eget arcu. Suspendisse potenti. Donec
            sem tortor.
          </p>

          <div className="mt-8 flex flex-col gap-4 rounded-3xl bg-gray-50 p-5 text-sm md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                ⭐
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  We have more than 50+ year of services experience
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-xs text-gray-600 md:items-end md:text-right">
              <p className="font-semibold text-gray-900">Call Anytime</p>
              <p>017-50050088</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-yellow-400 px-6 py-3 text-xs font-semibold text-gray-900 shadow-md">
              Discover More
            </button>
            <button className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700">
              ▶ <span>Watch Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}