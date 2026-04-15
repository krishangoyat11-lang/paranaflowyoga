import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/yoga-classes-gurgaon", label: "Yoga Classes in Gurgaon" },
  { to: "/home-yoga-gurgaon", label: "Home Yoga in Gurgaon" },
  { to: "/weight-loss-yoga-gurgaon", label: "Weight Loss Yoga" },
  { to: "/personal-yoga-trainer-gurgaon", label: "Personal Yoga Trainer" },
  { to: "/corporate-yoga-gurgaon", label: "Corporate Yoga" },
  { to: "/morning-yoga-gurgaon", label: "Morning Yoga Classes" },
  { to: "/yoga-instructor-at-home-gurgaon", label: "Yoga Instructor at Home" },
];

const Footer = () => {
  return (
    <footer className="py-16 bg-dark-surface border-t border-gold/10">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          <div>
            <a href="#" className="font-heading text-xl font-semibold text-cream mb-3 block">
              Parana<span className="text-gold">flow</span> Yoga
            </a>
            <p className="text-cream/40 text-sm leading-relaxed">
              Professional yoga training by Krishan Goyat — National Yoga Champion with 17+ years of experience. Serving Gurgaon & NCR.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-gold uppercase tracking-wider mb-4">Our Services</h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-cream/50 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-gold uppercase tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-cream/50">
              <a href="tel:+918950622342" className="hover:text-gold transition-colors">+91 8950622342</a>
              <a href="https://wa.me/918950622342" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">WhatsApp Us</a>
              <span>Gurgaon & NCR, Haryana</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gold/10 pt-6">
          <p className="text-sm text-cream/30 text-center">
            © {new Date().getFullYear()} ParanaflowYoga by Krishan Goyat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
