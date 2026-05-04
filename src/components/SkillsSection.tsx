import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Flutter", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Laravel", "Node.js", "Python", "REST APIs", "GraphQL", "Firebase"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "IPFS"],
  },
  {
    title: "Design",
    skills: ["Figma", "Adobe XD", "Prototyping", "Wireframing", "Design Systems", "User Research"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Web3.js"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative section-padding">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 bottom-0 h-[500px] w-[500px] rounded-full bg-accent/3 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-display text-xs font-medium uppercase tracking-widest text-primary">
            Expertise
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Tools & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            A versatile toolkit honed across years of building production-grade software and design systems.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-muted px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
