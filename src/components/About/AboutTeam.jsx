export function AboutTeamSection() {
    
const teamMembers = [
  {
    name: "Wade Warren",
    role: "UI Designer, Research",
    avatar: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/team-5.png",
  },
  {
    name: "Leslie Alexander",
    role: "UI Designer, Research",
    avatar: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/team-5.png",
  },
  {
    name: "Leslie Alexander",
    role: "UI Designer, Research",
    avatar: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/team-5.png",
  },
  {
    name: "Jenny Wilson",
    role: "UI Designer, Research",
    avatar: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/09/team-5.png",
  },
];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Our Team
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
            What Success Looks
            <br />
            From The Back
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative rounded-3xl bg-gray-50 p-5 text-center shadow-sm"
            >
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-[6px] border-white shadow">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-900">
                {member.name}
              </p>
              <p className="text-xs text-gray-500">{member.role}</p>

              <button className="absolute -bottom-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gray-900 text-white text-xs shadow-md">
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}