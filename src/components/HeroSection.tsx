import { motion } from "framer-motion";
import { Download, Linkedin, Github } from "lucide-react";
import profileImg from "@/assets/profile-avatar.png";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      <div className="section-container flex flex-col items-center gap-10 py-20 md:flex-row md:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="mb-2 text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Hi, Myself{" "}
            <span className="text-gradient">Ramadevi Sunkara</span>
          </h1>
          <p className="mb-4 text-lg text-foreground">
            And I'm a <span className="text-primary font-semibold">Full-Stack Web Developer</span>
          </p>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            I specialize in creating modern, responsive, and user-friendly web applications.
            Let's build something amazing together!
          </p>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-4 mb-6 md:justify-start">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              <Github size={18} />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
