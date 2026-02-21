import Logo from "../assets/images/logo1.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import RealTimeNotice from "../components/RealTimeNotice";
import { useSocket } from "../context/socket-context";

const Navbar = () => {
  const { triggerRealEvent } = useSocket();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Who we are", id: "who" },
    { label: "What we do", id: "what" },
    { label: "Our work", id: "work" },
    { label: "Contact Us", id: "contact" },
  ];

  const handleNavClick = (id: string, label: string) => {
    setActiveSection(id);
    setMenuOpen(false); // close mobile menu when clicked

    // Trigger real-time event
    triggerRealEvent(`A visitor is viewing '${label}'`);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Close menu first
      setMenuOpen(false);

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // scrollIntoView will use the clean layout position after the menu is gone
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 600);
    }
  };

  return (
    <header className="w-full z-50">
      <RealTimeNotice />
      <div className="w-full px-4 sm:px-6 pt-2 lg:pt-6">
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
                  onClick={() => handleNavClick(item.id, item.label)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`relative cursor-pointer bg-transparent outline-none transition-colors duration-200 ${activeSection === item.id ? "text-white" : "text-white/80"
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
              className="h-7 w-auto"
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
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="lg:hidden overflow-hidden mt-4"
              >
                <div className="flex flex-col gap-3 p-6 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleNavClick(item.id, item.label)}
                      className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${activeSection === item.id
                        ? "bg-white text-[#010A36] font-bold"
                        : "text-white hover:bg-white/10"
                        }`}
                    >
                      <span className="text-lg">{item.label}</span>
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="activeCircle"
                          className="w-2 h-2 rounded-full bg-[#010A36]"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
