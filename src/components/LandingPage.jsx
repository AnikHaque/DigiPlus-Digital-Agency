 // LandingPage.jsx
import React, { useState } from "react";

const navItems = ["Home", "About", "Services", "Work", "Blog", "Contact"];

const testimonialsData = [
  {
    name: "Diana Panty",
    role: "Business Owner",
    avatar: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/testi2.jpg",
    quote:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    name: "Robert Smith",
    role: "Startup Founder",
    avatar: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/testi2.jpg",
    quote:
      "They helped us launch our product and scale our marketing faster than we expected. Communication was clear and fast.",
  },
  {
    name: "Jessy William",
    role: "Marketing Lead",
    avatar: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/testi2.jpg",
    quote:
      "Creative ideas, solid strategy and clean execution. Our campaigns now feel like part of one strong brand story.",
  },
];

const services = [
  {
    title: "Branding & Creative Design",
    desc: "Build a consistent brand identity with design that stands out.",
    icon: "🎨",
  },
  {
    title: "Website Design & UX/UI",
    desc: "Modern, responsive and user-friendly website experiences.",
    icon: "💻",
  },
  {
    title: "Corporate Presentation",
    desc: "Communicate your ideas with stunning slide decks.",
    icon: "📊",
  },
  {
    title: "Advertisement & Campaign",
    desc: "Strategic campaigns that grow your business.",
    icon: "📣",
  },
];

const stats = [
  { value: "8K", label: "Project Delivered" },
  { value: "10K", label: "Active Clients" },
  { value: "7K+", label: "Positive Feedback" },
  { value: "25", label: "Team Members" },
];

const portfolioImages = [
  "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project2-1100x1100.jpg",
  "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project2-1100x1100.jpg",
  "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project2-1100x1100.jpg",
  "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project2-1100x1100.jpg",
  "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project2-1100x1100.jpg",
  "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project2-1100x1100.jpg",
];

const testimonials = [
  {
    name: "Mark Witson",
    role: "Product Owner",
    avatar: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/testi2.jpg",
    quote:
      "They delivered outstanding results and quickly understood our brand tone.",
  },
  {
    name: "Lada Shroder",
    role: "Marketing Lead",
    avatar: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/testi2.jpg",
    quote:
      "The team goes beyond execution and acts as a true strategic partner.",
  },
  {
    name: "Jenny R. Mack",
    role: "Founder & CEO",
    avatar: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/testi2.jpg",
    quote:
      "From concept to launch, the process was smooth and well-managed.",
  },
];

const blogPosts = [
  {
    title: "Why Brand Consistency Is Essential In Every Business",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project5-672x448.jpg",
    date: "Sep 21, 2024",
  },
  {
    title: "How A/B Testing Can Improve Your Web Conversions",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project4-672x448.jpg",
    date: "Sep 18, 2024",
  },
  {
    title: "Effective Marketing Strategies For Remote Brands",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/slider5-672x448.jpg",
    date: "Sep 13, 2024",
  },
];

const clients = [
  "ClientOne",
  "Star Inc.",
  "Creative Co.",
  "Brandify",
  "Sparkle",
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <StatsSection />
        <Portfolio />
        <Process />
        <Testimonials />
        <Blog />
        <ContactAndCTA />
      </main>
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
         <img src="https://dev252.kodesolution.com/digiplus/wp-content/themes/digiplus/assets/images/logo/logo-wide-white.png" className="w-32"></img>
          
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

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-amber-900">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        {/* simple overlay pattern */}
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full border border-amber-500/20" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-500/10" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:px-6 lg:px-8 lg:py-24">
        {/* Left content */}
        <div className="w-full md:w-1/2">
          <p className="mb-3 inline-flex items-center rounded-full bg-amber-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            Digital marketing agency
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Make Your
            <span className="block text-amber-400">Brand Future-Proof.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm text-gray-300 sm:text-base">
            We help ambitious brands launch products, build awareness and grow
            faster through strategy, design and performance marketing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg shadow-amber-500/30 transition hover:bg-amber-300">
              Get Started
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-white">
              ▶
              <span>Watch Intro</span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-gray-300">
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
              <div className="h-10 w-10 rounded-xl bg-amber-400/20" />
              <div>
                <p className="font-semibold text-white">68% More Leads</p>
                <p>Average client improvement</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
              <div className="h-10 w-10 rounded-xl bg-amber-400/20" />
              <div>
                <p className="font-semibold text-white">Trusted by Startups</p>
                <p>And global enterprises</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2">
          <div className="relative mx-auto flex max-w-md justify-center">
            <div className="relative h-[420px] w-[380px] overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-amber-300 to-amber-500 shadow-2xl">
              <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/banner-image-8.png"
                alt="Happy consultant"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 left-2 w-40 rounded-2xl bg-white p-3 text-xs shadow-xl">
              <p className="font-semibold text-gray-900">
                Campaign Performance
              </p>
              <p className="mt-1 text-[11px] text-gray-500">
                Last 30 days · +36%
              </p>
              <div className="mt-2 h-14 rounded-xl bg-gray-100" />
            </div>

            <div className="absolute -top-6 right-0 w-40 rounded-2xl bg-gray-900/80 p-3 text-xs text-white backdrop-blur">
              <p className="font-semibold">Live Support</p>
              <p className="mt-1 text-[11px] text-gray-300">
                Average reply time: 5m
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */

function Services() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
            Services
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
            Empower Your Brand
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-500 md:text-base">
            From brand strategy to performance marketing, we craft solutions
            that scale with your business.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/20 text-lg">
                {service.icon}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900 md:text-base">
                {service.title}
              </h3>
              <p className="mt-2 text-xs text-gray-500 md:text-sm">
                {service.desc}
              </p>
              <button className="mt-4 inline-flex items-center text-xs font-semibold text-amber-500">
                Learn More <span className="ml-1">↗</span>
              </button>
              <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-amber-400/10 opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT / WE DELIVER ---------------- */

function About() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:px-6 lg:px-8">
        <div className="grid w-full gap-4 md:w-1/2">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/About-1.jpg"
              alt="Team at work"
              className="h-80 w-full object-cover"
            />
          </div>
          <div className="flex gap-4">
            <div className="h-32 flex-1 overflow-hidden rounded-3xl">
              <img
                src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/About2.jpg"
                alt="Creative discussion"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 rounded-3xl bg-amber-400/10 p-4 text-xs text-gray-700">
              <p className="font-semibold text-amber-600">
                10+ Years Experience
              </p>
              <p className="mt-2">
                Helping brands launch, grow and transform in the digital space.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
            About agency
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
            We Deliver Digital Experiences That Drive Results
          </h2>
          <p className="mt-4 text-sm text-gray-600 md:text-base">
            Our team brings together strategists, designers and growth
            specialists who blend creativity with data to build campaigns that
            perform. We partner with you end-to-end: from discovery to launch
            and beyond.
          </p>

          <div className="mt-6 grid gap-4 text-sm text-gray-700 sm:grid-cols-2">
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">
                Human-centered design
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Every touchpoint is crafted with your users in mind.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">
                Data-driven growth
              </p>
              <p className="mt-1 text-xs text-gray-500">
                We iterate, test and optimize for measurable outcomes.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-gray-900 px-6 py-3 text-xs font-semibold text-white shadow-lg transition hover:bg-gray-800">
              Discover More
            </button>
            <div className="flex items-center gap-3 text-xs text-gray-600">
              <div className="h-10 w-10 rounded-full bg-amber-400/40" />
              <div>
                <p className="font-semibold text-gray-900">
                  24/7 Project Support
                </p>
                <p>Dedicated account managers</p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            Have a new project? Let&apos;s talk and build something impactful
            together.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS / WORK PROCESS ---------------- */

function StatsSection() {
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

function ProcessItem({ number, title, desc }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-black/30 p-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-400/20 text-xs font-bold text-amber-300">
        {number}
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-xs text-gray-300">{desc}</p>
      </div>
    </div>
  );
}

/* ---------------- PORTFOLIO ---------------- */

function Portfolio() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
            Our work
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            Where Imagination Meets Execution
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {portfolioImages.map((src, idx) => (
            <div
              key={idx}
              className={`overflow-hidden rounded-3xl ${
                idx === 0 ? "sm:row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`Project ${idx + 1}`}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS / SHAPE YOUR BRAND BLOCK ---------------- */

function Process() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:px-6 lg:px-8">
        <div className="w-full md:w-1/2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
            Our process
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            We Create A Roadmap For Your Brand Growth
          </h2>
          <p className="mt-4 text-sm text-gray-600 md:text-base">
            From the first strategy workshop to campaign launch, you&apos;ll
            always know what we&apos;re working on and why. Transparency and
            communication are key to how we collaborate.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-700">
            <span className="inline-flex items-center rounded-full bg-white px-3 py-2 shadow-sm">
              ✅ Discovery & research
            </span>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-2 shadow-sm">
              ✅ Brand & messaging
            </span>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-2 shadow-sm">
              ✅ Design & development
            </span>
          </div>
          <button className="mt-6 rounded-full bg-gray-900 px-6 py-3 text-xs font-semibold text-white hover:bg-gray-800">
            Learn About Our Process
          </button>
        </div>

        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="relative h-64 w-64 rounded-full bg-amber-400/80 p-8 text-center text-sm font-semibold text-gray-900 shadow-xl">
            <div className="flex h-full flex-col items-center justify-center">
              <p className="text-xs uppercase tracking-[0.24em]">
                Next step
              </p>
              <p className="mt-2 text-xl font-bold">Shape Your Brand</p>
              <p className="mt-2 text-xs">
                Let&apos;s define a digital presence that your audience loves
                and remembers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

// TESTIMONIAL SECTION – like your screenshot


function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonialsData[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center md:px-6 lg:px-8">
        {/* LEFT: Content */}
        <div className="w-full md:w-1/2">
          {/* Small label + orange line */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
              Testimonial
            </span>
            <span className="h-[2px] w-12 bg-amber-500" />
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            What They&apos;re Talking
            <br />
            About Us?
          </h2>

          <div className="mt-6 h-px max-w-xl bg-gray-200" />

          <p className="mt-8 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">
            {active.quote}
          </p>

          <div className="mt-8">
            <p className="text-lg font-bold text-gray-900">{active.name}</p>
            <p className="text-sm text-gray-500">{active.role}</p>
          </div>

          {/* Avatars + arrows */}
          <div className="mt-8 flex items-center gap-6">
            {/* Avatars */}
            <div className="flex items-center gap-3">
              {testimonialsData.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-14 w-14 overflow-hidden transition ${
                      isActive
                        ? "scale-100 opacity-100 ring-2 ring-amber-400 ring-offset-2 ring-offset-white"
                        : "scale-95 opacity-60 hover:opacity-90"
                    }`}
                    style={{
                      clipPath:
                        "polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)",
                    }}
                  >
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </button>
                );
              })}
            </div>

            {/* Line + arrows */}
            <div className="flex flex-1 items-center justify-end gap-4">
              <span className="hidden h-px flex-1 bg-gradient-to-r from-amber-300/60 to-transparent md:block" />

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-amber-500 shadow-[0_12px_35px_rgba(0,0,0,0.08)]"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-amber-500 shadow-[0_12px_35px_rgba(0,0,0,0.12)]"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Arch shape */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="relative h-80 w-64 md:h-96 md:w-72">
            {/* Filled arch */}
            <div className="absolute inset-x-0 bottom-0 h-[80%] rounded-[999px] bg-indigo-100" />
            {/* Orange outline arch */}
            <div className="absolute inset-x-6 bottom-0 h-[78%] rounded-[999px] border-[5px] border-amber-400 bg-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- CLIENT LOGOS ---------------- */

function ClientLogos() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-gray-400 md:text-sm">
          {clients.map((c) => (
            <div
              key={c}
              className="flex h-10 items-center justify-center rounded-full bg-white px-4 shadow-sm"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT + SMALL CTA ROW ABOVE ---------------- */

function ContactAndCTA() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
       
        {/* Contact + simple graphic */}
        <div className="grid gap-8 md:grid-cols-[3fr,2fr]">
          <div className="rounded-3xl bg-gray-50 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
              Contact us
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Get In Touch
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Tell us a bit about your project and we&apos;ll get back within
              one business day.
            </p>

            <form className="mt-6 grid gap-4 text-sm md:grid-cols-2">
              <div className="md:col-span-1">
                <label className="mb-1 block text-xs font-medium text-gray-600">
                  Name
                </label>
                <input
                  className="w-full rounded-2xl border border-gray-200 bg-white px-3 py-2 outline-none focus:border-amber-400"
                  placeholder="Your name"
                />
              </div>
              <div className="md:col-span-1">
                <label className="mb-1 block text-xs font-medium text-gray-600">
                  Email
                </label>
                <input
                  className="w-full rounded-2xl border border-gray-200 bg-white px-3 py-2 outline-none focus:border-amber-400"
                  placeholder="you@example.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-xs font-medium text-gray-600">
                  Subject
                </label>
                <input
                  className="w-full rounded-2xl border border-gray-200 bg-white px-3 py-2 outline-none focus:border-amber-400"
                  placeholder="Project subject"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-xs font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-3 py-2 outline-none focus:border-amber-400"
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="md:col-span-2">
                <button className="w-full rounded-full bg-amber-400 px-6 py-3 text-xs font-semibold text-gray-900 md:w-auto">
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

function SmallStat({ label, value }) {
  return (
    <div className="rounded-3xl bg-gray-50 p-5 text-center text-sm shadow-sm">
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="mt-1 text-xs text-gray-500">{label}</p>
    </div>
  );
}

/* ---------------- BLOG ---------------- */

function Blog() {
  return (
    <section className="bg-gray-900 text-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
              Blog
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              News & Articles
            </h2>
          </div>
          <button className="text-xs font-semibold text-gray-600 hover:text-amber-500">
            View All Posts →
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 text-sm">
                <p className="text-xs text-gray-400">{post.date}</p>
                <h3 className="mt-2 text-sm font-semibold text-gray-900 md:text-base">
                  {post.title}
                </h3>
                <button className="mt-4 inline-flex items-center text-xs font-semibold text-amber-500">
                  Read More <span className="ml-1">↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* Top CTA */}
        <div className="flex flex-col justify-between gap-6 rounded-3xl bg-gradient-to-r from-amber-500 to-amber-400 p-8 text-gray-900 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-bold">
              Looking For A Professional Business Consultant?
            </h3>
            <p className="mt-2 text-sm text-gray-800">
              Let&apos;s discuss your goals and build a roadmap together.
            </p>
          </div>
          <button className="rounded-full bg-gray-900 px-6 py-3 text-xs font-semibold text-white">
            Book A Call
          </button>
        </div>

        {/* Footer content */}
        <div className="mt-10 grid gap-8 text-sm md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 font-bold text-gray-900">
                DP
              </div>
              <p className="text-lg font-semibold text-white">DigiPlus</p>
            </div>
            <p className="mt-3 text-xs text-gray-400">
              A creative digital agency helping brands grow through design,
              storytelling and performance marketing.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              Quick Links
            </p>
            <div className="mt-3 flex flex-col gap-2 text-xs">
              <a href="#" className="hover:text-amber-400">
                About
              </a>
              <a href="#" className="hover:text-amber-400">
                Services
              </a>
              <a href="#" className="hover:text-amber-400">
                Case Studies
              </a>
              <a href="#" className="hover:text-amber-400">
                Blog
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              Contact
            </p>
            <div className="mt-3 text-xs">
              <p>hello@digiplus.com</p>
              <p className="mt-1">+1 (555) 123 4567</p>
              <p className="mt-2 text-gray-400">
                242 Street Avenue, Suite 145, New York, NY
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-5 text-[11px] text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} DigiPlus. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400">
              Terms
            </a>
            <a href="#" className="hover:text-amber-400">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
