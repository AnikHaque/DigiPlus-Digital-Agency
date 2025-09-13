export function Services() {
  
  const services = [
  {
    title: "Branding & Creative Design",
    desc: "Build a consistent brand identity with design that stands out.",
    icon: "🎨",
  },
  {
    title: "Website Design & UX/UI",
    desc: "Modern, responsive and user-friendly website experiences.",
    icon: "💻",
  },
  {
    title: "Corporate Presentation",
    desc: "Communicate your ideas with stunning slide decks.",
    icon: "📊",
  },
  {
    title: "Advertisement & Campaign",
    desc: "Strategic campaigns that grow your business.",
    icon: "📣",
  },
];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
            Services
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
            Empower Your Brand
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-500 md:text-base">
            From brand strategy to performance marketing, we craft solutions
            that scale with your business.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/20 text-lg">
                {service.icon}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900 md:text-base">
                {service.title}
              </h3>
              <p className="mt-2 text-xs text-gray-500 md:text-sm">
                {service.desc}
              </p>
              <button className="mt-4 inline-flex items-center text-xs font-semibold text-amber-500">
                Learn More <span className="ml-1">↗</span>
              </button>
              <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-amber-400/10 opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}