import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground border-t border-background/10">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" className="font-heading text-xl font-semibold text-background">
            Parana<span className="text-primary">flow</span> Yoga
          </a>
          <div className="flex items-center gap-4">
            <Link
              to="/yoga-classes-gurgaon"
              className="text-sm text-background/50 hover:text-background/80 transition-colors"
            >
              Yoga Classes in Gurgaon
            </Link>
            <span className="text-background/20">|</span>
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} ParanaflowYoga by Krishan Goyat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
