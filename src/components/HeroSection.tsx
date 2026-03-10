import { motion } from "framer-motion";
import { Download, Linkedin, Github } from "lucide-react";
import profileImg from "@/assets/profile-avatar.png";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(231_100%_76%/0.06)_0%,transparent_70%)]" />

      <div className="section-container flex flex-col items-center gap-10 py-20 md:flex-row md:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <p className="mb-3 text-sm font-medium tracking-widest uppercase text-primary">
            Full-Stack Web Developer
          </p>
          <h1 className="mb-6 text-4xl font-semibold leading-tight text-foreground md:text-6xl">
            Ramadevi<br />
            <span className="text-gradient">Sunkara</span>
          </h1>
          <p className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Building scalable, efficient, and user-focused web applications with modern technologies. Passionate about clean code and innovative software design.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 glow"
            >
              <Download size={16} />
              Download Resume
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-border md:h-72 md:w-72 glow">
            <img
              src={profileImg}
              alt="Ramadevi Sunkara"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
