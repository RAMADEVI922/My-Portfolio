const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container text-center space-y-3">
        <p className="text-xs text-muted-foreground">
          © 2026 Ramadevi Sunkara. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground transition-colors hover:text-primary">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground transition-colors hover:text-primary">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground transition-colors hover:text-primary">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
