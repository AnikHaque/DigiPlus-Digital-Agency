// ServicesPage.jsx
import React from "react";

/* ---------- DATA ---------- */

const services = [
  {
    id: "01",
    title: "UI / UX Creative design",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/Project1-550x550.jpg",      // service background image
    icon: "/img/icon-uiux.png",       // small circle icon image
  },
  {
    id: "02",
    title: "Digital Marketing",
    image: "/img/service-2.jpg",
    icon: "/img/icon-digital-marketing.png",
  },
  {
    id: "03",
    title: "Marketing Strategy",
    image: "/img/service-3.jpg",
    icon: "/img/icon-strategy.png",
  },
  {
    id: "04",
    title: "Digital Platform",
    image: "/img/service-4.jpg",
    icon: "/img/icon-platform.png",
  },
  {
    id: "05",
    title: "Data Analysis",
    image: "/img/service-5.jpg",
    icon: "/img/icon-data.png",
  },
  {
    id: "06",
    title: "Marketing Strategy",
    image: "/img/service-6.jpg",
    icon: "/img/icon-strategy.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <ServicesHero />
      <ServicesGrid />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ================= HEADER (global) ================= */

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-gray-900/95 to-gray-900/75 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 font-bold text-gray-900">
            DP
          </div>
          <div>
            <p className="text-lg font-semibold leading-tight">DigiPlus</p>
            <p className="text-[11px] text-gray-300">Digital Agency</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {["Home", "Pages", "Services", "Projects", "Blog", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className={`transition ${
                  item === "Services"
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                }`}
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Call + menu */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 text-xs text-gray-200">
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

/* ================= HERO ================= */

function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src="/img/services-hero-bg.jpg" // same hero background style
          alt="Services hero"
          className="h-full w-full object-cover"
        />
      </div>
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-yellow-500/60" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 text-white md:px-6 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-bold md:text-[34px]">Services</h1>
        <p className="mt-3 text-sm text-gray-200">
          Home <span className="mx-1">›</span>{" "}
          <span className="text-white">Services</span>
        </p>
      </div>
    </section>
  );
}

/* ================= SERVICES GRID ================= */

function ServicesGrid() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
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

/* ================= CTA ================= */

function CTASection() {
  return (
    <section className="bg-gray-900 pb-16 pt-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-300 p-6 md:flex md:items-center md:justify-between md:p-10">
          <div className="flex items-center gap-6">
            <div className="hidden h-28 w-28 overflow-hidden rounded-3xl bg-yellow-200 md:block">
              <img
                src="/img/cta-person.jpg"
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

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="bg-gray-900 pb-10 pt-10 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 text-sm md:grid-cols-4">
          {/* logo + text + email */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 font-bold text-gray-900">
                DP
              </div>
              <p className="text-lg font-semibold text-white">DigiPlus</p>
            </div>
            <p className="mt-3 text-xs text-gray-400">
              At vero eos et accusamus justo odio dignissimos ducimus
              blanditiis.
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

          {/* quick link */}
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

          {/* company */}
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

          {/* contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Contact
            </p>
            <div className="mt-3 space-y-2 text-xs">
              <p>55 Main Street, 2nd block Melbourne, Australia</p>
              <p>Support@gmail.com</p>
              <p>+000 (123) 44 55</p>
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
