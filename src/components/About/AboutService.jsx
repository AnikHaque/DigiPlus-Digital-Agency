export function AboutService() {
  return (
    <section
  className=" py-16 md:py-20 bg-[url('https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/How-it-work2.jpg')] bg-cover bg-center bg-no-repeat"
>

      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#151129] to-[#110d22] p-6 pt-10 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Our Services
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
            Empower Your Brand
          </h2>

          <div className="mt-8 divide-y divide-white/10 text-white">
            {serviceLines.map((label, idx) => (
              <div
                key={label}
                className="flex items-center justify-between py-4 text-lg md:py-5"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-400">
                    {`0${idx + 1}`}
                  </span>
                  <span className="font-semibold">{label}</span>
                </div>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white">
                  ➜
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}