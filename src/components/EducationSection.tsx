import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Avanthi Institute of Engineering and Technology",
    period: "2022 – 2026",
    grade: "CGPA: 7.9",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Gayatri Junior College",
    period: "2020 – 2022",
    grade: "CGPA: 7.3",
  },
  {
    degree: "SSC",
    institution: "Zilla Parishad High School",
    period: "2019 – 2020",
    grade: "CGPA: 9.9",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">Background</p>
          <h2 className="mb-10 text-3xl font-semibold text-foreground">Education</h2>
        </motion.div>

        <div className="relative ml-4 border-l border-border pl-8">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[2.55rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                <GraduationCap size={14} className="text-primary" />
              </div>
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">{item.period}</p>
              <h3 className="mb-1 text-lg font-semibold text-foreground">{item.degree}</h3>
              <p className="mb-1 text-sm text-muted-foreground">{item.institution}</p>
              <p className="text-sm font-medium text-muted-foreground">{item.grade}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
