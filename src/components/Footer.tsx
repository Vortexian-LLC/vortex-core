import logo from "@/assets/vortexian-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Vortexian" className="w-8 h-8 opacity-50" />
          <span className="text-muted-foreground/40 text-xs tracking-[0.2em] uppercase font-body">
            © 2026 Vortexian LLC
          </span>
        </div>

        <nav className="flex gap-8">
          {["Strategy", "Intelligence", "Talent", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-muted-foreground/50 hover:text-foreground text-xs tracking-widest uppercase transition-colors duration-300 font-body"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
