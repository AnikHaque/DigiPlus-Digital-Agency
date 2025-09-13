import { ProcessItem } from "./WorkProccess";

export function StatsSection() {

  const stats = [
  { value: "8K", label: "Project Delivered" },
  { value: "10K", label: "Active Clients" },
  { value: "7K+", label: "Positive Feedback" },
  { value: "25", label: "Team Members" },
];

  return (
    <section className="bg-gray-900 py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[2fr,3fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              Our numbers
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Our Work In Numbers
            </h2>
            <p className="mt-3 text-sm text-gray-300 md:text-base">
              We focus on long-term partnerships and measurable performance. Our
              clients stay with us because we consistently deliver.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/5 p-4 text-sm"
                >
                  <p className="text-2xl font-bold text-amber-400">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-gray-300">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 p-6 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              Work process
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              A Clear Path From Idea To Launch
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <ProcessItem
                number="01"
                title="Choose Services"
                desc="Select the combination of branding, design or marketing services you need."
              />
              <ProcessItem
                number="02"
                title="Strategy & Planning"
                desc="We audit, research and create a roadmap fully aligned with your goals."
              />
              <ProcessItem
                number="03"
                title="Design & Build"
                desc="Our team designs and implements campaigns, content and experiences."
              />
              <ProcessItem
                number="04"
                title="Launch & Optimize"
                desc="We monitor, optimize and scale what works for consistent growth."
              />
            </div>
            <button className="mt-6 rounded-full bg-amber-400 px-6 py-3 text-xs font-semibold text-gray-900">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}