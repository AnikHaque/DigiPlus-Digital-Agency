// PricingPage.jsx
import React from "react";

const plans = [
  {
    name: "Personal Plan",
    price: 50,
    period: "Monthly",
    description: "Customized anything in anytime",
    featured: false,
  },
  {
    name: "Premium Plan",
    price: 60,
    period: "Monthly",
    description: "Customized anything in anytime",
    featured: true,
    badge: "Save 20%",
  },
  {
    name: "Standard Plan",
    price: 60,
    period: "Monthly",
    description: "Customized anything in anytime",
    featured: false,
  },
];

const features = [
  "Unlimited features",
  "Multi language content",
  "30 Days free trial features",
  "Data backup and recovery",
  "Updates via dashboard & slack",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <PricingHero />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ------------ HEADER (same style as others) ------------ */

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
                className="transition hover:text-yellow-400"
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

/* ------------ HERO ------------ */

function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="/img/pricing-hero-bg.jpg" // replace with your hero bg
          alt="Pricing hero"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-yellow-500/60" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-white md:px-6 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-bold md:text-[34px] text-center">Pricing Plan</h1>
        <p className="mt-3 text-sm text-gray-200 text-center">
          Home <span className="mx-1">›</span>{" "}
          <span className="text-white">Pricing Plan</span>
        </p>
      </div>
    </section>
  );
}

/* ------------ PRICING SECTION ------------ */

function PricingSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan }) {
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

/* ------------ CTA & FOOTER (same as other pages) ------------ */

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
