export function PricingCard({ plan }) {
  const { name, price, period, description, featured, badge } = plan;

  return (
    <div
      className={`relative flex h-full flex-col rounded-[1.75rem] border bg-white p-7 shadow-[0_20px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 ${
        featured
          ? "border-yellow-400 shadow-[0_24px_55px_rgba(245,158,11,0.35)]"
          : "border-gray-100"
      }`}
    >
      {/* top icon & badge */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50 text-xl">
          💎
        </div>
        {badge && (
          <div className="rounded-full bg-yellow-400 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-900">
            {badge}
          </div>
        )}
      </div>

      {/* price */}
      <div className="flex items-end gap-1">
        <span className="text-2xl font-semibold text-gray-900">$</span>
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="mb-1 text-xs text-gray-500">/ {period}</span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-gray-900">{name}</h3>
      <p className="mt-1 text-xs text-gray-500">{description}</p>

      <div className="mt-5 h-px w-full bg-gray-200" />

      {/* features list */}
      <ul className="mt-5 space-y-3 text-sm text-gray-700">
        {features.map((feat) => (
          <li key={feat} className="flex items-start gap-2">
            <span className="mt-1 h-3 w-3 rounded-full border border-gray-300 bg-white text-[9px] leading-none text-yellow-500">
              •
            </span>
            <span className="text-[13px]">{feat}</span>
          </li>
        ))}
      </ul>

      {/* button */}
      <div className="mt-7">
        <button
          className={`w-full rounded-full px-6 py-3 text-xs font-semibold tracking-[0.14em] ${
            featured
              ? "bg-yellow-400 text-gray-900"
              : "bg-yellow-400 text-gray-900"
          }`}
        >
          GET STARTED NOW
        </button>
      </div>
    </div>
  );
}