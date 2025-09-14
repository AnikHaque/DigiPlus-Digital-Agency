export function Portfolio() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
            Our work
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            Where Imagination Meets Execution
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {portfolioImages.map((src, idx) => (
            <div
              key={idx}
              className={`overflow-hidden rounded-3xl ${
                idx === 0 ? "sm:row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`Project ${idx + 1}`}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}