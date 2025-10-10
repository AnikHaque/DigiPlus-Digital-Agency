export function ServiceDetailsCTASection() {
  return (
    <section className="bg-gray-900 pb-16 pt-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-300 p-6 md:flex-row md:p-10">
          <div className="flex items-center gap-6">
            <img
              src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/women.png"
              alt="Consultant"
              className="hidden h-28 w-28 rounded-3xl object-cover md:block"
            />
            <div className="max-w-xl text-gray-900">
              <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                Looking For Professional
              </p>
              <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                Business Consultant ?
              </h3>
            </div>
          </div>
          <button className="rounded-full bg-gray-900 px-6 py-3 text-xs font-semibold text-white">
            GET STARTED FREE
          </button>
        </div>
      </div>
    </section>
  );
}