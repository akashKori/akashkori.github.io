import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Define project types
type ProjectCategory = "web" | "mobile" | "design" | "all";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory[];
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A responsive admin dashboard for e-commerce stores with data visualization and user management.",
    image: "placeholder.svg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    category: ["web"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Personal Finance Tracker",
    description: "A web app for tracking personal expenses and income with budgeting features.",
    image: "placeholder.svg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    category: ["web"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Weather App",
    description: "A mobile-friendly weather application with forecast data and location tracking.",
    image: "placeholder.svg",
    tags: ["React Native", "Expo", "API Integration"],
    category: ["mobile"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects and skills.",
    image: "placeholder.svg",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    category: ["web", "design"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category.includes(filter)));
    }
  }, [filter]);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredProjects]);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: "All", value: "all" },
    { label: "Web", value: "web" },
    { label: "Mobile", value: "mobile" },
    { label: "Design", value: "design" },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Here are some projects I've worked on. Each one represents different
            skills and technologies I've learned along my journey.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category.value)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="overflow-hidden border border-border/50 animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="flex flex-wrap gap-1 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}