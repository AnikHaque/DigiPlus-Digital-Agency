import { useState } from "react";

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

export function ServiceDetailsFAQSection() {

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