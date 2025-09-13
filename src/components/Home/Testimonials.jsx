import { useState } from "react";

export function Testimonials() {

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