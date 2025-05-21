import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <p className="text-accent font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Akash kori
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Front-end Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              I build accessible, responsive, and performant web applications 
              using modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="gap-2" size="lg">
                <Github className="h-5 w-5" />
                GitHub Profile
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="w-60 h-60 md:w-80 md:h-80 rounded-full bg-primary/10 mx-auto overflow-hidden relative">
              {/* This div represents the profile image area - you can add an actual image here */}
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-primary/30">
                <img src="https://lh3.googleusercontent.com/a/ACg8ocK73rYjQxRsyrI15u_48yNwfZTxzEFiLwkdVqQm39PipOmoIsw=s96-c" alt="Profile" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-accent/10 -z-10"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primary/10 -z-10"></div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a 
            href="#about" 
            className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="mb-2">Scroll Down</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}