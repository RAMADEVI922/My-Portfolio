import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 text-3xl font-bold text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Hi, I'm <span className="text-foreground font-semibold">Ramadevi Sunkara</span>, a passionate web developer dedicated to crafting responsive, user-centric digital experiences. Currently pursuing a B.Tech in Computer Science at Avanthi Institute of Engineering and Technology, I have a strong foundation in front-end technologies and an expanding interest in back-end development.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I thrive on solving complex problems, exploring new technologies, and building impactful solutions. Whether it's developing seamless interfaces or contributing to open-source projects, I'm driven by innovation and delivering value.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I'm actively seeking internship, freelance, and collaborative opportunities where I can learn, grow, and make a meaningful impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
