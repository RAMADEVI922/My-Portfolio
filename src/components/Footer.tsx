import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary">
            <Github size={18} />
          </a>
          <a href="mailto:rsunkara03@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary">
            <Mail size={18} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 Ramadevi Sunkara. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
