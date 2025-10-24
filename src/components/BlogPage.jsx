import { Footer } from "./shared/Footer";

const posts = [
  {
    id: 1,
    title: "Web Development Essentials Every Business",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project5-672x448.jpg",
    author: "Rimon",
    category: "AI Content",
    day: "03",
    month: "JUN",
  },
  {
    id: 2,
    title: "How AI is Revolutionizing Web Development",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project4-672x448.jpg",
    author: "Rimon",
    category: "AI Technology",
    day: "03",
    month: "JUN",
  },
  {
    id: 3,
    title: "Effective Hashtag Strategies to Increase Reach",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/slider5-672x448.jpg",
    author: "Kamrul",
    category: "UI Design",
    day: "01",
    month: "JUN",
  },
  {
    id: 4,
    title: "10 Ways To Achieve Your Business Goal",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/About-672x448.jpg",
    author: "Kamrul",
    category: "Social Media",
    day: "01",
    month: "JUN",
  },
  {
    id: 5,
    title: "Necessity may give us best virtual court",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/Bg2-672x448.jpg",
    author: "Kamrul",
    category: "Digital Agency",
    day: "01",
    month: "JUN",
  },
  {
    id: 6,
    title: "Top crypto Exchange influencers in china",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/bg1-672x448.jpg",
    author: "Kamrul",
    category: "Brand Strategy",
    day: "01",
    month: "JUN",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <BlogHero />
      <BlogGrid />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ================= HEADER ================= */

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

/* ================= HERO ================= */

function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project5.jpg" 
          alt="Blog hero"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-yellow-500/60" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-white md:px-6 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-bold md:text-[34px] text-center">Blog</h1>
        <p className="mt-3 text-sm text-gray-200 text-center">
          Home <span className="mx-1">›</span>{" "}
          <span className="text-white">Blog</span>
        </p>
      </div>
    </section>
  );
}

/* ================= BLOG GRID ================= */

function BlogGrid() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
      {/* Image + date badge */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        {/* date badge, top-right */}
        <div className="absolute right-4 top-4">
          <div className="overflow-hidden rounded-[12px] bg-yellow-400 px-3 py-2 text-center text-[11px] font-semibold leading-tight text-gray-900 shadow-md">
            <div>{post.day}</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.18em]">
              {post.month}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 pb-5 pt-4">
        {/* meta */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-500">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            By {post.author}
          </span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            {post.category}
          </span>
        </div>

        {/* title */}
        <h3 className="mt-3 text-[15px] font-semibold leading-snug text-gray-900">
          {post.title}
        </h3>

        {/* bottom row */}
        <div className="mt-5 flex items-center justify-between text-[11px] text-gray-600">
          <button className="flex items-center gap-1 font-semibold uppercase tracking-[0.18em] text-gray-900">
            <span>Read More</span>
            <span className="text-xs">➝</span>
          </button>
          <span className="flex items-center gap-1 text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            No Comments
          </span>
        </div>
      </div>
    </article>
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


