import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import GoldDivider from '@/components/ui/GoldDivider';
import { TrendingUp, Hotel, HardHat, Factory, Building2, Building, Landmark, MapPin, Mail, Globe } from 'lucide-react';

const Projects = () => {
  const focusAreas = [
    { icon: TrendingUp, title: 'Self-Funded Business Expansion' },
    { icon: Hotel, title: 'Hospitality Development' },
    { icon: HardHat, title: 'Construction & Infrastructure' },
    { icon: Factory, title: 'Industrial Recycling' },
    { icon: Building2, title: 'Real Estate Growth' },
  ];

  const upcomingProjects = [
    { icon: Building, title: 'Modern Hotels', description: 'Luxury hospitality developments across multiple states' },
    { icon: Landmark, title: 'Convention Centers', description: 'World-class venues for business and events' },
  ];

  const commitments = [
    'No public or private fundraising',
    'No third-party investors',
    'No shared ownership',
    'Full responsibility & accountability',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-cream-gradient">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-accent mb-6 animate-fade-up">
              Growth & Development
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-8 animate-fade-up animate-delay-100">
              Projects & Future Plans
            </h1>
            <GoldDivider className="my-10 animate-fade-up animate-delay-200" />
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up animate-delay-300">
              Strategic developments powered by ARA Group's vision and capital
            </p>
          </div>
        </div>
      </section>

      {/* Current Focus Areas */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle
            subtitle="Strategic Focus"
            title="Current Focus Areas"
          />
          
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                className="group flex items-center gap-5 p-6 bg-card border border-border/50 hover:border-accent/30 hover:shadow-elegant transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <area.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {area.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects - India */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4 animate-fade-up">
                Upcoming Projects
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 animate-fade-up animate-delay-100">
                Expanding to India
              </h2>
              <span className="inline-block text-4xl animate-fade-up animate-delay-200">🇮🇳</span>
            </div>
            
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-12 animate-fade-up animate-delay-300">
              ARA Group of Companies is planning to develop world-class hospitality and 
              convention facilities across multiple states in India, fully financed by 
              ARA Group's own capital, without external investment or joint ventures.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {upcomingProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="group p-10 bg-background border border-border/50 hover:border-accent/30 hover:shadow-elegant transition-all duration-500 text-center animate-fade-up"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-accent/10 rounded mx-auto mb-6 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <project.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Pledge"
            title="Our Commitment"
          />
          
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="grid gap-4">
              {commitments.map((commitment, index) => (
                <div
                  key={commitment}
                  className="flex items-center gap-5 p-6 bg-card border border-border/50 animate-fade-up"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-lg text-foreground font-medium">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent mb-6 animate-fade-up">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 animate-fade-up animate-delay-100">
              Contact
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-up animate-delay-200">
                <div className="w-12 h-12 bg-accent/10 rounded mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-medium mb-2">Headquarters</h4>
                <p className="text-primary-foreground/60">Qatar</p>
              </div>
              
              <div className="text-center animate-fade-up animate-delay-300">
                <div className="w-12 h-12 bg-accent/10 rounded mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-medium mb-2">Operations</h4>
                <p className="text-primary-foreground/60">Qatar | Saudi Arabia | UAE | India</p>
              </div>
              
              <div className="text-center animate-fade-up animate-delay-400">
                <div className="w-12 h-12 bg-accent/10 rounded mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-medium mb-2">Email</h4>
                <p className="text-primary-foreground/60">info@aragroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
