import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Python",
  "Git", "GitHub", "SQL & DBMS", "OOPs",
  "Web Development", "Problem Solving", "Communication",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-10 text-3xl font-bold text-foreground">
            <span className="text-primary">Skills</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="rounded-lg border border-primary/40 bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_12px_hsl(var(--primary)/0.2)] cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
