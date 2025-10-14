export function ServiceCard({ service }) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
      {/* image */}
      <div className="relative h-[260px] w-full">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover"
        />

        {/* dark top gradient to match template */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

        {/* top-left round icon */}
        <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900">
          <img
            src={service.icon}
            alt=""
            className="h-6 w-6 object-contain"
          />
        </div>

        {/* small white circle behind icon on some cards (visual weight) */}
        <div className="absolute left-2 top-2 hidden h-6 w-6 rounded-full bg-white/20 md:block" />

        {/* bottom text + number */}
        <div className="absolute inset-x-0 bottom-4 px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
            {service.id}
          </p>
          <h3 className="mt-1 text-[15px] font-semibold text-white leading-snug">
            {service.title}
          </h3>
        </div>
      </div>
    </div>
  );
}