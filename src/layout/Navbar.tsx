import Logo from "../assets/images/logo1.png";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#", active: true },
    { label: "Who we are", href: "#who" },
    { label: "What we do", href: "#what" },
    { label: "Our work", href: "#work" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="w-full px-6 py-4">
      <div className="mx-auto container">
        <div className="flex items-center justify-between rounded-full border border-white bg-white/10 opacity-60 px-8 py-3 backdrop-blur-2xl shadow-2xl z-10">
          {/* Logo */}
          <img src={Logo} alt="" />

          {/* Navigation */}
          <nav className="flex items-center gap-8 text-sm font-medium text-white">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative transition-colors duration-200 ${
                  item.active ? "text-white" : "hover:text-white"
                }`}
              >
                {item.label}
                {item.active && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-white" />
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Navbar;