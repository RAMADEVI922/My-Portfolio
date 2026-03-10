import { motion } from "framer-motion";
import { Code2, FileCode, Braces, Atom, Terminal, GitBranch, Database, Layers } from "lucide-react";

const skills = [
  { name: "HTML", icon: FileCode },
  { name: "CSS", icon: Code2 },
  { name: "JavaScript", icon: Braces },
  { name: "React.js", icon: Atom },
  { name: "Python", icon: Terminal },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "SQL & DBMS", icon: Database },
  { name: "OOPs", icon: Layers },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">Toolkit</p>
          <h2 className="mb-10 text-3xl font-semibold text-foreground">Skills & Technologies</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card flex flex-col items-center gap-3 p-6"
              >
                <Icon size={28} className="text-primary" />
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
