// ProjectsPage.jsx
import React from "react";
import { Footer } from "./shared/Footer";

const projects = [
  { id: 1, image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project3-600x800.jpg" },
  { id: 2, image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project3-600x800.jpg" },
  { id: 3, image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project3-600x800.jpg" },
  { id: 4, image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project3-600x800.jpg" },
  { id: 5, image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project3-600x800.jpg" },
  { id: 6, image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project3-600x800.jpg" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <ProjectsHero />
      <ProjectsGrid />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ---------------- HEADER ---------------- */

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
                  item === "Projects" ? "text-yellow-400" : "hover:text-yellow-400"
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

/* ---------------- HERO ---------------- */

function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="/img/projects-hero-bg.jpg" // change to your hero bg
          alt="Projects hero"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-yellow-500/60" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-white md:px-6 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-bold md:text-[34px] text-center">Projects</h1>
        <p className="mt-3 text-sm text-gray-200 text-center">
          Home <span className="mx-1">›</span>{" "}
          <span className="text-white">Projects</span>
        </p>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS GRID ---------------- */

function ProjectsGrid() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.id}
              className="overflow-hidden rounded-[1.75rem] bg-gray-100 shadow-[0_20px_40px_rgba(15,23,42,0.10)]"
            >
              <img
                src={p.image}
                alt={`Project ${p.id}`}
                className="h-[260px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

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




