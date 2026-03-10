import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">Get in Touch</p>
          <h2 className="mb-10 text-3xl font-semibold text-foreground">Contact</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <a href="mailto:rsunkara03@gmail.com" className="glass-card flex items-center gap-4 p-5 transition-colors hover:border-primary/30">
              <Mail size={18} className="text-primary" />
              <span className="text-sm text-muted-foreground">rsunkara03@gmail.com</span>
            </a>
            <a href="tel:+919849924480" className="glass-card flex items-center gap-4 p-5 transition-colors hover:border-primary/30">
              <Phone size={18} className="text-primary" />
              <span className="text-sm text-muted-foreground">+91 9849924480</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-4 p-5 transition-colors hover:border-primary/30">
              <Linkedin size={18} className="text-primary" />
              <span className="text-sm text-muted-foreground">LinkedIn</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-4 p-5 transition-colors hover:border-primary/30">
              <Github size={18} className="text-primary" />
              <span className="text-sm text-muted-foreground">GitHub</span>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card flex flex-col gap-4 p-6 md:p-8"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="resize-none rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 glow"
            >
              <Send size={16} />
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
