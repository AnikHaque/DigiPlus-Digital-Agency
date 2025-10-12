import { ServiceCard } from "./ServiceCard";

export function ServiceSection() {

    const services = [
  {
    id: "01",
    title: "UI / UX Creative design",
    image: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/Project1-550x550.jpg",      // service background image
    icon: "/img/icon-uiux.png",       // small circle icon image
  },
  {
    id: "02",
    title: "Digital Marketing",
    image: "/img/service-2.jpg",
    icon: "/img/icon-digital-marketing.png",
  },
  {
    id: "03",
    title: "Marketing Strategy",
    image: "/img/service-3.jpg",
    icon: "/img/icon-strategy.png",
  },
  {
    id: "04",
    title: "Digital Platform",
    image: "/img/service-4.jpg",
    icon: "/img/icon-platform.png",
  },
  {
    id: "05",
    title: "Data Analysis",
    image: "/img/service-5.jpg",
    icon: "/img/icon-data.png",
  },
  {
    id: "06",
    title: "Marketing Strategy",
    image: "/img/service-6.jpg",
    icon: "/img/icon-strategy.png",
  },
];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}