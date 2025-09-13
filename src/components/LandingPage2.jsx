// LandingPage.jsx
import React from "react";

export default function LandingPage2() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsProcessSection />
      <PortfolioSection />
      <WhyChooseSection />
      <TeamSection />
      <TestimonialSection />
      <ContactStripSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */

function Navbar() {
  const menu = ["Home", "Pages", "Services", "Projects", "Blog", "Contact"];

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-gray-900/95 to-gray-900/80 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-sm font-bold text-gray-900">
            DP
          </div>
          <span className="text-lg font-semibold">DigiPlus</span>
        </div>

        {/* Nav menu */}
        <nav className="hidden items-center gap-6 text-xs font-medium md:flex">
          {menu.map((item) => (
            <a
              key={item}
              href="#"
              className={`uppercase tracking-[0.18em] ${
                item === "Home" ? "text-yellow-400" : "hover:text-yellow-400"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Call & menu icon */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 text-xs">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/10">
              📞
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-gray-300">
                Call Anytime
              </p>
              <p className="text-sm font-semibold text-white">
                017-50050088
              </p>
            </div>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg">
            ☰
          </button>
        </div>

        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* background image */}
      <img
        src="/img/hero-bg.jpg"
        alt="Hero bg"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-yellow-500/70" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-white md:flex-row md:items-center md:py-20 lg:px-8">
        {/* Left content */}
        <div className="w-full md:w-1/2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-300">
            Digital Agency
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Make Your <br />
            Brand<span className="text-yellow-400">Future</span>-
            <br />
            Proof.
          </h1>
          <p className="mt-4 text-sm text-gray-200 md:text-[15px]">
            We craft digital experiences that help your brand grow faster,
            smarter, and stronger in an ever-changing world.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-yellow-400 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-900">
              Get Started
            </button>
            <button className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-100">
              ▶ <span>Watch Video</span>
            </button>
          </div>

          {/* small stat card */}
          <div className="mt-8 flex gap-4 text-xs">
            <div className="rounded-2xl bg-white/10 px-4 py-3">
              <p className="text-2xl font-bold text-yellow-400">68%</p>
              <p className="mt-1 text-[11px] text-gray-200">
                Client conversion boost
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-3">
              <p className="text-2xl font-bold text-yellow-400">98%</p>
              <p className="mt-1 text-[11px] text-gray-200">
                Customer satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="mt-10 w-full md:mt-0 md:w-1/2">
          <div className="relative mx-auto max-w-xs">
            <img
              src="/img/hero-man.png"
              alt="Hero man"
              className="w-full rounded-[40px] object-cover shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
            />
            {/* floating card */}
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-3 text-[10px] text-gray-900 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Active
                  </p>
                  <p className="text-xs font-bold">UI Design Project</p>
                </div>
                <button className="rounded-full bg-gray-900 px-3 py-1 text-[10px] font-semibold text-white">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */

function ServicesSection() {
  const data = [
    {
      title: "Branding & Creative Design",
      text: "Build a strong visual identity that speaks to your audience.",
      icon: "🎨",
    },
    {
      title: "Website Design & UX/UI",
      text: "Modern, responsive websites focused on user experience.",
      icon: "💻",
    },
    {
      title: "Digital Product Strategy",
      text: "From idea to launch, plan winning digital products.",
      icon: "📈",
    },
    {
      title: "Marketing & Automation",
      text: "Scale campaigns with data-driven automation.",
      icon: "⚙️",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-400">
          Services
        </p>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">
          Empower Your Brand
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl bg-white p-6 text-left shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(15,23,42,0.12)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50 text-lg">
                {item.icon}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-xs text-gray-500">{item.text}</p>
              <button className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-900">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT / WE DELIVER ---------------- */

function AboutSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr,1.6fr]">
          {/* images left */}
          <div className="grid gap-4 md:grid-rows-[1.2fr,1fr]">
            <div className="overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
              <img
                src="/img/about-main.jpg"
                alt="About"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-3xl shadow-[0_16px_32px_rgba(15,23,42,0.1)]">
                <img
                  src="/img/about-sub-1.jpg"
                  alt="sub1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-[0_16px_32px_rgba(15,23,42,0.1)]">
                <img
                  src="/img/about-sub-2.jpg"
                  alt="sub2"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* text right */}
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-400">
              About Our Agency
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              We Deliver Innovative Digital Solutions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-[15px]">
              From branding to full-funnel digital marketing, we align strategy,
              design, and technology to help ambitious brands grow faster.
            </p>
            <div className="mt-6 grid gap-4 text-xs text-gray-700 md:grid-cols-2">
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                <p>Over 10 years of experience working with global brands.</p>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                <p>Integrated team of strategists, designers & developers.</p>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                <p>Measurable outcomes and transparent reporting.</p>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                <p>Dedicated support before, during, and after launch.</p>
              </div>
            </div>
            <button className="mt-7 w-max rounded-full bg-gray-900 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DARK STATS + WORK PROCESS ---------------- */

function StatsProcessSection() {
  const stats = [
    { label: "Active Projects", value: "8K" },
    { label: "Client Reviews", value: "10K" },
    { label: "Completed", value: "7K+" },
    { label: "Countries Served", value: "25" },
  ];

  const steps = [
    { icon: "🧩", title: "Choose Service" },
    { icon: "⚙️", title: "Strategy & Planning" },
    { icon: "🚀", title: "Launch & Scale" },
  ];

  return (
    <section className="bg-gray-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid gap-6 text-center text-xs uppercase tracking-[0.18em] text-gray-400 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-bold text-yellow-400">
                {item.value}
              </p>
              <p className="mt-2 text-[11px]">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Work process */}
        <div className="mt-10 rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-gray-950 via-[#120f24] to-[#1c1633] px-8 py-10 text-center shadow-[0_28px_60px_rgba(0,0,0,0.8)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Our Work Process
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            From Strategy to Launch
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl bg-white/5 px-6 py-6 text-left text-sm shadow-[0_18px_40px_rgba(0,0,0,0.6)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10 text-lg">
                  {step.icon}
                </div>
                <h3 className="mt-4 text-sm font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs text-gray-300">
                  Collaborative workshops, clear milestones, and transparent
                  delivery from day one.
                </p>
              </div>
            ))}
          </div>

          <button className="mt-8 rounded-full bg-yellow-400 px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-900">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO / IMAGES GRID ---------------- */

function PortfolioSection() {
  const images = [
    "/img/port-1.jpg",
    "/img/port-2.jpg",
    "/img/port-3.jpg",
    "/img/port-4.jpg",
    "/img/port-5.jpg",
    "/img/port-6.jpg",
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-400">
          Our Works
        </p>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">
          Where Imagination Meets Strategy
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {images.map((src, index) => (
            <div
              key={src}
              className={`overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.08)] ${
                index < 3 ? "h-64" : "h-56"
              }`}
            >
              <img
                src={src}
                alt={`Portfolio ${index + 1}`}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE US ---------------- */

function WhyChooseSection() {
  return (
    <section className="bg-gray-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr,1.1fr]">
          {/* Left text/cta card */}
          <div className="rounded-3xl bg-gradient-to-br from-gray-950 via-[#151328] to-[#21153a] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.8)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Why You Should Choose Us
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Reliable & Transparent Digital Partner
            </h2>
            <p className="mt-4 text-sm text-gray-300">
              We don&apos;t just deliver projects, we partner with you to create
              long-term growth. Data, design, and technology — fully aligned.
            </p>

            <div className="mt-6 space-y-3 text-xs text-gray-300">
              <FeatureRow text="Clear roadmaps and milestone-based delivery." />
              <FeatureRow text="In-house team, no hidden outsourcing." />
              <FeatureRow text="Real-time reporting dashboards & insights." />
            </div>

            <button className="mt-6 rounded-full bg-yellow-400 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-900">
              Let&apos;s Talk
            </button>
          </div>

          {/* Right circles */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-72 w-72 rounded-full bg-yellow-400/90 p-6">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-yellow-300/80 text-center text-sm font-semibold text-gray-900">
                Sharpen Your Brand
              </div>
            </div>
            <div className="absolute -left-6 top-6 h-32 w-32 rounded-full bg-yellow-200/90 text-xs font-semibold text-gray-900 flex items-center justify-center text-center px-4">
              Build Trust
            </div>
            <div className="absolute -right-4 bottom-0 h-32 w-32 rounded-full bg-yellow-500/90 text-xs font-semibold text-gray-900 flex items-center justify-center text-center px-4">
              Be Transparent
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ text }) {
  return (
    <div className="flex gap-2">
      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
      <p>{text}</p>
    </div>
  );
}

/* ---------------- TEAM SECTION ---------------- */

function TeamSection() {
  const members = [
    { name: "Wade Warren", role: "UX Designer, Research", img: "/img/team-1.jpg" },
    { name: "Leslie Alexander", role: "Lead Creative", img: "/img/team-2.jpg" },
    { name: "Jenny Wilson", role: "Brand Strategist", img: "/img/team-3.jpg" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-400">
          Our Team
        </p>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">
          What Success Looks From The Back
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {members.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center rounded-3xl bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="h-40 w-40 overflow-hidden rounded-[2rem]">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-900">
                {m.name}
              </p>
              <p className="mt-1 text-[11px] text-gray-500">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIAL ---------------- */

function TestimonialSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr,1.1fr]">
          {/* text left */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Testimonial
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              What They&apos;re Talking About Us?
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-gray-600 md:text-[15px]">
              “Contrary to popular belief, Lorem Ipsum is not simply random
              text. It has roots in a piece of classical Latin literature from
              45 BC, making it over 2000 years old.”
            </p>

            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-900">
                Diana Panty
              </p>
              <p className="text-[11px] text-gray-500">Business Owner</p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Avatar src="/img/av-1.jpg" />
              <Avatar src="/img/av-2.jpg" />
              <Avatar src="/img/av-3.jpg" />
              <div className="ml-6 flex gap-3">
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-xs">
                  ←
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-900 bg-gray-900 text-xs text-white">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* shape right */}
          <div className="flex items-center justify-center">
            <div className="relative h-72 w-56 overflow-hidden rounded-[3rem] bg-purple-100">
              <div className="absolute inset-6 rounded-[3rem] border-[6px] border-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Avatar({ src }) {
  return (
    <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-md">
      <img src={src} alt="" className="h-full w-full object-cover" />
    </div>
  );
}

/* ---------------- CONTACT STRIP + SMALL FORM ---------------- */

function ContactStripSection() {
  return (
    <section className="relative bg-gray-950 py-16">
      {/* slanted background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#1f2937,_#020617)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.3fr,1.1fr] items-center">
          <div className="text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Recognized As
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              One Leading Digital Company.
            </h2>
            <p className="mt-4 text-sm text-gray-300">
              Let&apos;s discuss how we can help your brand stand out and grow
              faster in the digital age.
            </p>
          </div>

          {/* white contact card */}
          <div className="rounded-3xl bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.7)]">
            <h3 className="text-sm font-semibold text-gray-900">
              Get in Touch
            </h3>
            <div className="mt-4 space-y-3 text-xs">
              <div className="grid gap-3 md:grid-cols-2">
                <InputSmall placeholder="Name" />
                <InputSmall placeholder="Email" />
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <InputSmall placeholder="Phone" />
                <InputSmall placeholder="Subject" />
              </div>
              <textarea
                className="h-20 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-xs outline-none focus:border-yellow-400"
                placeholder="Message"
              />
              <button className="mt-1 w-full rounded-full bg-yellow-400 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-900">
                SEND A MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputSmall({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-xs outline-none focus:border-yellow-400"
    />
  );
}

/* ---------------- BLOG / NEWS ---------------- */

function BlogSection() {
  const posts = [
    {
      title: "Web Development Essentials Every Business",
      img: "/img/blog-1.jpg",
    },
    {
      title: "How AI is Revolutionizing Web Development",
      img: "/img/blog-2.jpg",
    },
    {
      title: "Effective Hashtag Strategies to Increase Reach",
      img: "/img/blog-3.jpg",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-400">
          News & Articles
        </p>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">
          Latest From Our Blog
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-5 pt-4 text-xs">
                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
                  Ai Content · 03 JUN
                </p>
                <h3 className="mt-2 text-[13px] font-semibold text-gray-900">
                  {post.title}
                </h3>
                <div className="mt-4 flex items-center justify-between text-[11px] text-gray-500">
                  <button className="font-semibold uppercase tracking-[0.18em] text-gray-900">
                    Read More →
                  </button>
                  <span>No Comments</span>
                </div>
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
    <footer className="bg-gray-950 pb-10 pt-12 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* CTA strip on top of footer */}
        <div className="mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-300 p-6 md:flex md:items-center md:justify-between md:p-10">
          <div className="flex items-center gap-6">
            <img
              src="/img/footer-cta-person.jpg"
              alt="Consultant"
              className="hidden h-24 w-24 rounded-3xl object-cover md:block"
            />
            <div className="text-gray-900">
              <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                Looking For Professional
              </p>
              <h3 className="mt-1 text-xl font-bold">
                Business Consultant ?
              </h3>
            </div>
          </div>
          <button className="mt-6 rounded-full bg-gray-900 px-6 py-3 text-xs font-semibold text-white md:mt-0">
            GET STARTED FREE
          </button>
        </div>

        {/* bottom footer */}
        <div className="grid gap-8 text-xs md:grid-cols-4">
          {/* Logo info */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 font-bold text-gray-900">
                DP
              </div>
              <p className="text-lg font-semibold text-white">DigiPlus</p>
            </div>
            <p className="mt-3 text-gray-400">
              At vero eos et accusamus justo odio dignissimos ducimus
              blanditiis.
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

          <FooterCol
            title="Quick Link"
            items={["Features", "Pricing Plan", "Best Program", "Press Kit"]}
          />
          <FooterCol
            title="Company"
            items={["About", "Team Member", "Reviews", "Latest News"]}
          />
          <FooterCol
            title="Contact"
            items={[
              "55 Main Street, 2nd block Melbourne, Australia",
              "support@gmail.com",
              "+000 (123) 44 55",
            ]}
          />
        </div>

        <div className="mt-8 border-t border-gray-800 pt-5 text-[11px] text-gray-500 flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <p>© Copyright 2025 by kodesolution.com</p>
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

function FooterCol({ title, items }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-500">
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
