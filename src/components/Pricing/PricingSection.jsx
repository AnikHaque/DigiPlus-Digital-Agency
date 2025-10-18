import { PricingCard } from "./PricingCard";

export function PricingSection() {
    
    const plans = [
  {
    name: "Personal Plan",
    price: 50,
    period: "Monthly",
    description: "Customized anything in anytime",
    featured: false,
  },
  {
    name: "Premium Plan",
    price: 60,
    period: "Monthly",
    description: "Customized anything in anytime",
    featured: true,
    badge: "Save 20%",
  },
  {
    name: "Standard Plan",
    price: 60,
    period: "Monthly",
    description: "Customized anything in anytime",
    featured: false,
  },
];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}