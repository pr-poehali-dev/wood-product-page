import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      title: "Corporate Website",
      description: "Full-featured corporate website with modern design and CMS integration",
      tags: ["React", "TypeScript", "Design"],
      image: "https://cdn.poehali.dev/projects/a31c3e85-acb4-4e4f-a868-eddb9cd6bb21/files/fb59af09-edf0-471d-be19-593331765719.jpg"
    },
    {
      title: "Mobile Application",
      description: "Cross-platform mobile app with intuitive interface and real-time features",
      tags: ["Mobile", "UI/UX", "Development"],
      image: "https://cdn.poehali.dev/projects/a31c3e85-acb4-4e4f-a868-eddb9cd6bb21/files/1f501e17-8bb1-486f-b30c-7523149954fd.jpg"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization tool with advanced analytics capabilities",
      tags: ["React", "Data", "API"],
      image: "https://cdn.poehali.dev/projects/a31c3e85-acb4-4e4f-a868-eddb9cd6bb21/files/fb59af09-edf0-471d-be19-593331765719.jpg"
    }
  ];

  const skills = [
    { name: "Frontend Development", level: 95 },
    { name: "Backend Integration", level: 88 },
    { name: "UI/UX Design", level: 85 },
    { name: "System Architecture", level: 90 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-semibold text-foreground">Portfolio</div>
            <div className="flex gap-8">
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Professional
              <br />
              Developer
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Creating scalable web applications with focus on code quality,
              performance, and exceptional user experience.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="text-base px-8">
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src="https://cdn.poehali.dev/projects/a31c3e85-acb4-4e4f-a868-eddb9cd6bb21/files/654797ee-4740-4d9d-b0af-ef74ef308a74.jpg" 
              alt="Professional portrait"
              className="rounded-lg w-full max-w-md object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="container mx-auto px-6 py-24 bg-muted/30">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">Selected works showcasing expertise</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-accent text-accent-foreground rounded-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="skills" className="container mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Core Competencies
          </h2>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-6 py-24 bg-muted/30">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Open to discussing new projects and collaborations
            </p>
          </div>

          <Card className="border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project"
                    rows={6}
                    className="bg-background resize-none"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Icon name="Github" size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Icon name="Linkedin" size={20} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Icon name="Mail" size={20} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2025 Professional Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
