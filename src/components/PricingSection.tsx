import { useScrollReveal } from "@/hooks/useScrollReveal";

const packages = [
  {
    type: "3 days per week",
    morning: "6 to 7 | 7 to 8 | 8 to 9 | 9 to 10",
    evening: "5 to 6 | 6 to 7 | 7 to 8",
    days: "Mon, Wed, Fri",
    price: "₹8,000",
  },
  {
    type: "3 days per week",
    morning: "6 to 7 | 7 to 8 | 8 to 9 | 9 to 10",
    evening: "5 to 6 | 6 to 7 | 7 to 8",
    days: "Tue, Thu, Sat",
    price: "₹8,000",
  },
  {
    type: "5 days per week",
    morning: "6 to 7 | 7 to 8 | 8 to 9 | 9 to 10",
    evening: "5 to 6 | 6 to 7 | 7 to 8",
    days: "Mon to Fri",
    price: "₹12,000",
  },
  {
    type: "Weekend Classes",
    morning: "6 to 7 | 7 to 8 | 8 to 9 | 9 to 10",
    evening: "5 to 6 | 6 to 7 | 7 to 8",
    days: "Sat and Sun",
    price: "₹5,000",
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container">
        <div className={`text-center max-w-xl mx-auto mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-3">
            Pricing
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] mb-4 text-balance">
            Individual Yoga Packages
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Flexible plans for every schedule. All sectors in Gurgaon.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto overflow-x-auto ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="py-3 px-4 text-sm font-semibold text-left rounded-tl-xl">Type</th>
                <th className="py-3 px-4 text-sm font-semibold text-left">Morning</th>
                <th className="py-3 px-4 text-sm font-semibold text-left">Evening</th>
                <th className="py-3 px-4 text-sm font-semibold text-center">Days</th>
                <th className="py-3 px-4 text-sm font-semibold text-center rounded-tr-xl">Packages</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, i) => (
                <tr
                  key={i}
                  className={`border-b border-border ${i % 2 === 0 ? "bg-muted/30" : "bg-background"} hover:bg-muted/50 transition-colors`}
                >
                  <td className="py-4 px-4 text-sm font-medium text-foreground">{pkg.type}</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">{pkg.morning}</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">{pkg.evening}</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground text-center">{pkg.days}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-primary text-center">{pkg.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
