import React, { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Tailwind CSS", "Node.js", "Git", "Figma", "Responsive Design", "UI/UX"
];

export default function About() {
  // Animation on scroll functionality
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
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-on-scroll">
            <h3 className="text-2xl font-bold">
              Full-Stack Developer with a passion for creating interactive experiences
            </h3>
            <p>
              Hello! I'm a passionate developer who enjoys creating elegant solutions to complex problems. I have experience working with various web technologies and frameworks.
            </p>
            <p>
              My journey in web development started 3 years ago, and I've been continuously learning and improving my skills since then. I believe in writing clean, maintainable code and creating user-friendly interfaces.
            </p>
            <p>
              When I'm not coding, you can find me reading tech blogs, contributing to open source, or exploring new technologies.
            </p>
          </div>

          <Card className="bg-background/50 border-0 shadow-md animate-on-scroll">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-medium text-muted-foreground mb-2">Education</h4>
                  <p>BS in Computer Science</p>
                  <p className="text-sm text-muted-foreground">University Name, 2018-2022</p>
                </div>

                <div>
                  <h4 className="font-medium text-muted-foreground mb-2">Experience</h4>
                  <p>Frontend Developer</p>
                  <p className="text-sm text-muted-foreground">Company Name, 2022-Present</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}