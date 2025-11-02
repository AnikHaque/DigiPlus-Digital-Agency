// ContactPage.jsx
import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <ContactCards />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */

function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-gray-900/95 to-gray-900/75 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 font-bold text-gray-900">
            DP
          </div>
          <p className="text-lg font-semibold">DigiPlus</p>
        </div>

        {/* Menu */}
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {["Home", "Pages", "Services", "Projects", "Blog", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className={`transition ${
                  item === "Contact"
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                }`}
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Call */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 text-xs">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/10">
              📞
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em]">
                Call Anytime
              </p>
              <p className="font-semibold text-sm">017-50050088</p>
            </div>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
            ☰
          </button>
        </div>

        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      <img
        src="/img/contact-hero.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-yellow-500/60" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-white lg:px-8">
        <h1 className="text-3xl font-bold md:text-[32px] text-center">Contact</h1>
        <p className="mt-3 text-xs text-gray-200 text-center">
          Home <span className="mx-1">›</span>{" "}
          <span className="text-white">Contact</span>
        </p>
      </div>
    </section>
  );
}

/* ---------------- CARDS ---------------- */

function ContactCards() {
  const items = [
    {
      icon: "📍",
      title: "Address Line",
      text: "Bowery St, New York, 37 USA NY 10013,USA",
    },
    {
      icon: "📞",
      title: "Phone Number",
      text: "+0175 – 005 – 0088 +0175-005 – 0088",
    },
    {
      icon: "✉️",
      title: "Mail Address",
      text: "info@yourdomain.com email@example.com",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
        {items.map((card, index) => (
          <div
            key={index}
            className="rounded-3xl bg-white p-10 text-center shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-50 text-2xl">
              {card.icon}
            </div>
            <p className="font-semibold">{card.title}</p>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- MAP + FORM ---------------- */

function ContactSection() {
  return (
    <section className="py-10">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl bg-white p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] lg:grid-cols-2">
        {/* MAP */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://i.ibb.co.com/j9hzvqtk/Capture.png"
            alt="Map"
            className="h-[380px] w-full object-cover"
          />
        </div>

        {/* FORM */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Get In Touch
          </p>
          <h3 className="mt-1 text-2xl font-bold">Book An Appointment</h3>

          <form className="mt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="form" placeholder="Your Name" />
              <input className="form" placeholder="Email Address" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input className="form" placeholder="Enter Subject" />
              <input className="form" placeholder="Enter Phone" />
            </div>

            <textarea
              className="form h-32"
              placeholder="Write a Message"
            />

            <button className="rounded-full bg-gray-900 px-8 py-3 text-xs font-semibold text-white">
              SEND A MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CTASection() {
  return (
    <section className="bg-gray-900 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-300 p-10 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <img
              src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/women.png"
              className="hidden h-28 w-28 rounded-3xl object-cover md:block"
            />
            <p className="max-w-xs text-gray-900 text-xl font-semibold">
              Looking For Professional Business Consultant?
            </p>
          </div>
          <button className="rounded-full bg-gray-900 px-6 py-3 text-xs text-white font-semibold">
            GET STARTED FREE
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="bg-gray-900 py-14 text-gray-400 text-xs">
      <div className="mx-auto max-w-6xl grid gap-10 px-4 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 font-bold text-gray-900">
              DP
            </div>
            <p className="text-white text-lg">DigiPlus</p>
          </div>
          <p className="mt-3">
            At vero eos et accusamus justo odio dignissimos ducimus blanditiis
          </p>
          <div className="mt-4 flex rounded-full bg-gray-800 px-2 py-1">
            <input
              placeholder="Email address"
              className="flex-1 bg-transparent px-2 outline-none"
            />
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-gray-900">
              ➤
            </button>
          </div>
        </div>

        <Column title="Quick Link" items={["Features", "Pricing Plan", "Best Program", "Press Kit"]} />
        <Column title="Company" items={["About", "Team Member", "Reviews", "Latest News"]} />
        <Column
          title="Contact"
          items={[
            "55 Main Street, 2nd block Melbourne, Australia",
            "support@gmail.com",
            "+000 (123) 44 55",
          ]}
        />
      </div>
    </footer>
  );
}

function Column({ title, items }) {
  return (
    <div>
      <p className="uppercase text-[10px] tracking-[0.3em] text-gray-500">
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- TAILWIND FORM UTIL ---------------- */

const formClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-[13px] outline-none focus:border-yellow-400";
document.styleSheets[0].insertRule(`.form { ${formClass} }`);
