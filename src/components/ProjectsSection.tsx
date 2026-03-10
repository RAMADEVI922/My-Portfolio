import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectQrcode from "@/assets/project-qrcode.jpg";

const projects = [
  {
    title: "Multi-Admin E-Commerce Platform",
    description:
      "A web-based e-commerce platform where multiple shop owners can manage their own products. Customers can browse, place orders, and track delivery.",
    technologies: ["React", "JavaScript", "CSS", "Web APIs"],
    image: projectEcommerce,
    github: "https://github.com",
  },
  {
    title: "Smart Restaurant Digital Menu",
    description:
      "A QR code based web application for viewing a restaurant's digital menu. Enables a contactless ordering experience through mobile devices.",
    technologies: ["HTML", "CSS", "JavaScript", "QR Integration"],
    image: projectRestaurant,
    github: "https://github.com",
  },
  {
    title: "QR Code Generator",
    description:
      "A web tool that generates QR codes for text, URLs, or other information. Simple and user-friendly interface for creating and downloading QR codes.",
    technologies: ["JavaScript", "QR Libraries", "HTML", "CSS"],
    image: projectQrcode,
    github: "https://github.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-10 text-3xl font-bold text-foreground">
            Latest <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-base font-bold text-foreground px-4 text-center">{project.title}</h3>
                  <p className="text-xs text-muted-foreground px-4 text-center leading-relaxed">{project.description}</p>
                  <div className="flex gap-3 mt-2">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Title below image */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-foreground text-center">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
