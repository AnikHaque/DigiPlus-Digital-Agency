export function Process() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:px-6 lg:px-8">
        <div className="w-full md:w-1/2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
            Our process
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            We Create A Roadmap For Your Brand Growth
          </h2>
          <p className="mt-4 text-sm text-gray-600 md:text-base">
            From the first strategy workshop to campaign launch, you&apos;ll
            always know what we&apos;re working on and why. Transparency and
            communication are key to how we collaborate.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-700">
            <span className="inline-flex items-center rounded-full bg-white px-3 py-2 shadow-sm">
              ✅ Discovery & research
            </span>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-2 shadow-sm">
              ✅ Brand & messaging
            </span>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-2 shadow-sm">
              ✅ Design & development
            </span>
          </div>
          <button className="mt-6 rounded-full bg-gray-900 px-6 py-3 text-xs font-semibold text-white hover:bg-gray-800">
            Learn About Our Process
          </button>
        </div>

        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="relative h-64 w-64 rounded-full bg-amber-400/80 p-8 text-center text-sm font-semibold text-gray-900 shadow-xl">
            <div className="flex h-full flex-col items-center justify-center">
              <p className="text-xs uppercase tracking-[0.24em]">
                Next step
              </p>
              <p className="mt-2 text-xl font-bold">Shape Your Brand</p>
              <p className="mt-2 text-xs">
                Let&apos;s define a digital presence that your audience loves
                and remembers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}