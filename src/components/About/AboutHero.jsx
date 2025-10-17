export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project5.jpg"
          alt="About background"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-20 text-white md:px-6 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-bold md:text-4xl text-center">About</h1>
        <p className="mt-3 text-sm text-gray-300 text-center">
          Home <span className="mx-2">/</span> <span className="text-white">About</span>
        </p>
      </div>
    </section>
  );
}