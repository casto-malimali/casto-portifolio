import { motion } from "framer-motion";
import { Code2, Palette, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building robust, scalable applications from database design to polished frontends.",
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "Creating intuitive interfaces rooted in user research, wireframing, and prototyping.",
  },
  {
    icon: Lightbulb,
    title: "Digital Innovation",
    description: "Leveraging emerging technologies like Web3, AI, and cross-platform frameworks.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Collaborating closely with stakeholders to deliver measurable business value.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative section-padding">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-display text-xs font-medium uppercase tracking-widest text-primary">
            About Me
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Bridging <span className="text-gradient">Code & Design</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-secondary-foreground">
              I'm Casto E. Malimali, a freelance Software Developer and UX/UI
              Designer passionate about turning complex challenges into elegant
              digital solutions. With a strong foundation in both engineering and
              design, I build products that are not only technically sound but
              also deeply human-centered.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From blockchain-powered verification systems to cross-platform
              mobile applications, my work spans the full spectrum of modern
              software development. Every project begins with understanding the
              user — and ends with something that genuinely improves their
              experience.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="border-l-2 border-primary pl-4">
                <p className="font-display text-2xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="border-l-2 border-primary/50 pl-4">
                <p className="font-display text-2xl font-bold text-foreground">30+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                <p className="font-display text-2xl font-bold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
