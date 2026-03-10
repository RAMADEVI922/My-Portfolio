import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">About Me</p>
          <h2 className="mb-8 text-3xl font-semibold text-foreground">Professional Summary</h2>
          <div className="glass-card p-8 md:p-10">
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              Seeking a challenging position in computer science to leverage my expertise in full-stack development, 
              problem solving, and innovative software design to build scalable, efficient, and user-focused web 
              applications that drive organizational success.
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              Currently pursuing B.Tech in Computer Science and Engineering, I have hands-on experience with 
              React.js, JavaScript, Python, and modern web technologies. My internships at Infosys and Excelr have 
              given me practical exposure to building responsive web applications and working with AI/ML techniques.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I'm passionate about creating seamless user experiences, writing clean and maintainable code, 
              and continuously exploring emerging technologies in web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
