// BlogDetailsPage.jsx
import React from "react";

export default function BlogDetailsPage() {
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
                  item === "Blog"
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

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      <img
        src="/img/blog-hero-bg.jpg"
        alt="Blog hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-yellow-500/60" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 text-white md:px-6 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-bold leading-tight md:text-[32px]">
          Web Development Essentials Every
          <br />
          Business
        </h1>
        <p className="mt-3 text-xs text-gray-200 md:text-sm">
          Home <span className="mx-1">›</span> Blog <span className="mx-1">›</span>{" "}
          2025 <span className="mx-1">›</span> June <span className="mx-1">›</span>{" "}
          3 <span className="mx-1">›</span>{" "}
          <span className="text-white">
            Web Development Essentials Every Business
          </span>
        </p>
      </div>
    </section>
  );
}

/* ---------------- MAIN (LEFT / RIGHT) ---------------- */

function MainSection() {
  return (
    <main className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* lg: 3 column grid, left takes 2, right takes 1 */}
        <div className="grid gap-10 lg:grid-cols-3">
          {/* LEFT COLUMN */}
          <div className="space-y-8 lg:col-span-2">
            {/* Main image */}
            <div className="overflow-hidden rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
              <img
                src="/img/blog-details-main.jpg"
                alt="Main"
                className="h-[330px] w-full object-cover md:h-[360px]"
              />
            </div>

            {/* Article */}
            <article className="space-y-6 text-sm leading-relaxed text-gray-600 md:text-[15px]">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Your business absolutely needs a updated daily
                </h2>
                <p className="mt-3">
                  This service is best for our Full Representation Service
                  clients who want the fastest preparation and submission time
                  possible. We will prepare and submit your application within
                  48 working hours of receiving the supporting documents
                  requested. We are committed to an integrated communication
                  strategy and offer our clients an exclusive access, providing
                  various information.
                </p>
                <p className="mt-3">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame belongs to those who fail in their duty
                  through weakness of will.
                </p>
              </div>

              {/* Quote */}
              <div className="rounded-2xl bg-gray-50 px-6 py-5 text-sm leading-relaxed text-gray-700">
                <p>
                  “We can easily manage it if we will only take each day, the
                  burden appointed to it. But the load will be too heavy for us
                  if we carry yesterday&apos;s burden over again today, and then
                  add the burden of the morrow before we are required to bear
                  it factorial non.”
                </p>
                <p className="mt-3 text-sm font-semibold text-gray-800">
                  Robert Kosta
                </p>
                <div className="mt-2 text-right text-3xl font-serif text-gray-300">
                  &#8221;
                </div>
              </div>

              {/* Second heading */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  We focus on the solutions not on the problems
                </h2>
                <p className="mt-3">
                  UK hotels are experiencing increased operating costs due to
                  new tax changes, including rises in employers’ national
                  insurance contributions and the national living wage. Those
                  changes, effective from April, are expected to significantly
                  impact hotel operations, with some hoteliers anticipating
                  price increases of around 10%.
                </p>
                <p className="mt-3">
                  While the luxury market might absorb these hikes, mid-range
                  hotels may struggle, potentially leading to reduced services
                  and staffing.
                </p>
              </div>
            </article>

            {/* Two images */}
            <div className="grid gap-5 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/img/blog-details-sub-1.jpg"
                  alt="Sub 1"
                  className="h-[220px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/img/blog-details-sub-2.jpg"
                  alt="Sub 2"
                  className="h-[220px] w-full object-cover"
                />
              </div>
            </div>

            {/* Latest News more information (inside article) */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900">
                Latest News more Information
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 md:text-[14px]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                  <span>
                    Everything in your industry that happens text with their
                    software passage.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                  <span>
                    Distribution patterns may not be as critical the text with
                    their software.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                  <span>
                    Analysis is part of good management history of lorem ipsum
                    the text with their.
                  </span>
                </li>
              </ul>

              {/* Posted in / Tags */}
              <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-4 text-xs text-gray-700 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Posted in</span>
                  <span className="rounded-full bg-yellow-50 px-3 py-1 text-[11px] font-medium text-gray-900">
                    AI Content
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Tags</span>
                  <span className="rounded-full border border-yellow-300 bg-yellow-50 px-3 py-1 text-[11px] font-medium text-gray-900">
                    Creative
                  </span>
                </div>
              </div>
            </section>

            {/* Comment form */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900">
                Leave A Comment
              </h3>
              <p className="mt-2 text-xs text-gray-500">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <form className="mt-5 space-y-4 text-sm">
                <textarea
                  rows={5}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-xs outline-none focus:border-yellow-400"
                  placeholder="Write your comment here..."
                />

                <div className="grid gap-4 md:grid-cols-3">
                  <input
                    className="rounded-2xl border border-gray-200 bg-white px-4 py-2 text-xs outline-none focus:border-yellow-400"
                    placeholder="Name"
                  />
                  <input
                    className="rounded-2xl border border-gray-200 bg-white px-4 py-2 text-xs outline-none focus:border-yellow-400"
                    placeholder="Email"
                  />
                  <input
                    className="rounded-2xl border border-gray-200 bg-white px-4 py-2 text-xs outline-none focus:border-yellow-400"
                    placeholder="Website"
                  />
                </div>

                <label className="flex items-start gap-2 text-[11px] text-gray-500">
                  <input type="checkbox" className="mt-[2px]" />
                  <span>
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </span>
                </label>

                <button className="mt-1 rounded-full bg-yellow-400 px-8 py-3 text-xs font-semibold tracking-[0.16em] text-gray-900">
                  POST COMMENT
                </button>
              </form>
            </section>
          </div>

          {/* RIGHT COLUMN (SIDEBAR) */}
          <aside className="space-y-8">
            {/* Search */}
            <div className="rounded-2xl bg-gray-50 p-5 shadow-[0_16px_32px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-2">
                <input
                  className="flex-1 rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs outline-none focus:border-yellow-400"
                  placeholder="Search here"
                />
                <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-sm text-gray-900">
                  🔍
                </button>
              </div>
            </div>

            {/* Latest News (SIDEBAR) */}
            <div className="rounded-2xl bg-gray-50 p-5 shadow-[0_16px_32px_rgba(15,23,42,0.06)]">
              <h4 className="text-sm font-semibold text-gray-900">
                Latest News
              </h4>
              <div className="mt-4 space-y-4 text-xs text-gray-700">
                <SidebarPostItem
                  title="Web Development Essentials Every Business"
                  date="June 3, 2025"
                  image="/img/sidebar-1.jpg"
                />
                <SidebarPostItem
                  title="Top Crypto Exchange influencers in china"
                  date="June 1, 2025"
                  image="/img/sidebar-2.jpg"
                />
                <SidebarPostItem
                  title="Necessity may give us best virtual court"
                  date="June 1, 2025"
                  image="/img/sidebar-3.jpg"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="rounded-2xl bg-gray-50 p-5 shadow-[0_16px_32px_rgba(15,23,42,0.06)]">
              <h4 className="text-sm font-semibold text-gray-900">
                Categories
              </h4>
              <ul className="mt-4 space-y-2 text-xs text-gray-700">
                {[
                  "AI Content",
                  "AI Technology",
                  "Brand Strategy",
                  "Digital Agency",
                  "Social Media",
                  "UI Design",
                ].map((cat) => (
                  <li key={cat} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    <span>{cat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="rounded-2xl bg-gray-50 p-5 shadow-[0_16px_32px_rgba(15,23,42,0.06)]">
              <h4 className="text-sm font-semibold text-gray-900">Tag</h4>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                {["Creation", "Creative", "Digital", "Optimize", "Solution", "Strategy"].map(
                  (tag) => (
                    <button
                      key={tag}
                      className="rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-700 hover:border-yellow-400"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

/* sidebar item component */
function SidebarPostItem({ title, date, image }) {
  return (
    <div className="flex gap-3">
      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div>
        <p className="text-[11px] font-medium leading-snug text-gray-900">
          {title}
        </p>
        <p className="mt-1 text-[10px] text-gray-500">{date}</p>
      </div>
    </div>
  );
}

/* ---------------- CTA ---------------- */

function CTASection() {
  return (
    <section className="bg-gray-900 pb-16">
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

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="bg-gray-900 pb-10 pt-10 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 text-sm md:grid-cols-4">
          {/* Logo + text */}
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

          {/* Quick Link */}
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

          {/* Company */}
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

          {/* Contact */}
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
