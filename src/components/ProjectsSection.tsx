import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectQrcode from "@/assets/project-qrcode.jpg";

const projects = [
  {
    title: "Multi-Admin E-Commerce Platform",
    description:
      "A web-based e-commerce platform where multiple shop owners can manage their own products. Customers can browse products from different stores, place orders, and track delivery.",
    technologies: ["React", "JavaScript", "CSS", "Web APIs"],
    image: projectEcommerce,
    github: "https://github.com",
  },
  {
    title: "Smart Restaurant Digital Menu",
    description:
      "A QR code based web application that allows customers to scan a QR code to view a restaurant's digital menu. Enables a contactless ordering experience.",
    technologies: ["HTML", "CSS", "JavaScript", "QR Integration"],
    image: projectRestaurant,
    github: "https://github.com",
  },
  {
    title: "QR Code Generator",
    description:
      "A web tool that generates QR codes for text, URLs, or other information. Users can easily create and download QR codes with a simple, user-friendly interface.",
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
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">Work</p>
          <h2 className="mb-10 text-3xl font-semibold text-foreground">Featured Projects</h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card overflow-hidden md:flex"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden md:h-auto md:w-2/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
