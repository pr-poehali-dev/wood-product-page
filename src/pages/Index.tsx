import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      title: "Корпоративный веб-сайт",
      description: "Разработка полнофункционального корпоративного сайта с CMS интеграцией",
      tags: ["React", "TypeScript", "CMS"],
      image: "https://cdn.poehali.dev/projects/a31c3e85-acb4-4e4f-a868-eddb9cd6bb21/files/3e97772a-c80e-4ae8-87e0-984ba8ee4666.jpg"
    },
    {
      title: "E-commerce платформа",
      description: "Создание масштабируемого интернет-магазина с системой оплаты",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      image: "https://cdn.poehali.dev/projects/a31c3e85-acb4-4e4f-a868-eddb9cd6bb21/files/534e902d-457c-46b8-bde7-c9cb4ac35028.jpg"
    },
    {
      title: "Аналитическая панель",
      description: "Разработка инструмента визуализации данных в реальном времени",
      tags: ["React", "D3.js", "API"],
      image: "https://cdn.poehali.dev/projects/a31c3e85-acb4-4e4f-a868-eddb9cd6bb21/files/854d4b06-e0a5-4a7c-b482-21798b89d129.jpg"
    }
  ];

  const skills = [
    { name: "Frontend разработка", level: 95 },
    { name: "Backend интеграция", level: 88 },
    { name: "UI/UX дизайн", level: 85 },
    { name: "Архитектура систем", level: 90 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-semibold text-foreground">Портфолио</div>
            <div className="flex gap-8">
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Проекты
              </a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Навыки
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-6 py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
            Разработка
            <br />
            цифровых продуктов
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Создаю масштабируемые веб-приложения с фокусом на качество кода,
            производительность и пользовательский опыт.
          </p>
          <Button size="lg" className="text-base px-8">
            Связаться
          </Button>
        </div>
      </section>

      <section id="projects" className="container mx-auto px-6 py-24 bg-muted/30">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Избранные проекты</h2>
          <p className="text-lg text-muted-foreground">Примеры реализованных решений</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 animate-scale-in border-border"
              style={{ animationDelay: `${index * 100}ms` }}
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
            Ключевые компетенции
          </h2>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Связаться</h2>
            <p className="text-lg text-muted-foreground">
              Открыт к обсуждению новых проектов и сотрудничества
            </p>
          </div>

          <Card className="border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
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
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем проекте"
                    rows={6}
                    className="bg-background resize-none"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Icon name="Github" size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Icon name="Linkedin" size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Icon name="Mail" size={20} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-sm text-muted-foreground">
            © 2024 Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;