
import  { useState } from "react";
import { Footer } from "./shared/Footer";
import { Header } from "./shared/Header";

const faqsLeft = [
  {
    q: "What are IT solutions?",
    a: "IT solutions encompass a range of technologies and services designed to address specific business needs, such as network security, cloud computing, and software development.",
  },
  {
    q: "How can IT solutions benefit my business?",
    a: "They help improve efficiency, security, collaboration, and scalability by optimizing infrastructure and workflows.",
  },
  {
    q: "What types of IT solutions are available?",
    a: "Common solutions include managed services, cloud platforms, cybersecurity tools, data analytics, and custom software.",
  },
  {
    q: "How do I choose the right IT solutions for my business?",
    a: "Start by defining your goals, auditing current systems, and partnering with an experienced provider to design a roadmap.",
  },
  {
    q: "What is the implementation process for IT solutions?",
    a: "Typically: discovery, planning, deployment, testing, training, and ongoing monitoring or optimization.",
  },
];

const faqsRight = [
  {
    q: "What is the implementation process for IT solutions?",
    a: "Implementation involves assessment, planning, configuration, migration, testing, and post-launch support.",
  },
  {
    q: "How can IT solutions help with cybersecurity?",
    a: "Through firewalls, encryption, monitoring, access controls, and security awareness training.",
  },
  {
    q: "How do I choose the right IT solutions for my business?",
    a: "Align solutions to your budget, team capacity, and long-term growth strategy.",
  },
  {
    q: "What types of IT solutions are available?",
    a: "From on-premise tools to fully managed cloud services across infrastructure, apps, and security.",
  },
  {
    q: "How can IT solutions benefit my business?",
    a: "They reduce downtime, improve performance, and help you respond faster to market changes.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <FaqHero />
      <FaqSection />
      <CTASection />
      <Footer />
    </div>
  );
}


/* ---------------- HERO ---------------- */

function FaqHero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="/img/faq-hero-bg.jpg" // hero bg
          alt="FAQ hero"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-yellow-500/60" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-white md:px-6 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-bold md:text-[34px] text-center">FAQ&apos;s</h1>
        <p className="mt-3 text-sm text-gray-200 text-center">
          Home <span className="mx-1">›</span>{" "}
          <span className="text-white">FAQ&apos;s</span>
        </p>
      </div>
    </section>
  );
}

/* ---------------- FAQ SECTION ---------------- */

function FaqSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <FaqColumn items={faqsLeft} defaultOpenIndex={0} />
          <FaqColumn items={faqsRight} defaultOpenIndex={0} />
        </div>
      </div>
    </section>
  );
}

function FaqColumn({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = idx === openIndex;
        return (
          <div
            key={item.q}
            className="rounded-2xl bg-white shadow-[0_20px_40px_rgba(15,23,42,0.06)]"
          >
            <button
              type="button"
              onClick={() =>
                setOpenIndex((prev) => (prev === idx ? -1 : idx))
              }
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
            >
              <span className="text-[14px] font-semibold text-gray-900">
                {item.q}
              </span>
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-xs text-gray-700 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ⌃
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-gray-100 px-6 pb-4 pt-3 text-xs leading-relaxed text-gray-600">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- CTA + FOOTER (same style as others) ---------------- */

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


