const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/[0.05] bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left Side: Logo + Tagline */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                <img src="/logo.png" alt="Noraizen Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-serif italic tracking-tight">Noraizen</span>
            </div>

            {/* Divider (hidden on mobile) */}
            <div className="hidden md:block w-px h-4 bg-white/10" />

            {/* Tagline */}
            <p className="text-muted-foreground text-sm font-light">
              One intelligent workspace for everything you do.
            </p>
          </div>

          {/* Right Side: Copyright */}
          <p className="text-xs text-muted-foreground font-light">
            © {new Date().getFullYear()} Noraizen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
