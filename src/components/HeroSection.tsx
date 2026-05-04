import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/casto-malimali", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/castomalimali", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/castomalimali", label: "X (Twitter)" },
    { icon: Instagram, href: "https://www.instagram.com/castomalimali/", label: "Instagram" },
  ];
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden section-padding pt-32"
    >
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(40 20% 92%) 1px, transparent 1px), linear-gradient(90deg, hsl(40 20% 92%) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-display text-xs font-medium uppercase tracking-widest text-primary">
              Available for Freelance
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Casto E.
            <br />
            <span className="text-gradient">Malimali</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:text-xl"
          >
            Software Developer & UX/UI Designer crafting scalable digital
            products and user-centered interfaces that connect technology with
            human experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
            >
              View My Work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 font-display text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:bg-primary/5"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              — Follow my journey
            </span>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          <div className="relative h-[400px] w-[340px] sm:h-[480px] sm:w-[400px]">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-[2rem] border border-primary/10 animate-pulse-glow" />
            <div className="absolute -inset-8 rounded-[2.5rem] border border-primary/5" />

            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-secondary">
              <img
                src={heroPortrait}
                alt="Casto E. Malimali"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-16 glass rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="font-display text-xs font-semibold text-primary">5+ Years</p>
              <p className="text-xs text-muted-foreground">Experience</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-16 glass rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="font-display text-xs font-semibold text-primary">50+</p>
              <p className="text-xs text-muted-foreground">Projects Delivered</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
