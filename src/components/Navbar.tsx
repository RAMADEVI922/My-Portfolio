import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop nav - appears after scroll */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: scrolled ? 0 : -80 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
      >
        <div className="glass mx-auto mt-4 max-w-3xl rounded-full px-8 py-3">
          <div className="flex items-center justify-between">
            <a href="#" className="font-heading text-sm font-semibold text-foreground">
              RS
            </a>
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile nav - always sticky */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="glass px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-heading text-sm font-semibold text-foreground">RS</a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="glass overflow-hidden"
            >
              <div className="flex flex-col gap-4 px-6 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
