export function ContactAndCTA() {
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