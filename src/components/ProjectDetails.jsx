import React from "react";

export default function ProjectDetailsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <ProjectHero />
      <ProjectContent />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-gray-900/95 to-gray-900/75 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 font-bold text-gray-900">
            DP
          </div>
          <div>
            <p className="text-lg font-semibold leading-tight">DigiPlus</p>
            <p className="text-[11px] text-gray-300">Digital Agency</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {["Home", "Pages", "Services", "Projects", "Blog", "Contact"].map(
            (item) => (
              <a key={item} className="hover:text-yellow-400 transition">{item}</a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 text-xs">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/10">
              📞
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[.16em]">Call Anytime</p>
              <p className="text-sm font-semibold">017-50050088</p>
            </div>
          </div>

          <button className="h-10 w-10 rounded-full bg-white/10">☰</button>
        </div>

        <button className="h-9 w-9 rounded-full bg-white/10 text-sm md:hidden">☰</button>
      </div>
    </header>
  );
}

/* ---------------- HERO SECTION ---------------- */
function ProjectHero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      <img
        src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/Project1.jpg"
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/75 to-yellow-500/60" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 text-white lg:py-24">
        <h1 className="text-3xl font-bold md:text-[34px] text-center">Creative Branding Agency</h1>
        <p className="mt-3 text-sm text-gray-200 text-center">
          Home <span className="mx-1">›</span> Projects <span className="mx-1">›</span>
          Creative Branding Agency
        </p>
      </div>
    </section>
  );
}

/* ---------------- PROJECT CONTENT ---------------- */
function ProjectContent() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* IMAGE + DETAILS CARD */}
        <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
          <img
            src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/Project1.jpg"
            className="w-full h-[360px] rounded-2xl object-cover"
          />

          <div className="rounded-2xl bg-gray-50 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
            <InfoRow label="Clients" value="Design Studio in USA" />
            <InfoRow label="Project Type" value="Digital Product Design" />
            <InfoRow label="Date" value="6 January 2025" />
            <InfoRow label="Website" value="yourodomain.com" />
          </div>
        </div>

        {/* DESCRIPTION */}
        <h1 className="text-xl font-semibold text-gray-900 mt-10">Best Digital Solution
</h1>
        <div className="mt-4 text-sm leading-[1.8] text-gray-600">
         But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure
On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour
        </div>

        {/* INTERESTING FACTS SECTION */}
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Interesting Facts</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Must explain to you how all this mistaken idea of denouncing pleasure and praising pain...
            </p>
          </div>

          <ul className="grid gap-3 text-sm">
            {[
              "✔ Efficient Sprint Planning",
              "✔ Standups and Demos",
              "✔ Hassle Free Payment",
              "✔ Iterative Delivery Approach",
              "✔ Problem-solving",
              "✔ Deliver Perfect Time",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-900">
                <span className="text-yellow-500">✔</span> {item.slice(2)}
              </li>
            ))}
          </ul>
        </div>

        {/* GALLERY */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {["https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project2-550x550.jpg", "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project2-550x550.jpg", "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project2-550x550.jpg"].map((src) => (
            <img key={src} src={src} className="h-[230px] w-full rounded-xl object-cover" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Reusable row */
function InfoRow({ label, value }) {
  return (
    <div className="mb-6">
      <p className="text-sm font-semibold text-gray-900">{label}</p>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  );
}

/* ---------------- CTA ---------------- */
function CTASection() {
  return (
    <section className="bg-gray-900 pb-16 pt-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-300 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-6">
            <img
              src="/img/cta-person.jpg"
              className="hidden h-28 w-28 rounded-3xl object-cover md:block"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.3em]">Need Help</p>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Looking For Professional Business Consultant?
              </h3>
            </div>
          </div>
          <button className="mt-6 md:mt-0 bg-gray-900 text-white px-6 py-3 rounded-full text-xs font-semibold">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-gray-900 pt-12 pb-10 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 grid gap-8 md:grid-cols-4 text-sm">
        {/* 1 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-9 w-9 flex items-center justify-center bg-yellow-400 rounded-xl text-gray-900 font-bold">
              DP
            </div>
            <p className="text-lg font-semibold text-white">DigiPlus</p>
          </div>
          <p className="text-xs text-gray-400">
            At vero eos et accusamus justo odio dignissimos ducimus blanditiis
          </p>

          <div className="mt-4 flex bg-gray-800 px-2 py-1 rounded-full items-center">
            <input className="bg-transparent flex-1 px-2 text-xs outline-none" placeholder="Email address" />
            <button className="bg-yellow-400 h-8 w-8 rounded-full text-gray-900 text-xs">➤</button>
          </div>
        </div>

        {/* 2 */}
        <FooterLinks title="Quick Link" links={["Feature", "Pricing Plan", "Best Program", "Press Kit"]} />
        {/* 3 */}
        <FooterLinks title="Company" links={["About", "Team Member", "Reviews", "Latest News"]} />
        {/* 4 */}
        <FooterLinks
          title="Contact"
          links={[
            "55 Main Street, 2nd block Melbourne, Australia",
            "Support@gmail.com",
            "+000 (123) 44 55",
          ]}
        />
      </div>
      <p className="mt-8 border-t border-gray-800 pt-5 text-center text-[11px] text-gray-500">
        © Copyright 2025 by kodesolution.com
      </p>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{title}</p>
      <div className="mt-3 flex flex-col gap-2 text-xs">
        {links.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}
