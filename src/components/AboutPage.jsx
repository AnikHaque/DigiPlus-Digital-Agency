// AboutPage.jsx
import React from "react";

/* ------------------ DATA ------------------ */

const processSteps = [
  {
    step: "01",
    title: "Project Planning",
    items: ["Project Research", "Competitive Analysis", "Define Flow"],
  },
  {
    step: "02",
    title: "Development",
    items: ["Project Development", "Execution", "Error Fixing"],
  },
  {
    step: "03",
    title: "Quick Support",
    items: ["Quality Assurance", "Launch Product", "Maintenance"],
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
    avatar: "/img/team-1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "UI Designer, Research",
    avatar: "/img/team-2.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "UI Designer, Research",
    avatar: "/img/team-3.jpg",
  },
  {
    name: "Jenny Wilson",
    role: "UI Designer, Research",
    avatar: "/img/team-4.jpg",
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

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-gray-900/95 to-gray-900/70 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 font-bold text-gray-900">
            DP
          </div>
          <div>
            <p className="text-lg font-semibold">DigiPlus</p>
            <p className="text-[11px] text-gray-300">Digital Agency</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {["Home", "Pages", "Services", "Projects", "Blog", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="transition hover:text-yellow-400"
              >
                {item}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/10">
              📞
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em]">
                Call Anytime
              </p>
              <p className="text-sm font-semibold">017-50050088</p>
            </div>
          </div>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
            ☰
          </button>
        </div>

        <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}

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
            <div className="h-64 overflow-hidden rounded-3xl md:h-80">
              <img
                src="/img/about-page-1.jpg"
                alt="Team"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-40 overflow-hidden rounded-3xl md:h-44">
              <img
                src="/img/about-page-2.jpg"
                alt="Meeting"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="relative flex-1">
            <div className="h-80 overflow-hidden rounded-3xl md:h-96">
              <img
                src="/img/about-page-3.jpg"
                alt="Discussion"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-900 shadow-lg">
              Creative
              <br />
              Agency
            </div>
          </div>
        </div>

        {/* RIGHT text */}
        <div className="w-full md:w-1/2">
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

          {/* Steps */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative overflow-hidden rounded-3xl bg-white/5 p-6 text-sm text-white shadow-[0_24px_60px_rgba(0,0,0,0.60)]"
              >
                <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
                  {step.step}
                </div>
                <h3 className="mb-4 text-lg font-semibold">{step.title}</h3>
                <ul className="space-y-2 text-xs text-gray-300">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {/* Placeholder for 3D object image */}
                <div className="mt-6 h-20 rounded-3xl bg-black/40" />
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
    <section className="bg-gray-900 pb-16 pt-4 md:pb-20">
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
    <section className="bg-gray-900 pb-16">
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

function Footer() {
  return (
    <footer className="bg-gray-900 pb-10 pt-10 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 text-sm md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 font-bold text-gray-900">
                DP
              </div>
              <p className="text-lg font-semibold text-white">DigiPlus</p>
            </div>
            <p className="mt-3 text-xs text-gray-400">
              At vero eos et accusamus justo odio dignissimos ducimus blanditiis.
            </p>
            <div className="mt-4 flex items-center rounded-full bg-gray-800 px-2 py-1">
              <input
                placeholder="Email address"
                className="flex-1 bg-transparent px-2 text-xs outline-none"
              />
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-gray-900 text-xs">
                ➤
              </button>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Quick Link
            </p>
            <div className="mt-3 flex flex-col gap-2 text-xs">
              <a href="#">Feature</a>
              <a href="#">Pricing Plan</a>
              <a href="#">Best Program</a>
              <a href="#">Press Kit</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Company
            </p>
            <div className="mt-3 flex flex-col gap-2 text-xs">
              <a href="#">About</a>
              <a href="#">Team Member</a>
              <a href="#">Reviews</a>
              <a href="#">Latest News</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Contact
            </p>
            <div className="mt-3 space-y-2 text-xs">
              <p>65 Main Street, 2nd block Melbourne, Australia</p>
              <p>support@email.com</p>
              <p>+000 (123) 45 85</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-5 text-[11px] text-gray-500 md:flex-row">
          <p>© 2025 DigiPlus. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#">Features</a>
            <a href="#">Pricing Plan</a>
            <a href="#">Best Program</a>
            <a href="#">Press Kit</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
