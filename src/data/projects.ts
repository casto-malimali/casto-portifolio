import projectCertificate from "@/assets/project-certificate.jpg";
import projectEvents from "@/assets/project-events.jpg";
import projectNews from "@/assets/project-news.jpg";
import projectIncubation from "@/assets/project-incubation.jpg";
import projectUxui from "@/assets/project-uxui.jpg";
import projectVijana4Food from "@/assets/project-vijana4food.png";
import projectKsmOrganic from "@/assets/project-ksmorgan.png";
import projectChanyaChange from "@/assets/project-chanyachange.png";
import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "Vijana4Food",
    overview:
      "A digital platform dedicated to empowering youth in sustainable agriculture, providing resources, training, and community engagement for a greener future.",
    image: projectVijana4Food,
    technologies: ["React", "Node.js", "Tailwind CSS", "PostgreSQL"],
    category: "Sustainable Agriculture",
  },
  {
    title: "KSM Organic",
    overview:
      "An online presence for KSM Organic, showcasing organic farming products and sustainable agricultural practices to promote healthy living.",
    image: projectKsmOrganic,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "CMS"],
    category: "E-Commerce / Agri-Tech",
  },
  {
    title: "Chanya Change",
    overview:
      "A social impact platform focused on community development and positive social change through advocacy, education, and collaborative projects.",
    image: projectChanyaChange,
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Firebase"],
    category: "Social Impact",
  }
];
