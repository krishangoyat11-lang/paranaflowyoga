const Footer = () => {
  return (
    <footer className="py-12 bg-foreground border-t border-background/10">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" className="font-heading text-xl font-semibold text-background">
            Parana<span className="text-primary">flow</span> Yoga
          </a>
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} ParanaflowYoga by Krishan Goyat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
