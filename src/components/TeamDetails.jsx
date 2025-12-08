
import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";

export default function TeamDetailsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <TeamDetailsHero />
      <TeamDetailsSection />
      <CTASection />
      <Footer />
    </div>
  );
}



/* ================= HERO ================= */

function TeamDetailsHero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src="/img/team-hero-bg.jpg" // your hero bg
          alt="Team"
          className="h-full w-full object-cover"
        />
      </div>
      {/* overlay similar to template */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-yellow-500/60" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 text-white md:px-6 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-bold md:text-[34px]">Team Details</h1>
        <p className="mt-3 text-sm text-gray-200">
          Home <span className="mx-1">›</span>
          <span className="text-white">Team Details</span>
        </p>
      </div>
    </section>
  );
}

/* ================= MAIN SECTION ================= */

function TeamDetailsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* Top: Image + details */}
        <div className="grid gap-10 md:grid-cols-[1.1fr,1.7fr]">
          {/* LEFT IMAGE CARD */}
          <div className="rounded-[1.75rem] bg-gray-100 p-4 shadow-[0_24px_45px_rgba(15,23,42,0.15)]">
            <div className="h-[420px] w-full overflow-hidden rounded-[1.5rem]">
              <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/team4-1.jpg" // main portrait
                alt="Jessica Brown"
                className="h-screen w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Jessica Brown
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-[15px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae illo inventore veritatis et quasi architecto beatae vitae
                dicta.
              </p>

              {/* About Me list – single column like template */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  About Me
                </h3>

                <div className="mt-4 space-y-2 text-sm">
                  <InfoRow label="Email:" value="info@yourdomain.com" />
                  <InfoRow
                    label="Location:"
                    value="63391 Elgin St. Celina, Delaware 10299"
                  />
                  <InfoRow
                    label="Website:"
                    value="www.exampleyourdomain.com"
                  />
                  <InfoRow label="Age:" value="25 Years" />
                  <InfoRow label="Qualification:" value="UI/UX Designer" />
                  <InfoRow label="Phone:" value="01750050088" />
                </div>
              </div>
            </div>

            {/* Social icons row under info */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-gray-500">
              {["fb", "tw", "in", "ig", "vk"].map((s) => (
                <button
                  key={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-gray-900 hover:text-gray-900"
                >
                  {s.toUpperCase()[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Short biography */}
        <div className="mt-14">
          <h3 className="text-lg font-semibold text-gray-900">
            Short Biography
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-[15px]">
            Web designing in a powerful way of just not an only professions,
            however, in a passion for our Company. We have to a tendency to
            believe the idea that smart looking of any website is the first
            impression on visitors. Sed ut perspiciatis unde omnis natus error
            sit voluptatem accusantium doloremque laudantium totam rem aperiam
            eaque ipsa ab illo inventore veritatis et quasi architecto beatae
            vitae. There are many variations.
          </p>
        </div>

        {/* Contact + Skills row */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* CONTACT FORM */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <p className="mt-3 text-sm text-gray-600 md:text-[15px]">
              Bring to the table win-win survival strategies to ensure proactive
              domination going forward, a new normal that has evolved simply.
            </p>

            <form className="mt-6 grid gap-4 text-sm md:grid-cols-2">
              <input
                className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs outline-none focus:border-yellow-400"
                placeholder="Your Name"
              />
              <input
                className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs outline-none focus:border-yellow-400"
                placeholder="Email Address"
              />
              <input
                className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs outline-none focus:border-yellow-400"
                placeholder="Enter Subject"
              />
              <input
                className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs outline-none focus:border-yellow-400"
                placeholder="Enter Phone"
              />
              <textarea
                rows={4}
                className="md:col-span-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs outline-none focus:border-yellow-400"
                placeholder="Write a Message"
              />
              <div className="md:col-span-2">
                <button className="w-full rounded-full bg-yellow-400 px-6 py-3 text-xs font-semibold tracking-[0.14em] text-gray-900 shadow-md md:w-auto">
                  SEND A MESSAGE
                </button>
              </div>
            </form>
          </div>

          {/* EXPERTISE & SKILLS */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Expertise &amp; Skills
            </h3>
            <p className="mt-3 text-sm text-gray-600 md:text-[15px]">
              Bring to the table win-win at survival strategies win to ensure
              with proactive other domination going forward, a new normal that
              has evolved from generation X is on the runway heading towards a
              streamlined solution survival strategies ensure adipiscing impedit
              ab cloud.
            </p>

            <div className="mt-6 space-y-6">
              <SkillBar
                label="Scalable Solutions"
                percentage={80}
                color="bg-yellow-400"
              />
              <SkillBar
                label="Automation Features"
                percentage={70}
                color="bg-gray-900"
              />
              <SkillBar
                label="24/7 Support"
                percentage={90}
                color="bg-yellow-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====== SMALL SUBCOMPONENTS ====== */

function InfoRow({ label, value }) {
  return (
    <div className="flex text-sm">
      <span className="w-28 font-semibold text-gray-900">{label}</span>
      <span className="text-gray-700">{value}</span>
    </div>
  );
}

function SkillBar({ label, percentage, color }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs font-semibold text-gray-900">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-gray-100">
        <div
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

/* ================= CTA ================= */

function CTASection() {
  return (
    <section className="bg-gray-900 pb-16 pt-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-300 p-6 md:flex md:items-center md:justify-between md:p-10">
          <div className="flex items-center gap-6">
            <div className="hidden h-28 w-28 overflow-hidden rounded-3xl bg-yellow-200 md:block">
             <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/women.png"
                alt="Business consultant"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="max-w-xl text-gray-900">
              <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                Need Help
              </p>
              <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                Looking For Professional Business Consultant ?
              </h3>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-start gap-3 md:mt-0 md:items-end">
            <button className="rounded-full bg-gray-900 px-6 py-3 text-xs font-semibold text-white">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


