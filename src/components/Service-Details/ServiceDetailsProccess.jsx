const processSteps = [
  {
    id: "01",
    title: "Request For Service",
    text: "The process begins when a customer or client requests a service. This could be an inquiry, a complaint or a need for assistance. It’s important to capture detailed information about.",
  },
  {
    id: "02",
    title: "Service Planning",
    text: "The process begins when a customer or client requests a service. This could be an inquiry, a complaint or a need for assistance. It’s important to capture detailed information about.",
  },
  {
    id: "03",
    title: "Quality Control",
    text: "The process begins when a customer or client requests a service. This could be an inquiry, a complaint or a need for assistance. It’s important to capture detailed information about.",
  },
  {
    id: "04",
    title: "Follow-up & Support",
    text: "The process begins when a customer or client requests a service. This could be an inquiry, a complaint or a need for assistance. It’s important to capture detailed information about.",
  },
];

export function ServiceDetailsProcess() {
  return (
    <section className="space-y-5">
      <h3 className="text-lg font-semibold text-gray-900">Service Process</h3>
      <div className="space-y-4">
        {processSteps.map((step) => (
          <div key={step.id} className="flex gap-4">
            <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-yellow-300 bg-yellow-50 text-xs font-semibold text-gray-900">
              {step.id}
            </div>
            <div className="space-y-1 text-sm text-gray-700">
              <p className="font-semibold text-gray-900">{step.title}</p>
              <p className="text-xs md:text-[13px]">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}