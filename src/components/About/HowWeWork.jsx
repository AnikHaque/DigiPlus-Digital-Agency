export function HowWeWork() {
  return (
    <section className="bg-gray-900 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-gray-900 via-[#120f24] to-[#1c1633] p-8 md:p-10">
          <div className="text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              How We Work
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Our Approach
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.02] pt-14 pb-8 px-6 text-sm text-white shadow-[0_24px_60px_rgba(0,0,0,0.60)]"
              >
                {/* STEP PILL – now visible */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="flex h-10 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold backdrop-blur">
                    {step.step}
                  </div>
                </div>

                {/* glow */}
                <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-orange-500/20 blur-2xl" />
                <div className="pointer-events-none absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-orange-500/10 blur-2xl" />

                <h3 className="mb-5 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <div className="space-y-4">
                  {step.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-full border border-white/15 bg-white/5 px-6 py-2 text-xs text-gray-100"
                    >
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* 3D image (optional) */}
                {step.image && (
                  <div className="pointer-events-none absolute -bottom-4 right-0 h-32 w-32 md:h-40 md:w-40">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
