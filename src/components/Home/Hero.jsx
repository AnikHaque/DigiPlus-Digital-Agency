export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-amber-900">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        {/* simple overlay pattern */}
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full border border-amber-500/20" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-500/10" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:px-6 lg:px-8 lg:py-24">
        {/* Left content */}
        <div className="w-full md:w-1/2">
          <p className="mb-3 inline-flex items-center rounded-full bg-amber-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            Digital marketing agency
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Make Your
            <span className="block text-amber-400">Brand Future-Proof.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm text-gray-300 sm:text-base">
            We help ambitious brands launch products, build awareness and grow
            faster through strategy, design and performance marketing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg shadow-amber-500/30 transition hover:bg-amber-300">
              Get Started
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-white">
              ▶
              <span>Watch Intro</span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-gray-300">
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
              <div className="h-10 w-10 rounded-xl bg-amber-400/20" />
              <div>
                <p className="font-semibold text-white">68% More Leads</p>
                <p>Average client improvement</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
              <div className="h-10 w-10 rounded-xl bg-amber-400/20" />
              <div>
                <p className="font-semibold text-white">Trusted by Startups</p>
                <p>And global enterprises</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2">
          <div className="relative mx-auto flex max-w-md justify-center">
            <div className="relative h-[420px] w-[380px] overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-amber-300 to-amber-500 shadow-2xl">
              <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/banner-image-8.png"
                alt="Happy consultant"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 left-2 w-40 rounded-2xl bg-white p-3 text-xs shadow-xl">
              <p className="font-semibold text-gray-900">
                Campaign Performance
              </p>
              <p className="mt-1 text-[11px] text-gray-500">
                Last 30 days · +36%
              </p>
              <div className="mt-2 h-14 rounded-xl bg-gray-100" />
            </div>

            <div className="absolute -top-6 right-0 w-40 rounded-2xl bg-gray-900/80 p-3 text-xs text-white backdrop-blur">
              <p className="font-semibold">Live Support</p>
              <p className="mt-1 text-[11px] text-gray-300">
                Average reply time: 5m
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}