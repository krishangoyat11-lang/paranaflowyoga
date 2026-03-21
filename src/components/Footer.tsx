const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" className="font-heading text-xl font-semibold text-foreground">
            Parana<span className="text-primary">flow</span> Yoga
          </a>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Paranaflow Yoga by Krishan Goyat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
