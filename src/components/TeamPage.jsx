
import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";


const teamMembers = [
  {
    name: "Wade Warren",
    role: "UX Designer, Research",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/tm6.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "UX Designer, Research",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/tm6.jpg",
  },
  {
    name: "Jenny Wilson",
    role: "UX Designer, Research",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/tm6.jpg",
  },
  {
    name: "Mike Hardson",
    role: "UX Designer, Research",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/tm6.jpg",
  },
  {
    name: "Julia Gomez",
    role: "UX Designer, Research",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/tm6.jpg",
  },
  {
    name: "Jhon Doe",
    role: "UX Designer, Research",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/tm6.jpg",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <TeamHero />
      <TeamGrid />
      <CTASection />
      <Footer />
    </div>
  );
}


/* ---------- HERO ---------- */

function TeamHero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project5.jpg" // replace with your hero image
          alt="Team hero"
          className="h-full w-full object-cover"
        />
      </div>
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-yellow-500/60" />
      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-20 text-white md:px-6 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-bold md:text-4xl text-center">Team</h1>
        <p className="mt-3 text-sm text-gray-200 text-center">
          Home <span className="mx-1">›</span> <span className="text-white">Team</span>
        </p>
      </div>
    </section>
  );
}

/* ---------- TEAM GRID ---------- */

function TeamGrid() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-gray-100 shadow-[0_20px_40px_rgba(15,23,42,0.10)]">
      {/* photo */}
      <div className="h-64 w-full overflow-hidden rounded-t-[1.75rem]">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* bottom info with little paper tail effect */}
      <div className="relative flex flex-1 flex-col justify-between rounded-b-[1.75rem] bg-gray-100 px-6 pb-6 pt-4">
        {/* small triangle / tail (simple approximation) */}
        <div className="pointer-events-none absolute -left-4 bottom-6 h-8 w-8 rotate-[-25deg] bg-gray-100 shadow-[10px_10px_20px_rgba(15,23,42,0.12)]" />

        <div className="mt-4">
          <p className="text-sm font-semibold text-gray-900">
            {member.name}
          </p>
          <p className="mt-1 text-xs text-gray-500">{member.role}</p>
        </div>
      </div>

      {/* plus button */}
      <button className="absolute -bottom-3 right-6 mb-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white text-lg shadow-[0_10px_25px_rgba(15,23,42,0.40)]">
        +
      </button>
    </div>
  );
}

/* ---------- CTA SECTION ---------- */

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


