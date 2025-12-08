
import { Footer } from "./shared/Footer";
import { Header } from "./shared/Header";

/* ------------------ DATA ------------------ */

const processSteps = [
  {
    step: "01",
    title: "Project Planning",
    items: ["Project Research", "Competitive Analysis", "Define Flow"],
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/Shape-3.png", // 3D object image
  },
  {
    step: "02",
    title: "Development",
    items: ["Project Development", "Execution", "Error Fixing"],
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/Shape-1.png",
  },
  {
    step: "03",
    title: "Quick Support",
    items: ["Quality assurance", "Launch Product", "Maintenance"],
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/Shape-2.png",
  },
];


const serviceLines = [
  "Brand Identity",
  "UX / UI Design",
  "App Agency",
  "Digital Marketing",
];

const teamMembers = [
  {
    name: "Wade Warren",
    role: "UI Designer, Research",
    avatar: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/team-5.png",
  },
  {
    name: "Leslie Alexander",
    role: "UI Designer, Research",
    avatar: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/team-5.png",
  },
  {
    name: "Leslie Alexander",
    role: "UI Designer, Research",
    avatar: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/team-5.png",
  },
  {
    name: "Jenny Wilson",
    role: "UI Designer, Research",
    avatar: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/team-5.png",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <HeroAbout />
      <AboutCompany />
      <HowWeWork />
      <ServiceLines />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ------------------ HEADER (same style) ------------------ */


/* ------------------ HERO ABOUT ------------------ */

function HeroAbout() {
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

/* ------------------ ABOUT COMPANY SECTION ------------------ */

function AboutCompany() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:px-6 lg:px-8">
        {/* LEFT images */}
        <div className="flex w-full gap-4 md:w-1/2">
          <div className="flex-1 space-y-4">
            <div className="h-64 overflow-hidden rounded-3xl md:h-96">
              <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/About-1.jpg"
                alt="Team"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-40 overflow-hidden rounded-3xl md:h-80">
              <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/About2.jpg"
                alt="Meeting"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="relative flex-1">
            <div className="h-80 overflow-hidden rounded-3xl md:h-80">
              <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/About2.jpg"
                alt="Discussion"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-80 overflow-hidden rounded-3xl md:h-80">
              <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/About2.jpg"
                alt="Discussion"
                className="h-full w-full object-cover"
              />
            </div>
           
          </div>
        </div>

        {/* RIGHT text */}
        <div className="w-full md:w-1/2 mt-15">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
              About Our Company
            </span>
            <span className="h-[2px] w-10 bg-yellow-500"></span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
            We Deliver Innovative Ideas To Elevate Your Digital Agency.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
            Nullam nec ligula a elit, dictum sagittis id quis dui. Sed in tempus
            leo. Maecenas ut mattis vitae luctus libero ullamcorper. Aenean
            eleifend pellentesque sem vitae congue. Vivamus aliquam quam at
            magna blandit dignissim eget eget arcu. Suspendisse potenti. Donec
            sem tortor.
          </p>

          <div className="mt-8 flex flex-col gap-4 rounded-3xl bg-gray-50 p-5 text-sm md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                ⭐
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  We have more than 50+ year of services experience
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-xs text-gray-600 md:items-end md:text-right">
              <p className="font-semibold text-gray-900">Call Anytime</p>
              <p>017-50050088</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-yellow-400 px-6 py-3 text-xs font-semibold text-gray-900 shadow-md">
              Discover More
            </button>
            <button className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700">
              ▶ <span>Watch Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ HOW WE WORK DARK SECTION ------------------ */

function HowWeWork() {
  return (
    <section className="bg-gray-900 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-gray-900 via-[#120f24] to-[#1c1633] p-8 md:p-10">
          <div className="text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              How We Work
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Our Approach
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.02] pt-14 pb-8 px-6 text-sm text-white shadow-[0_24px_60px_rgba(0,0,0,0.60)]"
              >
                {/* STEP PILL – now visible */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="flex h-10 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold backdrop-blur">
                    {step.step}
                  </div>
                </div>

                {/* glow */}
                <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-orange-500/20 blur-2xl" />
                <div className="pointer-events-none absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-orange-500/10 blur-2xl" />

                <h3 className="mb-5 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <div className="space-y-4">
                  {step.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-full border border-white/15 bg-white/5 px-6 py-2 text-xs text-gray-100"
                    >
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* 3D image (optional) */}
                {step.image && (
                  <div className="pointer-events-none absolute -bottom-4 right-0 h-32 w-32 md:h-40 md:w-40">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



/* ------------------ SERVICES LINES DARK BLOCK ------------------ */

function ServiceLines() {
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

/* ------------------ TEAM SECTION ------------------ */

function TeamSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Our Team
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
            What Success Looks
            <br />
            From The Back
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative rounded-3xl bg-gray-50 p-5 text-center shadow-sm"
            >
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-[6px] border-white shadow">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-900">
                {member.name}
              </p>
              <p className="text-xs text-gray-500">{member.role}</p>

              <button className="absolute -bottom-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gray-900 text-white text-xs shadow-md">
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ CTA + FOOTER ------------------ */

function CTASection() {
  return (
    <section className="bg-gray-900 pb-16 pt-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-300 p-6 md:flex md:items-center md:justify-between md:p-10">
          <div className="max-w-xl text-gray-900">
            <p className="text-xs font-semibold uppercase tracking-[0.3em]">
              Need Help
            </p>
            <h3 className="mt-2 text-2xl font-bold md:text-3xl">
              Looking For Professional Business Consultant?
            </h3>
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


