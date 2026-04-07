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
    <section id="pricing" className="py-24 lg:py-32 bg-dark-surface relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-gold/5" />

      <div className="container relative z-10">
        <div className={`text-center max-w-xl mx-auto mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold/50" />
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-gold">Pricing</p>
            <div className="w-12 h-px bg-gold/50" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-[1.1] mb-4 text-cream text-balance">
            Individual Yoga Packages
          </h2>
          <p className="text-cream/60 text-lg text-pretty">
            Flexible plans for every schedule. All sectors in Gurgaon.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto overflow-x-auto ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gold/10 border border-gold/20">
                <th className="py-3 px-4 text-sm font-semibold text-left text-gold rounded-tl-xl">Type</th>
                <th className="py-3 px-4 text-sm font-semibold text-left text-gold">Morning</th>
                <th className="py-3 px-4 text-sm font-semibold text-left text-gold">Evening</th>
                <th className="py-3 px-4 text-sm font-semibold text-center text-gold">Days</th>
                <th className="py-3 px-4 text-sm font-semibold text-center text-gold rounded-tr-xl">Packages</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, i) => (
                <tr
                  key={i}
                  className={`border-b border-gold/10 ${i % 2 === 0 ? "bg-dark-surface-light/50" : "bg-dark-surface"} hover:bg-gold/5 transition-colors`}
                >
                  <td className="py-4 px-4 text-sm font-medium text-cream">{pkg.type}</td>
                  <td className="py-4 px-4 text-sm text-cream/60">{pkg.morning}</td>
                  <td className="py-4 px-4 text-sm text-cream/60">{pkg.evening}</td>
                  <td className="py-4 px-4 text-sm text-cream/60 text-center">{pkg.days}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-gold text-center">{pkg.price}</td>
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
