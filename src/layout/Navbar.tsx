import Logo from "../assets/images/logo1.png";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Who we are", id: "who" },
    { label: "What we do", id: "what" },
    { label: "Our work", id: "work" },
    { label: "Contact Us", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false); // close mobile menu when clicked

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="w-full z-50 px-4 sm:px-6 py-4">
      <div className="mx-auto container">
        {/* Desktop Navbar */}
        <motion.div
          className="hidden lg:flex items-center justify-between rounded-full border-2 border-white bg-white/20 px-8 py-3 backdrop-blur-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={Logo}
            alt="Logo"
            className="h-10 w-auto"
            whileHover={{ scale: 1.05 }}
          />

          <nav className="flex items-center gap-8 text-sm font-medium text-white">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative cursor-pointer bg-transparent outline-none transition-colors duration-200 ${
                  activeSection === item.id ? "text-white" : "text-white/80"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-white rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </nav>
        </motion.div>

        {/* Mobile Navbar (plain) */}
        <div className="flex lg:hidden items-center justify-between px-4 py-3">
          <motion.img
            src={Logo}
            alt="Logo"
            className="h-10 w-auto"
            whileHover={{ scale: 1.05 }}
          />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2 rounded-full hover:bg-white/10 transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-2 flex flex-col items-center gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-white text-base font-medium transition-colors duration-200 ${
                  activeSection === item.id ? "text-white" : "text-white/80"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
