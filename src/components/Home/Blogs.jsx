export function HomeBlog() {

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