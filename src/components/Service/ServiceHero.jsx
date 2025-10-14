export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project5.jpg" 
          alt="Services hero"
          className="h-full w-full object-cover"
        />
      </div>
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-yellow-500/60" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 text-white md:px-6 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-bold md:text-[34px] text-center">Services</h1>
        <p className="mt-3 text-sm text-gray-200 text-center">
          Home <span className="mx-1">›</span>{" "}
          <span className="text-white">Services</span>
        </p>
      </div>
    </section>
  );
}