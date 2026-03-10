import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { title: "Generative AI", issuer: "Infosys" },
  { title: "Web Development / Java", issuer: "Excelr" },
  { title: "AI & ML Virtual Internship", issuer: "EduSkills" },
  { title: "Python Programming", issuer: "VaultofCodes" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">Achievements</p>
          <h2 className="mb-10 text-3xl font-semibold text-foreground">Certifications</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card flex items-center gap-4 p-5"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary">
                <Award size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
