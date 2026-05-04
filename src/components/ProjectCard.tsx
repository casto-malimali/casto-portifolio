import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";

export interface Project {
  title: string;
  overview: string;
  image: string;
  technologies: string[];
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-display text-xs font-medium text-primary">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.overview}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View Case Study
          <ExternalLink className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
