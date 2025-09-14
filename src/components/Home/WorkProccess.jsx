export function ProcessItem({ number, title, desc }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-black/30 p-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-400/20 text-xs font-bold text-amber-300">
        {number}
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-xs text-gray-300">{desc}</p>
      </div>
    </div>
  );
}