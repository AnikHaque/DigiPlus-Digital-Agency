// WebDevelopmentPage.jsx
import React, { useState } from "react";

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <MainSection />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ---------------- HEADER ---------------- */

function Header() {
  const menu = ["Home", "Pages", "Services", "Projects", "Blog", "Contact"];

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-gray-900/95 to-gray-900/75 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-sm font-bold text-gray-900">
            DP
          </div>
          <span className="text-lg font-semibold">DigiPlus</span>
        </div>

        {/* nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {menu.map((item) => (
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
          ))}
        </nav>

        {/* call + menu */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 text-xs text-gray-200">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/10">
              📞
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em]">
                Call Anytime
              </p>
              <p className="text-sm font-semibold">017-50050088</p>
            </div>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
            ☰
          </button>
        </div>

        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm md:hidden">
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
        src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project3.jpg"
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-yellow-500/60" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-white md:px-6 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-bold md:text-[32px]">Web Development</h1>
        <p className="mt-3 text-xs text-gray-200 md:text-sm">
          Home <span className="mx-1">›</span> Web Development
        </p>
      </div>
    </section>
  );
}

/* ---------------- MAIN 3-COL GRID ---------------- */

function MainSection() {
  const serviceList = [
    "Web Development",
    "UI/UX Design",
    "Mobile Application",
    "Cloud Service",
    "Cyber Security",
    "App Agency",
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 space-y-10">
        {/* same grid for row1 + row2, 3 columns on lg */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* ROW 1 - LEFT: SERVICE LIST (col 1) */}
          <div className="rounded-3xl bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              Service List
            </h3>
            <div className="space-y-2 text-sm">
              {serviceList.map((item, idx) => {
                const active = idx === 0;
                return (
                  <button
                    key={item}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[13px] ${
                      active
                        ? "bg-yellow-400 font-semibold text-gray-900"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{item}</span>
                    <span className="text-xs">›</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ROW 1 - RIGHT: BIG IMAGE (col 2+3) */}
          <div className="lg:col-span-2 overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(15,23,42,0.10)]">
            <img
              src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project3.jpg"
              alt="Team"
              className="h-[320px] w-full object-cover md:h-[360px]"
            />
          </div>

          {/* ROW 2 - LEFT: HELP CARD + FORM (col 1) */}
          <div className="space-y-6">
            {/* help card */}
            <div className="overflow-hidden rounded-3xl bg-gray-900 text-white shadow-[0_20px_40px_rgba(15,23,42,0.18)]">
              <div className="h-40 w-full overflow-hidden">
                <img
                  src="/img/service-help.jpg"
                  alt="Help"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-6 py-6 text-center space-y-3">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-gray-900">
                  💬
                </div>
                <div className="text-xs space-y-1">
                  <p className="font-semibold">Need help? Talk to expert</p>
                  <p className="text-gray-300">
                    Contact with us for any advice
                  </p>
                </div>
              </div>
            </div>

            {/* form */}
            <div className="rounded-3xl bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                More Services
              </h3>
              <div className="space-y-3 text-xs">
                <Input placeholder="Your Name" />
                <Input placeholder="Email Address" />
                <Input placeholder="Enter Subject" />
                <Input placeholder="Enter Phone" />
                <textarea
                  className="h-24 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-xs outline-none focus:border-yellow-400"
                  placeholder="Write a Message"
                />
                <button className="mt-1 w-full rounded-full bg-yellow-400 py-2 text-[11px] font-semibold tracking-[0.18em] text-gray-900">
                  SEND A MESSAGE
                </button>
              </div>
            </div>
          </div>

          {/* ROW 2 - RIGHT: TEXT + 2 IMAGES (col 2+3) */}
          <div className="lg:col-span-2 space-y-8">
            {/* text */}
            <div className="space-y-5 text-sm leading-relaxed text-gray-600 md:text-[15px]">
              <p className="text-xs text-gray-500">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s.
              </p>

              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-gray-900">
                  Digital Marketing
                </h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet.
                </p>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth.
                </p>
              </div>
            </div>

            {/* two images */}
            <div className="grid gap-5 md:grid-cols-2">
              <img
                src="/img/service-sub-1.jpg"
                alt="Sub 1"
                className="h-[220px] w-full rounded-2xl object-cover"
              />
              <img
                src="/img/service-sub-2.jpg"
                alt="Sub 2"
                className="h-[220px] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* নিচে full-width অংশ */}
        <ServiceProcess />
        <FAQSection />
      </div>
    </section>
  );
}

function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-xs outline-none focus:border-yellow-400"
    />
  );
}

/* ---------------- SERVICE PROCESS ---------------- */

const processSteps = [
  {
    id: "01",
    title: "Request For Service",
    text: "The process begins when a customer or client requests a service. This could be an inquiry, a complaint or a need for assistance. It’s important to capture detailed information about.",
  },
  {
    id: "02",
    title: "Service Planning",
    text: "The process begins when a customer or client requests a service. This could be an inquiry, a complaint or a need for assistance. It’s important to capture detailed information about.",
  },
  {
    id: "03",
    title: "Quality Control",
    text: "The process begins when a customer or client requests a service. This could be an inquiry, a complaint or a need for assistance. It’s important to capture detailed information about.",
  },
  {
    id: "04",
    title: "Follow-up & Support",
    text: "The process begins when a customer or client requests a service. This could be an inquiry, a complaint or a need for assistance. It’s important to capture detailed information about.",
  },
];

function ServiceProcess() {
  return (
    <section className="space-y-5">
      <h3 className="text-lg font-semibold text-gray-900">Service Process</h3>
      <div className="space-y-4">
        {processSteps.map((step) => (
          <div key={step.id} className="flex gap-4">
            <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-yellow-300 bg-yellow-50 text-xs font-semibold text-gray-900">
              {step.id}
            </div>
            <div className="space-y-1 text-sm text-gray-700">
              <p className="font-semibold text-gray-900">{step.title}</p>
              <p className="text-xs md:text-[13px]">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const faqItems = [
  {
    q: "What is a Digital Agency?",
    a: "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi at arcu. Phasellus nec odio orci. Nunc id massa ante.",
  },
  {
    q: "What Services Does a Digital Agency Offer?",
    a: "They offer web design, development, branding, SEO, social media, and marketing strategy services.",
  },
  {
    q: "Why Should I Hire a Digital Agency?",
    a: "A digital agency brings experience, tools, and a whole team to help you grow faster online.",
  },
  {
    q: "How Much Does It Cost to Work with a Digital Agency?",
    a: "Pricing depends on scope, size, and complexity of the project. Agencies typically offer packages or custom quotes.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">
        Frequently Asked Questions
      </h3>
      <div className="rounded-2xl border border-gray-100 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
        {faqItems.map((item, idx) => {
          const open = idx === openIndex;
          return (
            <div key={item.q} className="border-b last:border-none">
              <button
                onClick={() => setOpenIndex(open ? -1 : idx)}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-gray-900"
              >
                <span className="flex-1 text-[13px]">
                  {idx + 1}. {item.q}
                </span>
                <span className="ml-4 text-xs">{open ? "−" : "+"}</span>
              </button>
              {open && (
                <div className="px-6 pb-4 text-[12px] leading-relaxed text-gray-600">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CTASection() {
  return (
    <section className="bg-gray-900 pb-16 pt-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-300 p-6 md:flex-row md:p-10">
          <div className="flex items-center gap-6">
            <img
              src="/img/cta-person.jpg"
              alt="Consultant"
              className="hidden h-28 w-28 rounded-3xl object-cover md:block"
            />
            <div className="max-w-xl text-gray-900">
              <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                Looking For Professional
              </p>
              <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                Business Consultant ?
              </h3>
            </div>
          </div>
          <button className="rounded-full bg-gray-900 px-6 py-3 text-xs font-semibold text-white">
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
    <footer className="bg-gray-900 pb-10 pt-10 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 text-xs md:grid-cols-4">
          {/* logo column */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 font-bold text-gray-900">
                DP
              </div>
              <p className="text-lg font-semibold text-white">DigiPlus</p>
            </div>
            <p className="mt-3 text-gray-400">
              At vero eos et accusamus justo odio dignissimos ducimus blanditiis
            </p>
            <div className="mt-4 flex items-center rounded-full bg-gray-800 px-2 py-1">
              <input
                placeholder="Email address"
                className="flex-1 bg-transparent px-2 text-[11px] outline-none"
              />
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-gray-900 text-xs">
                ➤
              </button>
            </div>
          </div>

          <FooterColumn
            title="Quick Link"
            items={["Features", "Pricing Plan", "Best Program", "Press Kit"]}
          />
          <FooterColumn
            title="Company"
            items={["About", "Team Member", "Reviews", "Latest News"]}
          />
          <FooterColumn
            title="Contact"
            items={[
              "55 Main Street, 2nd block Melbourne, Australia",
              "support@gmail.com",
              "+000 (123) 44 55",
            ]}
          />
        </div>

        <div className="mt-8 border-t border-gray-800 pt-5 text-[11px] text-gray-500">
          © Copyright 2025 by kodesolution.com
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-500">
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
